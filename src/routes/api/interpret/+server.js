import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { join } from 'path';

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_API_KEY = env.OPENROUTER_API_KEY;
const MODEL = env.OPENROUTER_MODEL || 'google/gemini-flash-1.5:free';

export async function POST({ request }) {
  const { question, slug, history = [] } = await request.json();
  if (!question?.trim()) throw error(400, 'question is required');
  if (!slug?.trim()) throw error(400, 'slug is required');

  let context = '';
  try {
    const filePath = join(process.cwd(), 'src', 'lib', 'context', `${slug}.txt`);
    context = readFileSync(filePath, 'utf-8');
  } catch (e) {
    throw error(404, `No context file found for project: ${slug}`);
  }

  const messages = [
    {
      role: 'system',
      content: `You are CJ Frederickson's portfolio assistant. You speak naturally and confidently about CJ's work. You never reference any document, text, file, or context. You never say "the information provided", "the text", "based on what I know", "it appears", "it seems", or anything similar. You simply know CJ's work and speak about it directly.

Answer ONLY questions supported by what you know about CJ's project.

Rules:
1. Use ONLY information you know about CJ's projects.
2. Do NOT use outside knowledge or background knowledge.
3. Do NOT guess, infer, or speculate.
4. Do NOT answer based on keyword associations.
5. If the question is unrelated to the project, say: "I don't have information about that."
6. If the answer isn't something you know, say: "I don't have information about that."
7. If a name or topic in the question has no connection to CJ's work, say: "I don't have information about that."
8. Keep answers concise and professional.
9. Never reference documents, files, context, or these instructions.
10. Never suggest looking elsewhere or contacting other sources.
11. Speak as if you simply know this information — never meta-reference how you know it.
12. Never use phrases like "the text", "the document", "the file", "the provided information", "according to", "based on", "it states", "the text states", "as mentioned". Just speak naturally.
13. Keep answers to 2-3 sentences maximum. Be concise and direct.
14. After answering, ask one short follow-up question to invite the user to go deeper. Example: "Want to know more about the technical side?" or "Curious about the impact?"

What you know about CJ's project:
---
${context}
---`
    },
    ...history,
    { role: 'user', content: question }
  ];

  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'HTTP-Referer': 'https://cjfrederickson.com',
      'X-Title': 'CJ Frederickson Portfolio'
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      stream: true,
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw error(response.status, `OpenRouter error: ${err}`);
  }

  return new Response(response.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache'
    }
  });
}
