<script>
  import { page } from '$app/stores';
  
  const projects = {
    comcast: {
      title: 'Comcast NBCUniversal',
      subtitle: 'Innovating Engagement and Impact Evaluation',
      role: 'Senior Specialist Intern, West US HQ Channel Enablement',
      year: '2025',
      tags: ['Product Management', 'UX Design', 'Data Analytics', 'KPI'],
      accent: '#E0002B',
      nda: true,
      summary: 'Partnered with product, marketing, and analytics teams to reimagine how internal channels deliver information and evaluate impact. Initiated new product concepts, secured VP-level buy-in, and delivered scalable solutions improving communication and engagement for thousands of employees.',
      deliverables: [
        { label: 'Audio-First Engagement Channel', detail: 'Agile lifecycle, VP buy-in, launched Q3 2025' },
        { label: 'KPI Innovation', detail: 'Consolidated Tableau/Power BI into an engagement scorecard adopted by the team' },
        { label: '"Leaning into Data" Guide', detail: 'Authored 20% Program Enablement Playbook expansion with AI/analytics use cases' },
        { label: 'mySource UI', detail: 'Designed internal knowledge hub interface — first design is live at Comcast' },
        { label: 'Competitive Advantage Calculator', detail: 'Prototype for strategy teams to compare Comcast vs. competitors' },
      ],
      demos: [
        { title: 'mySource UI Walkthrough', youtubeId: 'gb1_qZb7S_w', description: "Designed and prototyped new UI integrations for mySource, the company's internal knowledge and resource hub." },
        { title: 'Competitive Advantage Calculator', youtubeId: 'HSxq7CMkENg', description: 'Early-stage prototype helping Comcast strategy teams visualize competitive positioning.' },
      ],
      pdf: null,
      research: false,
      csc: false,
    },
    cantina: {
      title: 'Cantina',
      subtitle: 'AI Social Platform — Trust & Safety',
      role: 'Product Management Intern',
      year: '2024',
      tags: ['Product Management', 'UX Research', 'Trust & Safety', 'Prototyping'],
      accent: '#00B4B4',
      nda: false,
      summary: "Led user discovery, prototyping, and trust-focused design for Cantina's AI-powered social platform. Collaborating with designers and engineers, translated research insights into the product lifecycle, shaping initiatives that balanced innovation with transparency.",
      deliverables: [
        { label: 'Safety & Transparency Features', detail: 'Prototyped user controls, filters, and transparency prompts including a spice-level slider and pre-room content warnings' },
        { label: 'High-Fidelity Wireframes', detail: 'Fully functional prototype with integrated content maturity settings visible at login and before high-intensity chats' },
        { label: 'Usability Research', detail: 'Interviews, surveys, and product assessments with over 60 beta users to uncover trust and safety gaps' },
        { label: 'User Personas & Journey Maps', detail: 'Developed personas including "George" and "Ryan" to pinpoint where safety broke down and trust eroded' },
        { label: '6-Milestone Roadmap', detail: 'End-to-end product roadmap from backend content scaling through beta rollout and public launch' },
      ],
      demos: [
        { title: 'Cantina Safety Feature Demo', youtubeId: 'RA7ClKAolRU', description: 'Final prototype showcasing the spice-level slider at login and in-room content warnings, directly addressing user trust and safety concerns.' },
      ],
      pdf: '/images/cantina/cantina_slides.pdf',
      research: true,
      csc: false,
    },
    collegeswimconnect: {
      title: 'CollegeSwimConnect',
      subtitle: 'Built by D1 swimmers, backed by NCAA coaches',
      role: 'Product Manager',
      year: '2024',
      tags: ['Product Management', 'Full-Stack', 'PostgreSQL', 'Agile'],
      accent: '#0066CC',
      nda: false,
      summary: 'Uncovered operational inefficiencies and positioned CollegeSwimConnect for scalable growth. Owned end-to-end product strategy from user discovery through MVP delivery, collaborating with engineers and designers to streamline workflows and deliver tangible outcomes.',
      deliverables: [
        { label: 'User Research', detail: 'Discovery interviews with D1 athletes and recruits to identify workflow pain points' },
        { label: 'Agile Sprints', detail: 'Led two sprints — design and engineering — from discovery through MVP delivery' },
        { label: 'Database & Backend', detail: 'Designed relational schema in PostgreSQL, deployed via Railway, built backend in Python/Flask' },
        { label: 'Impact', detail: 'Reduced admin workload by 55% and mentor workload by 50%' },
      ],
      demos: [
        { title: 'CollegeSwimConnect Final Demo', youtubeId: '38-K_xHcCJ8', description: 'Final demo showcasing a 55% reduction in operational inefficiencies for administrators and 50% for D1 mentors, freeing time for high-quality mentorship.' },
      ],
      pdf: '/images/csc/FinalDemo.pdf',
      research: false,
      csc: true,
    },
    'devil-exchange': {
      title: 'Devil Exchange',
      subtitle: 'Duke Dining UX Case Study',
      role: 'UX Researcher & Designer',
      year: '2024',
      tags: ['UX Research', 'Figma', 'Prototyping'],
      accent: '#003087',
      nda: false,
      summary: "This case study explores a student-centered UX redesign for Duke University's dining system. Through user interviews, empathy mapping, and interactive UX methods, our team identified critical pain points in the current meal plan structure — particularly around food point imbalance, financial waste, and lack of flexibility.",
      deliverables: [
        { label: 'User Research', detail: "Interviews and empathy mapping to identify pain points in Duke's meal plan structure" },
        { label: 'Competitive Analysis', detail: 'Analysis of meal plan innovations at peer institutions' },
        { label: 'Peer-to-Peer Exchange Concept', detail: 'Proposed platform allowing students to buy and sell food points at discounted rates' },
        { label: 'Research Paper', detail: 'Full UX case study documenting methodology, findings, and recommendations' },
      ],
      demos: [
        { title: 'Devil Exchange Prototype', youtubeId: 'S3KNn0D9d8Y', description: 'Interactive prototype of the peer-to-peer food point exchange platform addressing cost, fairness, and food access for Duke students.' },
      ],
      pdf: '/images/devil_exchange/Frederickson_UX_Case_Study_Duke_Dining.pdf',
      research: false,
      csc: false,
    },
  };

  let slug = $derived($page.params.slug);
  let project = $derived(projects[slug]);

  let messages = $state([{ role: 'assistant', content: `Ask me anything about this project — or just say "summarize" to get an overview.` }]);
  let input = $state('');
  let loading = $state(false);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    input = '';
    messages = [...messages, { role: 'user', content: text }];
    loading = true;
    messages = [...messages, { role: 'assistant', content: '', streaming: true }];

    try {
      const fileRes = await fetch('/api/mcpo', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          path: '/filesystem/read_file',
          body: { path: `/Users/cjfrederickson/Desktop/cj-portfolio/static/project-context/${slug}.txt` }
        })
      });
      const fileData = await fileRes.json();
      const context = typeof fileData.content === 'string'
        ? fileData.content
        : JSON.stringify(fileData.content);

      const history = messages
        .slice(1, -1)
        .filter(m => !m.streaming)
        .map(({ role, content }) => ({ role, content }));

      const res = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question: text, context, history })
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        for (const line of decoder.decode(value).split('\n').filter(Boolean)) {
          try {
            const data = JSON.parse(line);
            if (data.message?.content) {
              full += data.message.content;
              messages = messages.map((m, i) =>
                i === messages.length - 1 ? { ...m, content: full } : m
              );
            }
          } catch {}
        }
      }

      messages = messages.map((m, i) =>
        i === messages.length - 1 ? { role: 'assistant', content: full } : m
      );

    } catch (e) {
      messages = messages.map((m, i) =>
        i === messages.length - 1
          ? { role: 'assistant', content: `⚠️ ${e.message}`, error: true }
          : m
      );
    }
    loading = false;
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  }
</script>

<svelte:head>
  <title>{project?.title ?? 'Project'} — CJ Frederickson</title>
</svelte:head>

{#if project}
<div class="project-layout">

  <div class="project-main">
    <div class="project-hero" style="--accent: {project.accent}">
      <div class="container">
        <a href="/projects" class="breadcrumb">← All Projects</a>
        {#if project.nda}
          <div class="nda-badge">⚠ Non-proprietary content only</div>
        {/if}
        <div class="project-hero__tags">
          {#each project.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
        <h1>{project.title}</h1>
        <p class="project-hero__subtitle">{project.subtitle}</p>
        <p class="project-hero__role">{project.role} · {project.year}</p>
      </div>
      <div class="project-hero__bar"></div>
    </div>

    <section class="section container">
      <h2>My <span class="accent">Role</span></h2>
      <p class="summary">{project.summary}</p>
      {#if project.csc}
        <div class="csc-role">
          <div class="csc-role__text">
            <ul class="deliverables">
              {#each project.deliverables as d}
                <li><strong>{d.label}</strong> — {d.detail}</li>
              {/each}
            </ul>
          </div>
          <div class="csc-role__image">
            <img src="/images/csc/cscLandingPage.png" alt="CollegeSwimConnect landing page" />
          </div>
        </div>
      {:else}
        <ul class="deliverables">
          {#each project.deliverables as d}
            <li><strong>{d.label}</strong> — {d.detail}</li>
          {/each}
        </ul>
      {/if}
    </section>

    {#if project.research}
    <section class="section container">
      <h2>Discovery & <span class="accent">Research</span></h2>
      <p class="summary">To understand why users felt unsafe on Cantina, I conducted a mix of consumer discovery, user interviews, persona development, and product feedback analysis from over 60 beta users. I crafted a product assessment for users to provide comprehensive insights.</p>
      <p class="summary">Findings revealed that the platform's "spice level" maturity setting — intended to let users control the intensity of AI interactions — was buried in the privacy settings and often overlooked. As a result, users and parents of minors were frequently exposed to unexpectedly explicit content.</p>
      <p class="summary">Quantitative feedback showed that trust and ethicality were the lowest-rated product attributes, scoring just 2.50/5 and 2.59/5 respectively. Journey mapping and personas like "George" and "Ryan" helped pinpoint the moments where safety broke down and trust eroded.</p>
      <p class="summary">These insights shaped our solution: make content preferences more visible, intuitive, and user-controlled — starting at login and reinforced before entering high-spice chats.</p>
      <div class="research-image">
        <img src="/images/cantina/productAssement.png" alt="Average User Scores on Product Assessment" />
      </div>
    </section>

    <section class="section container">
      <h2>Attribute <span class="accent">Scoring</span></h2>
      <p class="summary">Users rated Cantina across 10 attributes. Speed (3.97) and Delight (3.88) scored consistently high — users loved the experience. But Trust (2.50) and Ethical (2.59) were critically low, revealing a clear opportunity to recapture user confidence through targeted safety improvements.</p>
      <div class="research-image">
        <img src="/images/cantina/attributeScoring.png" alt="Product Assessment Attribute Scoring Charts" />
      </div>
    </section>

    <section class="section container">
      <h2>SWOT <span class="accent">Analysis</span></h2>
      <p class="summary">A SWOT analysis framed the competitive landscape. Cantina's unique AI character interactions and feature combination were clear strengths. The critical weaknesses were privacy and safety concerns, a confusing UI, and unclear room visibility. Opportunities included GenAI trends and corporate integration markets. Threats included rapid feature adoption by established platforms like Snapchat.</p>
      <div class="research-image">
        <img src="/images/cantina/cantinaSWOT.png" alt="SWOT Analysis" />
      </div>
    </section>

    <section class="section container">
      <h2>The <span class="accent">Solution</span></h2>
      <p class="summary">The research backed a proposal for a redesigned safety framework that surfaced content preferences clearly and explicitly. I led development of a prototype with two core features:</p>
      <ul class="deliverables" style="margin-bottom: 2rem;">
        <li><strong>Sign up</strong> — Before finishing account creation, users are prompted to set their content maturity preferences via a slider feature.</li>
        <li><strong>Room Entrance</strong> — Upon entering a room with mature content, a reminder pops up asking if they're certain they want to enter, with directions on how to adjust maturity preferences.</li>
        <li><strong>Privacy Settings</strong> — The slider is also accessible in the privacy section of the settings tab at any time.</li>
      </ul>
      <div class="research-image">
        <img src="/images/cantina/CantinaPreferences.png" alt="Solution: Content Preferences and Privacy" />
      </div>
    </section>

    <section class="section container">
      <h2>Scoping & <span class="accent">Timeline</span></h2>
      <p class="summary">A 6-milestone roadmap outlined the path from research to launch. Milestones 1–3 covered backend and frontend implementation across two sprint cycles. Milestone 4 rolled out to beta users for testing, Milestone 5 iterated based on feedback, and Milestone 6 announced and launched the feature publicly.</p>
      <div class="research-image">
        <img src="/images/cantina/scoping_timeline.png" alt="Scoping and Timeline Roadmap" />
      </div>
    </section>
    {/if}

    {#if project.csc}
    <section class="section container">
      <h2>The <span class="accent">Process</span></h2>
      <div class="csc-process">
        <div class="csc-process__text">
          <p class="summary">CollegeSwimConnect had strong early traction but lacked scalability. Despite clear value, the platform struggled to grow its user base and deliver mentorship efficiently.</p>
          <p class="summary">That's where I came in: <em>if the platform already had value, what was preventing growth?</em></p>
          <p class="summary">I led two Agile sprints — design and engineering — focused on expanding internal features to streamline operations. Our final demo cut admin workload by 55% and mentor workload by 50%, freeing time for high-quality mentorship. On the technical side, I designed the relational schema in PostgreSQL, deployed the app via Railway, and built backend functionality in Python and Flask.</p>
        </div>
        <div class="csc-process__image">
          <img src="/images/csc/recruit.png" alt="CollegeSwimConnect recruit experience" />
        </div>
      </div>
    </section>
    {/if}

    {#if project.demos?.length}
      <section class="section container">
        <h2>The <span class="accent">Work</span></h2>
        {#each project.demos as demo}
          <div class="demo-block">
            <h3>{demo.title}</h3>
            <p class="demo-desc">{demo.description}</p>
            <div class="youtube-frame">
              <iframe
                src="https://www.youtube.com/embed/{demo.youtubeId}"
                title={demo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        {/each}
      </section>
    {/if}

    {#if project.pdf}
      <section class="section container">
        <h2>Full <span class="accent">Presentation</span></h2>
        <p class="summary">
          {#if project.csc}
            Click through for the final report including research findings, schema design, and sprint outcomes.
          {:else if slug === 'devil-exchange'}
            Click to view or download the full UX research paper.
          {:else}
            Complete research slides including persona development, hypothesis framework, vision narrative, and solution design.
          {/if}
        </p>
        <div class="pdf-viewer">
          <iframe src={project.pdf} title="Project Presentation"></iframe>
        </div>
      </section>
    {/if}

    <div class="container" style="padding-bottom: 4rem">
      <a href="/projects" class="back-btn">← Back to Projects</a>
    </div>
  </div>

  <aside class="chat-sidebar">
    <div class="chat-header">
      <div class="chat-header__dot"></div>
      <span>Ask about this project</span>
    </div>

    <div class="chat-messages">
      {#each messages as msg}
        <div class="msg msg--{msg.role}" class:error={msg.error}>
          {msg.content}{msg.streaming && loading ? '▊' : ''}
        </div>
      {/each}
    </div>

    <div class="chat-input">
      <textarea
        bind:value={input}
        onkeydown={handleKey}
        placeholder="Ask a question..."
        rows="2"
        disabled={loading}
      ></textarea>
      <button onclick={sendMessage} disabled={loading || !input.trim()}>↑</button>
    </div>
  </aside>

</div>
{:else}
  <div class="container" style="padding: 10rem 2rem">
    <p>Project not found.</p>
    <a href="/projects">← Back to Projects</a>
  </div>
{/if}

<style>
  .project-layout {
    display: flex;
    min-height: 100vh;
    padding-top: 72px;
  }
  .project-main {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }
  .container {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .section {
    padding: 3rem 0;
    border-bottom: 1px solid var(--color-border);
  }
  .project-hero {
    background: var(--color-ink);
    padding: 3.5rem 0 3rem;
    position: relative;
  }
  .project-hero__bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent);
  }
  .breadcrumb {
    display: inline-block;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    margin-bottom: 1.5rem;
    transition: color 0.2s;
  }
  .breadcrumb:hover { color: var(--color-gold); }
  .nda-badge {
    display: inline-block;
    font-size: 0.72rem;
    padding: 0.25rem 0.75rem;
    border: 1px solid rgba(184,147,63,0.4);
    border-radius: 100px;
    color: var(--color-gold-light);
    margin-bottom: 1rem;
  }
  .project-hero__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }
  .tag {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.2rem 0.7rem;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.6);
  }
  .project-hero h1 {
    color: white;
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 0.5rem;
  }
  .project-hero__subtitle {
    font-size: 1.05rem;
    color: var(--color-gold-light);
    margin-bottom: 0.5rem;
    max-width: none;
  }
  .project-hero__role {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.4);
    max-width: none;
  }
  .accent { color: var(--color-gold); }
  h2 {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    margin-bottom: 1.25rem;
  }
  .summary {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--color-ink-soft);
    margin-bottom: 1.5rem;
    max-width: 68ch;
  }
  .deliverables {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .deliverables li {
    padding: 0.75rem 1rem;
    border-left: 2px solid var(--color-gold);
    background: var(--color-linen);
    border-radius: 0 6px 6px 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .csc-role {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: start;
  }
  .csc-role__image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid var(--color-border);
  }
  .csc-process {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: start;
  }
  .csc-process__image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid var(--color-border);
  }
  .research-image {
    width: 100%;
    margin-top: 1.5rem;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--color-border);
  }
  .research-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  .demo-block { margin-bottom: 2.5rem; }
  .demo-block h3 {
    font-family: var(--font-display);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
  .demo-desc {
    font-size: 0.9rem;
    color: var(--color-muted);
    margin-bottom: 1rem;
  }
  .youtube-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 10px;
    overflow: hidden;
    background: var(--color-ink);
  }
  .youtube-frame iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  .pdf-viewer {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--color-border);
  }
  .pdf-viewer iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  .back-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.75rem;
    border: 1px solid var(--color-border);
    border-radius: 100px;
    font-size: 0.85rem;
    color: var(--color-ink-soft);
    text-decoration: none;
    transition: all 0.2s ease;
    margin-top: 1rem;
  }
  .back-btn:hover {
    border-color: var(--color-gold);
    color: var(--color-gold);
  }
  .chat-sidebar {
    width: 340px;
    min-width: 340px;
    height: calc(100vh - 72px);
    position: sticky;
    top: 72px;
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--color-border);
    background: white;
    overflow: hidden;
  }
  .chat-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--color-border);
    background: var(--color-linen);
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-ink-soft);
    flex-shrink: 0;
  }
  .chat-header__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    flex-shrink: 0;
  }
  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .msg {
    padding: 0.6rem 0.9rem;
    border-radius: 8px;
    font-size: 0.875rem;
    line-height: 1.5;
    max-width: 88%;
    word-break: break-word;
  }
  .msg--user {
    background: var(--color-ink);
    color: white;
    align-self: flex-end;
  }
  .msg--assistant {
    background: var(--color-linen);
    color: var(--color-ink);
    align-self: flex-start;
  }
  .msg.error {
    background: #fee2e2;
    color: #991b1b;
  }
  .chat-input {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--color-border);
    background: var(--color-linen);
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
  }
  .chat-input textarea {
    flex: 1;
    min-width: 0;
    resize: none;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    font-family: var(--font-body);
    font-size: 0.85rem;
    background: white;
    color: var(--color-ink);
    outline: none;
    box-sizing: border-box;
  }
  .chat-input textarea:focus {
    border-color: var(--color-gold);
  }
  .chat-input button {
    width: 40px;
    height: 40px;
    min-width: 40px;
    flex-shrink: 0;
    background: var(--color-gold);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.15s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chat-input button:hover:not(:disabled) {
    background: var(--color-gold-dark);
  }
  .chat-input button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  @media (max-width: 700px) {
    .csc-role, .csc-process {
      grid-template-columns: 1fr;
    }
  }
</style>