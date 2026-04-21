# CJ Frederickson — Interactive Portfolio

A SvelteKit portfolio with per-project AI chatbots powered by Ollama and MCP. Each project page includes a chat sidebar that reads from a local context file and answers questions about the work.

## Tech Stack

- **Framework**: SvelteKit (Svelte 5)
- **AI Chat**: Ollama (local LLM)
- **MCP**: mcpo wrapping `@modelcontextprotocol/server-filesystem`
- **Styling**: CSS custom properties, no Tailwind

## Prerequisites

- Node.js 18+
- Python 3.10+
- [Ollama](https://ollama.ai) installed and running

## Setup

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

```
ollama_base_url=http://127.0.0.1:11434
ollama_model=mistral
mcpo_base_url=http://127.0.0.1:8000
```

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

## Project Structure

```
src/
  routes/
    api/
      mcpo/+server.js        # Proxies to mcpo filesystem server
      interpret/+server.js   # Sends question + context to Ollama
    projects/
      +page.svelte           # Projects grid
      [slug]/+page.svelte    # Individual project pages with chat
    +layout.svelte
    +page.svelte             # Homepage
  lib/
    components/
      NavBar.svelte
static/
  images/                    # Project images and PDFs
  project-context/           # .txt files powering each project chatbot
  logos/                     # Company logos
```

## Adding a New Project

1. Add a new entry to the `projects` object in `src/routes/projects/[slug]/+page.svelte`
2. Create a `static/project-context/your-project-slug.txt` with detailed project information
3. Add the project card to `src/routes/projects/+page.svelte`

## Notes

- The `.env` file is gitignored — never commit API keys or secrets
- `mcpo_config.json` contains a local absolute path — update it after cloning
- The chatbot only answers questions based on the project context file — it will not hallucinate or use outside knowledge
