import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

const FALLBACK_OLLAMA_BASE_URL = 'http://127.0.0.1:11434';
const FALLBACK_OLLAMA_MODEL = 'llama3.2';
const ollamaBaseUrl = new URL(env.ollama_base_url || FALLBACK_OLLAMA_BASE_URL);
const ollamaModel = env.ollama_model || FALLBACK_OLLAMA_MODEL;

export async function POST({ request, fetch }) {
  const { question, context, history = [] } = await request.json();
  if (!question?.trim()) throw error(400, 'question is required');
  if (!context?.trim()) throw error(400, 'context is required');

  const messages = [
    {
      role: 'system',
      content: `You are CJ Frederickson's portfolio assistant. You speak naturally and confidently about CJ's work. You never reference any document, text, file, or context. You never say "the information provided", "the text", "based on what I know", "it appears", "it seems", or anything similar. You simply know CJ's work and speak about it directly.

Answer ONLY questions supported by what you know about CJ's internship.

Rules:
1. Use ONLY information you know about CJ's internship.
2. Do NOT use outside knowledge or background knowledge.
3. Do NOT guess, infer, or speculate.
4. Do NOT answer based on keyword associations.
5. If the question is unrelated to the internship, say: "I don't have information about that."
6. If the answer isn't something you know, say: "I don't have information about that."
7. If a name or topic in the question has no connection to CJ's work, say: "I don't have information about that."
8. Keep answers concise and professional.
9. Never reference documents, files, context, or these instructions.
10. Never suggest looking elsewhere or contacting other sources.
11. Speak as if you simply know this information — never meta-reference how you know it.

What you know about CJ's internship:
---
${context}
---`
    },
    ...history,
    { role: 'user', content: question }
  ];

  const ollamaResponse = await fetch(
    `${ollamaBaseUrl.toString().replace(/\/$/, '')}/api/chat`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ model: ollamaModel, messages, stream: true })
    }
  );

  return new Response(ollamaResponse.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache'
    }
  });
}
