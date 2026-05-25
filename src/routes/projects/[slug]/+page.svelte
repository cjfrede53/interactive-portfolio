<script>
  import { page } from '$app/stores';
  import { tick } from 'svelte';
  
  const projects = {
    comcast: {
      title: 'Comcast NBCUniversal',
      subtitle: 'Innovating Engagement and Impact Evaluation',
      headerImage: '/images/Header_Comcast.jpg',
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
        { title: 'mySource UI Walkthrough', youtubeId: 'gb1_qZb7S_w', description: "Designed and prototyped new UI integrations for mySource, the company's internal knowledge and resource hub. The goal was to improve accessibility and engagement by rethinking how employees discover and interact with updates." },
        { title: 'Competitive Advantage Calculator', youtubeId: 'HSxq7CMkENg', description: "Designed an early-stage prototype for a Competitive Advantage Tool aimed at helping Comcast visualize how the company's offerings perform against key competitors." },
      ],
      pdf: null,
      pdfTitle: null,
      pdfTitleAccent: null,
      pdfDescription: null,
      research: false,
      csc: false,
      github: null,
    },
    cantina: {
      title: 'Cantina',
      subtitle: 'AI Social Platform — Trust & Safety',
      headerImage: null,
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
      pdfTitle: 'Full',
      pdfTitleAccent: 'Presentation',
      pdfDescription: 'Scroll through the full slide deck below — persona development, hypothesis framework, vision narrative, and solution design.',
      research: true,
      csc: false,
      github: null,
    },
    collegeswimconnect: {
      title: 'CollegeSwimConnect',
      subtitle: 'Built by D1 swimmers, backed by NCAA coaches',
      headerImage: null,
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
      pdfTitle: 'Final',
      pdfTitleAccent: 'Report',
      pdfDescription: 'Click through the final report including research findings, schema design, and sprint outcomes.',
      research: false,
      csc: true,
      github: null,
    },
    'devil-exchange': {
      title: 'Devil Exchange',
      subtitle: 'Duke Dining UX Case Study',
      headerImage: null,
      role: 'UX Researcher & Designer',
      year: '2024',
      tags: ['UX Research', 'Figma', 'Prototyping'],
      accent: '#003087',
      nda: false,
      summary: "This case study explores a student-centered UX redesign for Duke University's dining system. Through a combination of user interviews, empathy mapping, and interactive UX methods, our team identified critical pain points in the current meal plan structure—particularly around food point imbalance, financial waste, and lack of flexibility. We proposed a peer-to-peer food point exchange platform, allowing students to buy and sell points at discounted rates.",
      deliverables: [
        { label: 'User Research', detail: "Interviews and empathy mapping to identify pain points in Duke's meal plan structure" },
        { label: 'Competitive Analysis', detail: 'Analysis of meal plan innovations at peer institutions' },
        { label: 'Peer-to-Peer Exchange Concept', detail: 'Proposed platform allowing students to buy and sell food points at discounted rates' },
        { label: 'Research Paper', detail: 'Full UX case study documenting methodology, findings, and recommendations' },
      ],
      demos: [
        { title: 'Devil Exchange Prototype', youtubeId: 'S3KNn0D9d8Y', description: 'Click below to watch an interactive prototype of the peer-to-peer food point exchange platform addressing cost, fairness, and food access for Duke students.' },
      ],
      pdf: '/images/devil_exchange/Frederickson_UX_Case_Study_Duke_Dining.pdf',
      pdfTitle: 'Research',
      pdfTitleAccent: 'Paper',
      pdfDescription: 'Scroll through or download the full UX research paper below.',
      research: false,
      csc: false,
      github: null,
    },
    'avia-games': {
      title: 'AviaGames',
      subtitle: 'Consumer Discovery · 10M+ Users',
      headerImage: null,
      role: 'Lead Product Manager',
      year: '2024',
      tags: ['Product Management', 'UX Research', 'Data Analysis'],
      accent: '#5B008C',
      nda: false,
      summary: 'Led consumer discovery, behavioral segmentation, and product strategy research for AviaGames in partnership with Duke Product Lab. Collaborated with researchers, stakeholders, and cross-functional teammates to investigate how cognitively motivated players engage with skill-based mobile games and how those motivations could inform future product direction.',
      deliverables: [
        { label: 'Behavioral Segmentation', detail: 'Analyzed 1,200+ player responses to identify key motivational personas across entertainment-driven and cognitively motivated users' },
        { label: 'Consumer Discovery Research', detail: 'Conducted qualitative user interviews, survey analysis, and competitive benchmarking' },
        { label: 'Strategic Product Framing', detail: 'Reframed the project away from medicalized "brain training" claims toward experiential cognitive engagement' },
        { label: 'Insight Synthesis & Recommendations', detail: 'Translated research findings into strategic recommendations around progression systems and achievement mechanics' },
        { label: 'Executive Insights Report', detail: 'Co-developed a consulting-style research report combining behavioral analysis, market research, SWOT analysis, and product recommendations' },
      ],
      demos: [],
      pdf: '/avia/Insights_Report.pdf',
      pdfTitle: 'Executive Insights',
      pdfTitleAccent: 'Report',
      pdfDescription: 'Scroll through the full executive insights report — behavioral analysis, market research, SWOT analysis, and product recommendations.',
      research: false,
      csc: false,
      github: null,
    },
    'nba-analysis': {
      title: 'The Price of Winning',
      subtitle: 'NBA Salary Strategy Analysis',
      headerImage: null,
      role: 'Data Scientist & Researcher',
      year: '2024',
      tags: ['Python', 'Data Analysis', 'Sports Analytics', 'EDA'],
      accent: '#C9082A',
      nda: false,
      summary: 'A large-scale sports analytics project exploring how NBA teams convert payroll into competitive success. Using salary and performance data across the 2015–16 through 2025–26 seasons, the project investigates how spending concentration, roster balance, and positional allocation impact winning, efficiency, and playoff performance.',
      deliverables: [
        { label: 'Multi-Source Data Pipeline', detail: 'Collected and merged NBA salary and performance data from HoopsHype, ESPN, and Basketball Reference across 10+ seasons' },
        { label: 'Data Cleaning & Transformation', detail: 'Standardized inconsistent naming conventions, salary formats, and multi-team player records across public datasets' },
        { label: 'Custom Metrics', detail: 'Built TopHeavyIndex and Cost Per Win to evaluate salary concentration and organizational efficiency' },
        { label: 'Exploratory Analysis', detail: 'Analyzed payroll vs. wins, playoff efficiency, positional spending trends, and roster construction patterns' },
        { label: 'Research Report', detail: 'Co-authored a polished written report synthesizing findings, methodology, and strategic recommendations' },
      ],
      demos: [],
      pdf: '/pdfs/price-of-winning.pdf',
      pdfTitle: 'Research',
      pdfTitleAccent: 'Report',
      pdfDescription: 'Scroll through the full research report below — data methodology, key findings, visualizations, and strategic analysis.',
      research: false,
      csc: false,
      github: 'https://github.com/cjfrede53/nba-salary-strategy-analysis',
    },
    'tiffany-rebrand': {
      title: 'Tiffany & Co. Rebrand',
      subtitle: 'Timothy & Co. — Male Market Expansion Strategy',
      headerImage: null,
      role: 'Brand Strategist & Market Researcher',
      year: '2024',
      tags: ['Brand Strategy', 'Market Research', 'Consumer Insights', 'Product Strategy'],
      accent: '#2D5A27',
      nda: false,
      summary: "Designed and executed a full mock rebranding initiative for Duke's Markets & Management Department, proposing \"Timothy & Co.\" — a Tiffany & Co. sub-brand built to capture the untapped male jewelry market. Conducted end-to-end primary and secondary market research, surveying men aged 18–24 to uncover jewelry preferences, spending behavior, and the core barrier to purchase: brand perception. Translated raw survey data into a cohesive product strategy, brand identity, and go-to-market plan backed by sector trend analysis forecasting 8.4% CAGR growth through 2032.",
      deliverables: [
        { label: 'Primary Research Survey', detail: 'Designed and administered survey (34+ respondents) measuring jewelry wear habits, style preferences, price sensitivity, and reasons for non-purchase among men 18–24' },
        { label: 'Consumer Insight Analysis', detail: 'Identified that 43.5% of non-wearing men cite feminine brand perception as the #1 barrier — directly informing the repositioning strategy' },
        { label: 'Sub-Brand Identity: Timothy & Co.', detail: 'Created brand name, logo, forest-green & gold visual identity, and tagline \"Where strength meets sophistication\"' },
        { label: 'Product Strategy', detail: 'Proposed a gold-plated watch in a casual, minimalist, masculine design at an accessible $50–$100 price point — matching the top revealed preference' },
        { label: 'Go-to-Market Plan', detail: 'Developed Instagram ad concepts and celebrity endorsement strategy (Dwayne Johnson, Ryan Reynolds) targeting men via social media' },
        { label: 'Sector Trend Analysis', detail: 'Synthesized secondary research from Vogue Business, McKinsey, and Southern Jewelry News to validate market opportunity and positioning approach' },
      ],
      demos: [],
      pdf: '/pdfs/Timothy_Co..pdf',
      pdfTitle: 'Brand',
      pdfTitleAccent: 'Strategy',
      pdfDescription: 'Scroll through the full brand strategy deck — primary research findings, consumer insights, product strategy, and marketing materials.',
      research: false,
      csc: false,
      github: null,
    },
    'imdb-regression': {
      title: 'IMDb Regression Analysis',
      subtitle: 'Predicting Audience vs. Critic Rating Divergence',
      headerImage: null,
      role: 'Data Scientist',
      year: '2025',
      tags: ['R', 'Logistic Regression', 'EDA', 'Statistical Modeling'],
      accent: '#F5C518',
      nda: false,
      summary: 'Investigated what drives the gap between how audiences and critics rate films, using a dataset of 1,000 top IMDb films from 1950–2019. After finding that linear regression explained only 8.8% of variance, the team engineered a binary divergence target and built a logistic regression model — navigating multicollinearity, interaction effects, and class imbalance — to classify films as audience-critic divergent or not. The final model achieved an AUC of 0.63, revealing that decade of release is the strongest structural predictor of divergence and underscoring the limits of metadata alone in predicting something as culturally complex as public reception.',
      deliverables: [
        { label: 'Data Cleaning & Feature Engineering', detail: 'Cleaned 1,000-film IMDb dataset, consolidated international certificate ratings, engineered difference variable and binary divergence target at ±1 standard deviation threshold' },
        { label: 'Exploratory Data Analysis', detail: 'Correlation matrix, univariate and bivariate EDA across gross revenue, runtime, decade, and votes — identifying multicollinearity between IMDB score and vote count, and a potential gross × certificate interaction' },
        { label: 'Model Selection', detail: 'Compared linear vs. logistic regression; used drop-in-deviance test and AIC/BIC to evaluate certificate interaction terms, ultimately selecting a parsimonious model without certificate variables' },
        { label: 'Logistic Regression Model', detail: 'Final model: centered gross revenue, runtime, decade of release, and number of votes — with threshold tuned from 0.5 to 0.3 to improve sensitivity on a class-imbalanced outcome' },
        { label: 'Model Evaluation', detail: 'ROC curve, AUC of 0.628, sensitivity 52.6%, specificity 66.1%, precision 77.2% — with analysis of tradeoffs between false positive and false negative costs given the research goal' },
        { label: 'Written Research Report', detail: 'Co-authored full statistical report documenting methodology, EDA, modeling decisions, results, and limitations for a Duke Statistical Science course' },
      ],
      demos: [],
      pdf: '/pdfs/imdbReport.pdf',
      pdfTitle: 'Research',
      pdfTitleAccent: 'Report',
      pdfDescription: 'Scroll through the full written report — EDA, model selection, results, and limitations.',
      research: false,
      csc: false,
      github: 'https://github.com/cjfrede53/IMDB-films-regression',
    },
    'duke-athletics': {
      title: 'Duke Athletics Marketing',
      subtitle: '@thebluedevil — TikTok & Instagram',
      headerImage: null,
      role: 'Digital Content Creator',
      year: '2023–Present',
      tags: ['Digital Marketing', 'TikTok', 'Instagram', 'Content Strategy'],
      accent: '#003087',
      nda: false,
      summary: 'Built and grew two official Duke Athletics social media accounts from the ground up — @thebluedevil on TikTok and Instagram — producing original content featuring the Duke Blue Devil mascot across sporting events, campus moments, and cultural trends. Grew both accounts to 20K+ followers each and accumulated over 8 million cross-platform views, 500K+ Instagram engagements, and 300K+ TikTok likes through consistent content creation and platform-native storytelling.',
      deliverables: [
        { label: 'TikTok Account (@thebluedevil)', detail: 'Grew account to 23.7K followers and 286.2K+ likes from scratch — producing short-form video content across sporting events, campus life, and trending formats' },
        { label: 'Instagram Account (@thebluedevil)', detail: 'Grew account to 22.8K followers — amassing 5M+ video views and 500K+ engagements, with a single month reaching 513K accounts (+5,999% growth)' },
        { label: "Cross-Platform Content Strategy', detail: 'Developed and executed a dual-platform content calendar tailored to each platform's audience behavior — Reels and photo carousels on Instagram, trend-driven short video on TikTok" },
        { label: 'Viral Content', detail: 'Produced multiple high-performing videos exceeding 100K views individually, including a 413.8K-view TikTok and a 1.7M-view Instagram Reel' },
      ],
      demos: [],
      stats: [
        { value: '8M+', label: 'Cross-Platform Views' },
        { value: '500K+', label: 'Instagram Engagements' },
        { value: '300K+', label: 'TikTok Likes' },
      ],
      socialLinks: [
        { platform: 'TikTok', url: 'https://www.tiktok.com/@thebluedevil', label: '@thebluedevil' },
        { platform: 'Instagram', url: 'https://www.instagram.com/thebluedevil/', label: '@thebluedevil' },
      ],
      pdf: null,
      pdfTitle: null,
      pdfTitleAccent: null,
      pdfDescription: null,
      research: false,
      csc: false,
      github: null,
    },
  };

  let slug = $derived($page.params.slug);
  let project = $derived(projects[slug]);

  let messages = $state([{ 
    role: 'assistant', 
    content: `Hi! I know everything about this work — ask me anything. Try "summarize", "what was the biggest challenge?", or "what did CJ build here?"`
  }]);
  let input = $state('');
  let loading = $state(false);
  let messagesEl = $state(null);

  const suggestions = [
    'Summarize this work',
    "What was CJ's role?",
    'What was the biggest challenge?',
    'What was the impact?',
  ];

  function useSuggestion(s) {
    input = s;
    sendMessage();
  }

  async function scrollToBottom() {
    await tick();
    if (messagesEl) messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    input = '';
    messages = [...messages, { role: 'user', content: text }];
    loading = true;
    messages = [...messages, { role: 'assistant', content: '', streaming: true }];
    scrollToBottom();

    try {
      const history = messages
        .slice(1, -1)
        .filter(m => !m.streaming)
        .map(({ role, content }) => ({ role, content }));

      const res = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question: text, slug, history })
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        for (const line of chunk.split('\n')) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') break;
          try {
            const parsed = JSON.parse(data);
            const token = parsed.choices?.[0]?.delta?.content;
            if (token) {
              full += token;
              messages = messages.map((m, i) =>
                i === messages.length - 1 ? { ...m, content: full } : m
              );
              scrollToBottom();
            }
          } catch {}
        }
      }

      messages = messages.map((m, i) =>
        i === messages.length - 1 ? { role: 'assistant', content: full } : m
      );
      scrollToBottom();

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

  let showSuggestions = $derived(messages.length <= 1);
  let chatOpen = $state(false);
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
        <div class="project-hero__inner">
          <div class="project-hero__text">
            <h1>{project.title}</h1>
            <p class="project-hero__subtitle">{project.subtitle}</p>
            <p class="project-hero__role">{project.role} · {project.year}</p>
          </div>
          {#if project.headerImage}
            <div class="project-hero__image">
              <img src={project.headerImage} alt="{project.title} presentation" />
            </div>
          {/if}
        </div>
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

    {#if slug === 'nba-analysis'}
      <section class="section container">
        <h2>The <span class="accent">Research</span></h2>
        <p class="summary">Most people assume higher payroll automatically leads to winning championships. This project explored a more nuanced question: what kinds of spending strategies actually create sustainable competitive success?</p>
        <p class="summary">The analysis combined multi-source web data collection from HoopsHype, ESPN, and Basketball Reference, large-scale data cleaning and transformation, and exploratory analysis across more than a decade of NBA seasons. One of the biggest technical challenges was aligning inconsistent datasets — different team abbreviations, midseason trades, salary formatting inconsistencies, and differently structured historical records all required extensive cleaning before analysis could begin.</p>
        <p class="summary">The project constructed two custom metrics: TopHeavyIndex, which measured how concentrated a team's payroll was among its top three players, and Cost Per Win, calculated as team payroll divided by regular season wins. These metrics reframed team evaluation around efficiency rather than raw success.</p>
        <div class="insights-grid">
          <div class="insight-card">
            <h4>Higher Payroll Teams Win More</h4>
            <p>A positive relationship exists between payroll and regular season success — but spending alone does not guarantee championships.</p>
          </div>
          <div class="insight-card">
            <h4>Top Spenders Rarely Win It All</h4>
            <p>Many recent NBA champions did not carry the league's highest payroll, suggesting smart construction often matters more than pure spending.</p>
          </div>
          <div class="insight-card">
            <h4>Stars Drive Efficiency</h4>
            <p>Superstar-heavy teams frequently generated lower cost-per-win values and stronger regular season results compared to balanced rosters.</p>
          </div>
          <div class="insight-card">
            <h4>Positional Value Has Shifted</h4>
            <p>Salary allocation has increasingly moved toward guards, playmakers, and versatile perimeter players — reflecting broader changes in modern NBA strategy.</p>
          </div>
        </div>
      </section>
    {/if}

    {#if slug === 'avia-games'}
      <section class="section container">
        <h2>Discovery & <span class="accent">Research</span></h2>
        <p class="summary">To understand how cognitively motivated users engage with AviaGames' ecosystem, I conducted large-scale survey analysis, behavioral segmentation, consumer discovery interviews, literature review, and competitive analysis.</p>
        <p class="summary">The project originally explored whether users perceived games like Solitaire Clash as tools for memory or cognitive improvement. However, research revealed that players rarely framed the experience in clinical or measurable terms. Instead, users consistently described the games as mentally stimulating because they required focus, strategy, quick thinking, and problem solving.</p>
        <p class="summary">A key finding was that cognitively motivated users and entertainment-focused users behaved remarkably similarly. While their stated motivations differed, both groups valued short-session gameplay, challenge, progression, and low-friction entertainment experiences.</p>
        <p class="summary">These insights helped reposition the opportunity away from "brain training" claims and toward lightweight systems that reinforce mastery, engagement, and perceived mental stimulation without disrupting the casual gameplay experience.</p>
        <div class="insights-grid">
          <div class="insight-card">
            <h4>Different Motivations, Similar Behaviors</h4>
            <p>Entertainment-driven and cognitively motivated users interacted with the platform in highly similar ways, suggesting that designing for one audience should not alienate the other.</p>
          </div>
          <div class="insight-card">
            <h4>Cognitive Engagement Was Experiential</h4>
            <p>Users described feeling mentally engaged through challenge, focus, and strategy rather than measurable cognitive improvement, reinforcing the importance of perception and gameplay experience.</p>
          </div>
          <div class="insight-card">
            <h4>Casual, Low-Friction Play Was Essential</h4>
            <p>Even cognitively motivated players resisted experiences that felt overly educational, clinical, or "test-like," emphasizing the importance of maintaining accessibility and flexibility.</p>
          </div>
          <div class="insight-card">
            <h4>Opportunity in the Metagame</h4>
            <p>Research suggested stronger opportunities in progression systems, streaks, achievements, and skill feedback loops than in major changes to core gameplay mechanics.</p>
          </div>
        </div>
      </section>
    {/if}

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

    {#if project.github}
      <section class="section container">
        <h2>The <span class="accent">Code</span></h2>
        <p class="summary">Full data pipeline, cleaning notebooks, visualizations, and research report available on GitHub.</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer" class="github-btn">
          View GitHub Repository →
        </a>
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

    {#if slug === 'duke-athletics'}
      <section class="section container">
        <h2>By The <span class="accent">Numbers</span></h2>
        <p class="summary">Built both the TikTok and Instagram accounts from scratch. These are the cross-platform results.</p>
        <div class="duke-stats">
          <div class="duke-stat">
            <span class="duke-stat__number">8M+</span>
            <span class="duke-stat__label">Cross-Platform Views</span>
          </div>
          <div class="duke-stat">
            <span class="duke-stat__number">500K+</span>
            <span class="duke-stat__label">Instagram Engagements</span>
          </div>
          <div class="duke-stat">
            <span class="duke-stat__number">300K+</span>
            <span class="duke-stat__label">TikTok Likes</span>
          </div>
        </div>
        <div class="duke-platform-stats">
          <div class="duke-platform">
            <div class="duke-platform__header">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
              <span>TikTok</span>
            </div>
            <div class="duke-platform__numbers">
              <div><strong>23.7K</strong><span>Followers</span></div>
              <div><strong>286K+</strong><span>Likes</span></div>
              <div><strong>3M+</strong><span>Views</span></div>
            </div>
            <a href="https://www.tiktok.com/@thebluedevil" target="_blank" rel="noopener" class="duke-platform__link">@thebluedevil ↗</a>
          </div>
          <div class="duke-platform">
            <div class="duke-platform__header">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span>Instagram</span>
            </div>
            <div class="duke-platform__numbers">
              <div><strong>22.8K</strong><span>Followers</span></div>
              <div><strong>500K+</strong><span>Engagements</span></div>
              <div><strong>5M+</strong><span>Views</span></div>
            </div>
            <a href="https://www.instagram.com/thebluedevil/" target="_blank" rel="noopener" class="duke-platform__link">@thebluedevil ↗</a>
          </div>
        </div>
      </section>
    {/if}

    {#if project.pdf}
      <section class="section container">
        <h2>{project.pdfTitle ?? 'Full'} <span class="accent">{project.pdfTitleAccent ?? 'Presentation'}</span></h2>
        <p class="summary">{project.pdfDescription ?? 'Scroll through the full document below, or download it directly from the embedded viewer.'}</p>
        <div class="pdf-viewer" class:pdf-viewer--tall={slug === 'avia-games' || slug === 'nba-analysis'}>
          <iframe src={project.pdf} title="Project Presentation"></iframe>
        </div>
      </section>
    {/if}

    <div class="container" style="padding-bottom: 4rem">
      <a href="/projects" class="back-btn">← Back to Projects</a>
    </div>
  </div>

  <!-- Mobile floating chat button -->
  <button class="chat-fab" onclick={() => chatOpen = true} aria-label="Open chat">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <span>Ask AI</span>
  </button>

  <!-- Chat overlay backdrop (mobile) -->
  {#if chatOpen}
    <div class="chat-backdrop" onclick={() => chatOpen = false}></div>
  {/if}

  <aside class="chat-sidebar" class:chat-sidebar--open={chatOpen}>
    <div class="chat-header">
      <div class="chat-header__left">
        <div class="chat-header__dot"></div>
        <div>
          <div class="chat-header__title">Informational AI Assistant</div>
        </div>
      </div>
      <span class="chat-header__badge">AI</span>
      <button class="chat-close-btn" onclick={() => chatOpen = false} aria-label="Close chat">✕</button>
    </div>

    <div class="chat-welcome">
      <div class="chat-welcome__bubble">
        <div class="chat-welcome__avatar">✦</div>
        <div class="chat-welcome__text">
          <p>Hi! Ask me a question about the work featured on this page.</p>
          <p>I know every detail — from the strategy to the technical decisions.</p>
        </div>
      </div>
    </div>

    <div class="chat-messages" bind:this={messagesEl}>
      {#each messages as msg}
        <div class="msg msg--{msg.role}" class:error={msg.error}>
          {msg.content}{msg.streaming && loading ? '▊' : ''}
        </div>
      {/each}

      {#if showSuggestions}
        <div class="suggestions">
          {#each suggestions as s}
            <button class="suggestion-btn" onclick={() => useSuggestion(s)}>{s}</button>
          {/each}
        </div>
      {/if}
    </div>

    <div class="chat-input">
      <textarea
        bind:value={input}
        onkeydown={handleKey}
        placeholder="Ask anything about this work..."
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
  .project-hero__inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  .project-hero__text {
    flex: 1;
  }
  .project-hero__image {
    width: 280px;
    flex-shrink: 0;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0.9;
  }
  .project-hero__image img {
    width: 100%;
    height: auto;
    display: block;
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
  .insights-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    margin-top: 1.5rem;
  }
  .insight-card {
    background: var(--color-linen);
    border: 1px solid var(--color-border);
    border-left: 3px solid var(--color-gold);
    border-radius: 0 8px 8px 0;
    padding: 1rem 1.25rem;
  }
  .insight-card h4 {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-ink);
    margin-bottom: 0.5rem;
  }
  .insight-card p {
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--color-ink-soft);
    margin: 0;
    max-width: none;
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
  .pdf-viewer--tall {
    aspect-ratio: unset;
    height: 80vh;
  }
  .pdf-viewer iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  .github-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.85rem 2rem;
    background: var(--color-ink);
    color: white;
    border-radius: 100px;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s ease;
    letter-spacing: 0.02em;
  }
  .github-btn:hover {
    background: var(--color-gold);
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
    background: var(--color-ink);
    overflow: hidden;
  }
  .chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem 1.25rem;
    background: var(--color-gold);
    flex-shrink: 0;
  }
  .chat-header__left {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }
  .chat-header__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    flex-shrink: 0;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
  .chat-header__title {
    font-size: 0.85rem;
    font-weight: 600;
    color: white;
    letter-spacing: 0.01em;
  }
  .chat-header__badge {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 0.2rem 0.55rem;
    border-radius: 100px;
    background: rgba(255,255,255,0.2);
    color: white;
    border: 1px solid rgba(255,255,255,0.3);
  }
  .chat-welcome {
    padding: 1rem 1rem 0.75rem;
    flex-shrink: 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .chat-welcome__bubble {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 0.85rem 1rem;
    animation: bounce 0.8s ease-in-out infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .chat-welcome__avatar {
    font-size: 1.2rem;
    color: var(--color-gold);
    flex-shrink: 0;
    animation: spin 4s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .chat-welcome__text p {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.75);
    line-height: 1.5;
    margin: 0 0 0.25rem 0;
    max-width: none;
  }
  .chat-welcome__text p:last-child {
    margin: 0;
    color: rgba(255,255,255,0.45);
    font-size: 0.75rem;
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
    padding: 0.65rem 0.9rem;
    border-radius: 10px;
    font-size: 0.875rem;
    line-height: 1.55;
    max-width: 90%;
    word-break: break-word;
  }
  .msg--user {
    background: var(--color-gold);
    color: white;
    align-self: flex-end;
    border-radius: 10px 10px 2px 10px;
  }
  .msg--assistant {
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.9);
    align-self: flex-start;
    border-radius: 10px 10px 10px 2px;
  }
  .msg.error {
    background: rgba(239,68,68,0.15);
    color: #fca5a5;
  }
  .suggestions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .suggestion-btn {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 0.55rem 0.85rem;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.7);
    text-align: left;
    cursor: pointer;
    transition: all 0.15s ease;
    font-family: var(--font-body);
  }
  .suggestion-btn:hover {
    background: rgba(255,255,255,0.12);
    color: white;
    border-color: var(--color-gold);
  }
  .chat-input {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-top: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.03);
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
  }
  .chat-input textarea {
    flex: 1;
    min-width: 0;
    resize: none;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    font-family: var(--font-body);
    font-size: 0.85rem;
    background: rgba(255,255,255,0.07);
    color: white;
    outline: none;
    box-sizing: border-box;
  }
  .chat-input textarea::placeholder {
    color: rgba(255,255,255,0.3);
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
    .csc-role, .csc-process, .insights-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Duke Athletics Stats */
  .duke-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 2.5rem 0;
  }
  .duke-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 1rem;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
  }
  .duke-stat__number {
    font-size: 3rem;
    font-weight: 800;
    color: var(--accent);
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .duke-stat__label {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-text-secondary, #888);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .duke-platform-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .duke-platform {
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--color-border, #e5e5e5);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .duke-platform__header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-text, #111);
  }
  .duke-platform__numbers {
    display: flex;
    gap: 1.5rem;
  }
  .duke-platform__numbers div {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }
  .duke-platform__numbers strong {
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--color-text, #111);
  }
  .duke-platform__numbers span {
    font-size: 0.75rem;
    color: var(--color-text-secondary, #888);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .duke-platform__link {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    margin-top: auto;
  }
  .duke-platform__link:hover {
    text-decoration: underline;
  }
  @media (max-width: 700px) {
    .duke-stats {
      grid-template-columns: 1fr;
    }
    .duke-platform-stats {
      grid-template-columns: 1fr;
    }
    .duke-stat__number {
      font-size: 2.2rem;
    }
  }

  /* ── Mobile layout ── */
  .chat-fab {
    display: none;
  }

  @media (max-width: 900px) {
    /* Stack layout: no sidebar, just main content */
    .project-layout {
      flex-direction: column;
    }

    /* Hero image stacks below text */
    .project-hero__inner {
      flex-direction: column;
      gap: 1.5rem;
    }
    .project-hero__image {
      width: 100%;
    }

    /* Sidebar becomes full-screen overlay */
    .chat-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      min-width: unset;
      height: 100%;
      z-index: 200;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }
    .chat-sidebar--open {
      transform: translateY(0);
    }

    /* Backdrop */
    .chat-backdrop {
      display: none;
    }

    /* Floating button */
    .chat-fab {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 100;
      background: var(--color-gold);
      color: white;
      border: none;
      border-radius: 100px;
      padding: 0.75rem 1.25rem;
      font-size: 0.85rem;
      font-weight: 600;
      font-family: var(--font-body);
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,0,0,0.25);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .chat-fab:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(0,0,0,0.3);
    }

    /* Close button visible on mobile */
    .chat-close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: rgba(255,255,255,0.2);
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 0.85rem;
      cursor: pointer;
      margin-left: 0.5rem;
      flex-shrink: 0;
    }

    /* Container padding tighter on mobile */
    .container {
      padding: 0 1rem;
    }

    /* Section padding tighter */
    .section {
      padding: 2rem 0;
    }

    /* Hero padding */
    .project-hero {
      padding: 2rem 0 2rem;
    }

    /* h2 size */
    h2 {
      font-size: 1.6rem;
    }

    /* Insights grid single col on mobile already handled above */
  }

  /* Desktop: hide close button and fab */
  @media (min-width: 901px) {
    .chat-close-btn {
      display: none;
    }
    .chat-fab {
      display: none;
    }
    .chat-backdrop {
      display: none;
    }
  }
</style>