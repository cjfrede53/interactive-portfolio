<script>
  let searchQuery = $state('');

  const pmUx = [
    {
      slug: 'comcast',
      title: 'Comcast NBCUniversal',
      subtitle: 'Engagement & Impact Innovation',
      role: 'Senior Specialist Intern',
      tags: ['Product Management', 'UX Design', 'KPI'],
      accent: '#E0002B',
      year: '2025',
      logo: '/images/logos/Comcast_NBCUniversal_logo.svg',
      logos: null,
      logoSize: '40px',
      keywords: ['comcast', 'nbcuniversal', 'kpi', 'dashboard', 'mysource', 'audio', 'engagement', 'channel', 'tableau', 'power bi', 'intern'],
    },
    {
      slug: 'cantina',
      title: 'Cantina',
      subtitle: 'AI Social Platform — Trust & Safety',
      role: 'Product Management Intern',
      tags: ['Product Management', 'UX Research', 'Trust & Safety'],
      accent: '#00B4B4',
      year: '2024',
      logo: '/images/cantina/cantinaLogo.png',
      logos: null,
      logoSize: '30px',
      keywords: ['cantina', 'trust', 'safety', 'ai', 'social', 'platform', 'wireframes', 'personas', 'roadmap', 'research', 'spice', 'content'],
    },
    {
      slug: 'collegeswimconnect',
      title: 'CollegeSwimConnect',
      subtitle: '55% Workload Reduction · Live Product',
      role: 'Product Manager',
      tags: ['Product Management', 'Full-Stack', 'PostgreSQL'],
      accent: '#003087',
      year: '2025',
      logo: '/images/csc/cscLogo.jpeg',
      logos: null,
      logoSize: '60px',
      keywords: ['collegeswimconnect', 'swimming', 'd1', 'postgresql', 'flask', 'python', 'railway', 'agile', 'mentor', 'recruit', 'database'],
    },
    {
      slug: 'devil-exchange',
      title: 'Devil Exchange',
      subtitle: 'Duke Dining UX Case Study',
      role: 'UX Researcher & Designer',
      tags: ['UX Research', 'Figma', 'Prototyping'],
      accent: '#003087',
      year: '2025',
      logo: '/images/devil_exchange/diningLogo.png',
      logos: null,
      logoSize: '40px',
      keywords: ['devil exchange', 'duke', 'dining', 'meal plan', 'ux', 'figma', 'prototype', 'research', 'food points', 'peer to peer'],
    },
    {
      slug: 'avia-games',
      title: 'AviaGames',
      subtitle: 'PM and User Discovery Case 10M Users',
      role: 'Lead Product Manager',
      tags: ['Product Management', 'UX Research', 'Data Analysis', 'Prototyping'],
      accent: '#5B008C',
      year: '2026',
      logo: '/images/logos/aviaLogo.png',
      logos: null,
      logoSize: '60px',
      keywords: ['aviagames', 'solitaire', 'mobile games', 'behavioral segmentation', 'consumer discovery', 'product strategy', 'duke product lab', 'cognitive'],
    },
  ];

  const brandData = [
    {
      slug: 'duke-athletics',
      title: 'Duke Athletics Marketing',
      subtitle: '3M Views · 500K Monthly Reach',
      role: 'Digital Content Creator',
      tags: ['Digital Marketing', 'TikTok', 'Instagram'],
      accent: '#003087',
      year: '2023–Present',
      logo: null,
      logos: null,
      logoSize: '40px',
      keywords: ['duke athletics', 'tiktok', 'instagram', 'marketing', 'content', 'social media', 'video', 'reach', 'views'],
    },
    {
      slug: 'tiffany-rebrand',
      title: 'Tiffany & Co. Rebrand',
      subtitle: 'Timothy & Co. — Male Market Expansion',
      role: 'Brand Strategist & Market Researcher',
      tags: ['Brand Strategy', 'Market Research', 'Consumer Insights', 'Product Strategy'],
      accent: '#2D5A27',
      year: '2024',
      logo: null,
      logos: null,
      logoSize: '40px',
      keywords: ['tiffany', 'rebrand', 'brand strategy', 'market research', 'timothy', 'luxury', 'jewelry', 'male', 'consumer insights', 'positioning', 'survey', 'primary research', 'duke', 'marketing'],
    },
    {
      slug: 'nba-analysis',
      title: 'The Price of Winning',
      subtitle: 'NBA Salary Strategy Analysis',
      role: 'Data Scientist & Researcher',
      tags: ['Python', 'Data Analysis', 'Sports Analytics'],
      accent: '#C9082A',
      year: '2024',
      logo: null,
      logos: [
        { src: '/images/logos/nbaLogo.png', alt: 'NBA' },
        { src: '/images/logos/cslogo.png', alt: 'Duke CS' },
      ],
      logoSize: '36px',
      keywords: ['nba', 'basketball', 'salary', 'analytics', 'python', 'pandas', 'data science', 'sports', 'eda', 'exploratory', 'jupyter'],
    },
    {
      slug: 'imdb-regression',
      title: 'IMDb Regression Analysis',
      subtitle: 'Predicting Audience vs. Critic Divergence',
      role: 'Data Scientist',
      tags: ['R', 'Logistic Regression', 'EDA', 'Statistical Modeling'],
      accent: '#F5C518',
      year: '2025',
      logo: null,
      logos: [
        { src: '/images/logos/IMDB_Logo_2016.svg.png', alt: 'IMDB' },
        { src: '/images/logos/statsLogo.png', alt: 'Duke Stats' },
      ],
      logoSize: '40px',
      keywords: ['imdb', 'regression', 'r', 'statistics', 'data science', 'eda', 'logistic', 'ratings', 'audience', 'critic', 'metascore', 'auc', 'roc', 'classification', 'feature engineering', 'duke', 'statistical science'],
    },
    {
      slug: 'xinjiang-analysis',
      title: 'Xinjiang Data Analysis',
      subtitle: 'Human Rights · Statistical Modeling',
      role: 'Data Analyst',
      tags: ['Data Analysis', 'R', 'Data Ethics'],
      accent: '#8B0000',
      year: '2023',
      logo: null,
      logos: null,
      logoSize: '40px',
      keywords: ['xinjiang', 'human rights', 'data ethics', 'statistical modeling', 'r', 'analysis'],
    },
  ];

  function matches(project) {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.subtitle.toLowerCase().includes(q) ||
      project.role.toLowerCase().includes(q) ||
      project.tags.some(t => t.toLowerCase().includes(q)) ||
      project.keywords.some(k => k.toLowerCase().includes(q))
    );
  }

  let filteredPmUx = $derived(pmUx.filter(matches));
  let filteredBrandData = $derived(brandData.filter(matches));
  let totalResults = $derived(filteredPmUx.length + filteredBrandData.length);
</script>

<svelte:head>
  <title>Projects — CJ Frederickson</title>
</svelte:head>

<div class="projects-page">
  <div class="projects-hero">
    <div class="container">
      <p class="projects-hero__eyebrow">Portfolio</p>
      <h1>My <span class="accent">Work</span></h1>
      <p class="projects-hero__sub">
        Product, design, data, and brand projects from internships, coursework, and ventures.
      </p>
    </div>
  </div>

  <div class="container">
    <div class="search-bar">
      <span class="search-bar__icon">⌕</span>
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search by skill, tool, or topic — try 'PostgreSQL' or 'UX Research'..."
        class="search-bar__input"
      />
      {#if searchQuery}
        <button class="search-bar__clear" onclick={() => searchQuery = ''}>✕</button>
      {/if}
    </div>

    {#if searchQuery && totalResults === 0}
      <div class="search-empty">
        <p>No projects found for "<strong>{searchQuery}</strong>"</p>
      </div>
    {/if}

    {#if filteredPmUx.length > 0}
      <section class="category">
        <div class="category__header">
          <span class="category__label">Product Management & UX</span>
          {#if searchQuery}
            <span class="category__count">{filteredPmUx.length} result{filteredPmUx.length !== 1 ? 's' : ''}</span>
          {/if}
        </div>
        <div class="grid">
          {#each filteredPmUx as project}
            <a href="/projects/{project.slug}" class="card" style="--accent: {project.accent}">
              <div class="card__top">
                <span class="card__year">{project.year}</span>
                <span class="card__role">{project.role}</span>
              </div>
              {#if project.logos}
                <div class="card__logo">
                  {#each project.logos as l}
                    <img src={l.src} alt={l.alt} style="max-height: {project.logoSize ?? '36px'}" />
                  {/each}
                </div>
              {:else if project.logo}
                <div class="card__logo">
                  <img src={project.logo} alt="{project.title} logo" style="max-height: {project.logoSize ?? '40px'}" />
                </div>
              {/if}
              <h3 class="card__title">{project.title}</h3>
              <p class="card__subtitle">{project.subtitle}</p>
              <div class="card__tags">
                {#each project.tags as tag}
                  <span class="card__tag">{tag}</span>
                {/each}
              </div>
              <div class="card__arrow">→</div>
              <div class="card__accent-bar"></div>
            </a>
          {/each}
        </div>
      </section>
    {/if}

    {#if filteredBrandData.length > 0}
      <section class="category">
        <div class="category__header">
          <span class="category__label">Brand, Media & Data Analytics</span>
          {#if searchQuery}
            <span class="category__count">{filteredBrandData.length} result{filteredBrandData.length !== 1 ? 's' : ''}</span>
          {/if}
        </div>
        <div class="grid">
          {#each filteredBrandData as project}
            <a href="/projects/{project.slug}" class="card" style="--accent: {project.accent}">
              <div class="card__top">
                <span class="card__year">{project.year}</span>
                <span class="card__role">{project.role}</span>
              </div>
              {#if project.logos}
                <div class="card__logo">
                  {#each project.logos as l}
                    <img src={l.src} alt={l.alt} style="max-height: {project.logoSize ?? '36px'}" />
                  {/each}
                </div>
              {:else if project.logo}
                <div class="card__logo">
                  <img src={project.logo} alt="{project.title} logo" style="max-height: {project.logoSize ?? '40px'}" />
                </div>
              {/if}
              <h3 class="card__title">{project.title}</h3>
              <p class="card__subtitle">{project.subtitle}</p>
              <div class="card__tags">
                {#each project.tags as tag}
                  <span class="card__tag">{tag}</span>
                {/each}
              </div>
              <div class="card__arrow">→</div>
              <div class="card__accent-bar"></div>
            </a>
          {/each}
        </div>
      </section>
    {/if}
  </div>
</div>

<style>
  .projects-page {
    min-height: 100vh;
    background: var(--color-cream);
    padding-bottom: var(--space-xl);
  }

  .projects-hero {
    padding: 3.5rem 0 1.5rem;
    background: var(--color-ink);
    margin-bottom: 2rem;
  }

  .projects-hero__eyebrow {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-gold);
    margin-bottom: 0.5rem;
    max-width: none;
  }

  .projects-hero h1 {
    color: white;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    margin-bottom: 0.5rem;
  }

  .accent { color: var(--color-gold); }

  .projects-hero__sub {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.45);
    max-width: 48ch;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .search-bar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: 100px;
    padding: 0.6rem 1.25rem;
    margin-bottom: 2rem;
    transition: border-color 0.2s ease;
  }

  .search-bar:focus-within {
    border-color: var(--color-gold);
  }

  .search-bar__icon {
    font-size: 1rem;
    color: var(--color-muted);
    flex-shrink: 0;
  }

  .search-bar__input {
    flex: 1;
    border: none;
    outline: none;
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--color-ink);
    background: transparent;
  }

  .search-bar__input::placeholder {
    color: var(--color-muted);
  }

  .search-bar__clear {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    color: var(--color-muted);
    padding: 0.2rem 0.4rem;
    border-radius: 50%;
    transition: color 0.15s ease;
    flex-shrink: 0;
  }

  .search-bar__clear:hover {
    color: var(--color-ink);
  }

  .search-empty {
    padding: 2rem 0;
    text-align: center;
    color: var(--color-muted);
    font-size: 0.9rem;
  }

  .category {
    margin-bottom: 2.5rem;
  }

  .category__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-border);
  }

  .category__label {
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-muted);
  }

  .category__count {
    font-size: 0.65rem;
    color: var(--color-gold);
    font-weight: 500;
    letter-spacing: 0.06em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    text-decoration: none;
    color: var(--color-ink);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(26,23,20,0.1);
    border-color: var(--accent);
  }

  .card__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .card__year {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: var(--color-muted);
    font-family: var(--font-mono);
  }

  .card__role {
    font-size: 0.65rem;
    color: var(--accent);
    font-weight: 500;
    letter-spacing: 0.04em;
    text-align: right;
    max-width: 120px;
  }

  .card__logo {
    margin-bottom: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  .card__logo img {
    width: auto;
    max-width: 200px;
    object-fit: contain;
  }

  .card__title {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-ink);
    margin-bottom: 0.3rem;
    line-height: 1.2;
  }

  .card__subtitle {
    font-size: 0.78rem;
    color: var(--color-muted);
    margin-bottom: 0.75rem;
    line-height: 1.4;
    max-width: none;
  }

  .card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-top: auto;
    margin-bottom: 0.6rem;
  }

  .card__tag {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.15rem 0.5rem;
    border-radius: 100px;
    background: var(--color-linen);
    color: var(--color-ink-soft);
    border: 1px solid var(--color-border);
  }

  .card__arrow {
    font-size: 1rem;
    color: var(--accent);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.25s ease;
    margin-top: 0.25rem;
  }

  .card:hover .card__arrow {
    opacity: 1;
    transform: translateX(0);
  }

  .card__accent-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .card:hover .card__accent-bar {
    transform: scaleX(1);
  }
</style>