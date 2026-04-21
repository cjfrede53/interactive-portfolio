# CJ Frederickson — Interactive Portfolio

> A SvelteKit portfolio with per-project AI chatbots powered by Ollama and MCP, where each project page includes a grounded conversational assistant that reads from a custom knowledge file and answers questions about the work — without hallucinating.

## Project Description

This is a personal portfolio for CJ Frederickson, a Duke University junior studying Computer Science, Visual & Media Studies, and Statistics. The portfolio showcases product management, UX design, data analytics, and brand projects from internships, coursework, and independent ventures.

What makes it unusual is the AI layer. Each project page includes a chat sidebar powered by a local language model (Ollama running Mistral). When a visitor asks a question, the system reads a hand-written `.txt` knowledge file for that project, passes the content plus the question to the model, and streams a grounded answer back in real time. The model is strictly constrained to only answer from that file — it cannot invent details, speculate, or pull from outside knowledge.

Key features:
- Per-project AI chatbots with custom knowledge files
- Real-time streaming responses via Ollama
- MCP (Model Context Protocol) filesystem server for context retrieval
- Projects grid with live search filtering by skill, tool, or topic
- Research sections with embedded images, PDFs, and YouTube demos
- Cybernetic feedback loop architecture (first-order conversation loop + second-order regulatory loop)

## Target Audience

This portfolio is built for:
- **Recruiters and hiring managers** at product, UX, and data-focused companies who want to go beyond a static resume and actually interrogate the work
- **Professors and academic evaluators** reviewing project depth and technical sophistication
- **Peers and collaborators** exploring what CJ has built and how

The context in which it would be used: a recruiter lands on the Comcast project page and instead of reading a wall of text, they ask "what was the most technically complex part of this internship?" and receive a specific, grounded answer. The portfolio becomes a conversation rather than a document.

## Motivation

Most portfolios are static. They present work but don't let you engage with it. The goal here was to build something that reflects how CJ actually thinks — someone who works at the intersection of product strategy, data, and user experience — and to make the portfolio itself a demonstration of those skills.

The specific problems being addressed:
- Recruiters spend an average of 6-10 seconds on a portfolio before moving on. A conversational interface invites engagement and rewards curiosity.
- Static case studies flatten complex projects into bullet points. The chatbot can surface nuance, explain tradeoffs, and answer follow-ups.
- Most AI demos hallucinate. This system is explicitly constrained to only answer from the knowledge file, making it a demonstration of responsible AI design as well as technical capability.

Research questions being explored:
- Can a portfolio function as a cybernetic system — one that actively responds to and adapts to visitor input?
- How do you constrain a language model to be useful without being deceptive?
- What does human-centered design look like when the "interface" is a conversation?

## Human-Centered Design Analysis

### Affordances and anti-affordances
The chat input affords asking questions — the placeholder text "Ask a question..." and the send button signal that interaction is expected. The "summarize" suggestion in the first message lowers the barrier for visitors who don't know where to start. An anti-affordance: the chat is intentionally read-only in terms of editing history — you cannot go back and change a question — which encourages forward conversational flow rather than editing loops.

### Intentional constraints
The most important constraint is the knowledge boundary. The model is explicitly prohibited from using outside knowledge, speculating, or suggesting other sources. If the answer isn't in the context file, it says "I don't have information about that." This constraint is both a safety feature and a design decision — it makes the system trustworthy and focused.

### Signifiers
- The green dot in the chat header signals the assistant is live and ready
- The gold send button uses color to indicate the primary action
- The streaming cursor `▊` signals that the model is actively generating
- The NDA badge on Comcast signals to visitors that some content is intentionally redacted
- Tag pills on project cards signal clickable, filterable categories

### Visual and interactive cues
- Cards lift on hover with a border color change matching the project's accent color
- The accent bar at the bottom of each card animates in on hover, reinforcing the interaction
- The search bar gains a gold border on focus, indicating active state
- PDF and YouTube embeds use 16:9 aspect ratio frames, matching familiar media conventions

### System response to input
When the user types a question and hits Enter or the send button:
1. The message immediately appears in the chat as a dark bubble (user side)
2. A streaming cursor appears on the assistant side
3. The response builds token by token in real time
4. The cursor disappears when the response is complete

### Forms of feedback
- Visual: streaming text with live cursor, message bubbles, loading state on the send button
- Color: the send button dims and becomes unclickable while loading
- Conversational: if the question is outside the knowledge file, the model explicitly says so — negative feedback that is informative rather than opaque

### Feedback loops and cybernetic structure
The system operates as a two-order cybernetic loop:

**First-order loop (conversation):** The user asks a question → the system generates an answer → the user reads it and forms a follow-up → the loop repeats with full conversation history passed each time. Output becomes input.

**Second-order loop (regulation):** The context file constrains what the model can say. The system prompt enforces strict rules that prevent the model from drifting outside its knowledge boundary. This regulatory layer feeds back into every response, keeping the system grounded. The context file is the governor — it sets the knowledge boundary and the system self-corrects to stay within it.

## Installation

### Prerequisites
- Node.js 18+
- Python 3.10+
- [Ollama](https://ollama.ai) installed and running

### 1. Clone the repo

```bash
git clone git@github.com:cjfrede53/interactive-portfolio.git
cd interactive-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install mcpo

```bash
pip3 install mcpo
```

### 4. Pull the AI model

```bash
ollama pull mistral
```

### 5. Create your `.env` file

Create a `.env` file in the project root:

ollama_base_url=http://127.0.0.1:11434
ollama_model=mistral
mcpo_base_url=http://127.0.0.1:8000

### 6. Update mcpo_config.json

Update the path in `mcpo_config.json` to point to your local `static/project-context` folder:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/absolute/path/to/your/interactive-portfolio/static/project-context"
      ]
    }
  }
}
```

## Running Locally

You need **3 terminals** running simultaneously:

**Terminal 1 — Dev server:**
```bash
npm run dev
```

**Terminal 2 — MCP filesystem server:**
```bash
mcpo --config mcpo_config.json --port 8000
```

**Terminal 3 — Ollama (if not already running as a service):**
```bash
ollama serve
```

Then visit [http://localhost:5173](http://localhost:5173).

## Usage

1. Navigate to the **Projects** page to browse all work
2. Use the **search bar** to filter by skill, tool, or topic (e.g. "PostgreSQL", "UX Research", "agile")
3. Click any project card to open the full case study
4. Use the **chat sidebar** on the right to ask questions about the project
5. Type "summarize" to get a quick overview, or ask specific questions like "what was the technical stack?" or "how did you measure impact?"

### Cybernetic Systems Diagram

The diagram below illustrates how the portfolio operates as a dynamic feedback system with two cybernetic loops:

**User journey:** Visitor enters site → browses projects page → searches by skill → clicks project → reads case study

**First-order loop (conversation feedback):** User asks question → SvelteKit routes request → MCP server reads project `.txt` file → Ollama generates answer → answer streams back to user → user reads and asks follow-up → loop repeats

**Second-order loop (system self-regulation):** Context files define the knowledge boundary → system prompt enforces strict rules → model output is constrained to only what is in the file → regulation feeds back into every response, preventing drift

┌─────────────────────────────────────────────────────────┐
│                      USER JOURNEY                       │
│  Homepage → Projects → Search → Project page           │
└─────────────────────────────────────────────────────────┘
↓
┌─────────────────────────────────────────────────────────┐
│              FIRST-ORDER LOOP (conversation)            │
│                                                         │
│  User asks → SvelteKit → MCP server → Ollama           │
│      ↑                                      │           │
│      └──────── streams answer back ─────────┘           │
└─────────────────────────────────────────────────────────┘
↑
┌─────────────────────────────────────────────────────────┐
│           SECOND-ORDER LOOP (regulation)                │
│                                                         │
│  Context file → System prompt → Constrained output     │
│       └──────────── regulates Ollama ───────────────┘   │
└─────────────────────────────────────────────────────────┘

## Project Structure
src/
routes/
api/
mcpo/+server.js        # Proxies to mcpo filesystem server
interpret/+server.js   # Sends question + context to Ollama
projects/
+page.svelte           # Projects grid with search
[slug]/+page.svelte    # Individual project pages with chat
about/+page.svelte       # About page
+layout.svelte
+page.svelte             # Homepage
lib/
components/
NavBar.svelte
static/
images/                    # Project images and PDFs
project-context/           # .txt files powering each project chatbot
logos/                     # Company logos

