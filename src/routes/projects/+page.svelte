<script>
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
    },
    {
      slug: 'cantina',
      title: 'Cantina',
      subtitle: 'AI Social Platform — Trust & Safety',
      role: 'Product Management Intern',
      tags: ['Product Management', 'UX Research', 'Trust & Safety'],
      accent: '#00B4B4',
      year: '2024',
      logo: null,
    },
    {
      slug: 'collegeswimconnect',
      title: 'CollegeSwimConnect',
      subtitle: '55% Workload Reduction · Live Product',
      role: 'Product Manager',
      tags: ['Product Management', 'Full-Stack', 'PostgreSQL'],
      accent: '#0066CC',
      year: '2024',
      logo: null,
    },
    {
      slug: 'devil-exchange',
      title: 'Devil Exchange',
      subtitle: 'Duke Dining UX Case Study',
      role: 'UX Researcher & Designer',
      tags: ['UX Research', 'Figma', 'Prototyping'],
      accent: '#003087',
      year: '2024',
      logo: null,
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
    },
    {
      slug: 'tiffany-rebrand',
      title: 'Tiffany & Co. Rebrand',
      subtitle: 'Timothy & Co. — Brand Strategy',
      role: 'Brand Strategist',
      tags: ['Brand Strategy', 'Market Research'],
      accent: '#0ABAB5',
      year: '2024',
      logo: null,
    },
    {
      slug: 'imdb-regression',
      title: 'IMDb Regression Analysis',
      subtitle: 'Predicting Audience vs. Critic Ratings',
      role: 'Data Scientist',
      tags: ['R', 'Logistic Regression', 'EDA'],
      accent: '#F5C518',
      year: '2024',
      logo: null,
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
    },
  ];
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
    <section class="category">
      <div class="category__header">
        <span class="category__label">Product Management & UX</span>
      </div>
      <div class="grid">
        {#each pmUx as project}
          <a href="/projects/{project.slug}" class="card" style="--accent: {project.accent}">
            <div class="card__top">
              <span class="card__year">{project.year}</span>
              <span class="card__role">{project.role}</span>
            </div>
            {#if project.logo}
              <div class="card__logo">
                <img src={project.logo} alt="{project.title} logo" />
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

    <section class="category">
      <div class="category__header">
        <span class="category__label">Brand, Media & Data Analytics</span>
      </div>
      <div class="grid">
        {#each brandData as project}
          <a href="/projects/{project.slug}" class="card" style="--accent: {project.accent}">
            <div class="card__top">
              <span class="card__year">{project.year}</span>
              <span class="card__role">{project.role}</span>
            </div>
            {#if project.logo}
              <div class="card__logo">
                <img src={project.logo} alt="{project.title} logo" />
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
  </div>
</div>

<style>
  .projects-page {
    min-height: 100vh;
    background: var(--color-cream);
    padding-bottom: var(--space-xl);
  }

  .projects-hero {
    padding: 6rem 0 2rem;
    background: var(--color-ink);
    margin-bottom: 2.5rem;
  }

  .projects-hero__eyebrow {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-gold);
    margin-bottom: 1rem;
    max-width: none;
  }

  .projects-hero h1 {
    color: white;
    margin-bottom: 1rem;
  }

  .accent { color: var(--color-gold); }

  .projects-hero__sub {
    font-size: 1rem;
    color: rgba(255,255,255,0.45);
    max-width: 48ch;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .category {
    margin-bottom: 4rem;
  }

  .category__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-border);
  }

  .category__label {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-muted);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.75rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: 12px;
    text-decoration: none;
    color: var(--color-ink);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(26,23,20,0.1);
    border-color: var(--accent);
  }

  .card__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .card__year {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: var(--color-muted);
    font-family: var(--font-mono);
  }

  .card__role {
    font-size: 0.7rem;
    color: var(--accent);
    font-weight: 500;
    letter-spacing: 0.04em;
    text-align: right;
    max-width: 140px;
  }

  .card__logo {
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
}

.card__logo img {
  height: 56px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
}

  .card__title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--color-ink);
    margin-bottom: 0.4rem;
    line-height: 1.2;
  }

  .card__subtitle {
    font-size: 0.85rem;
    color: var(--color-muted);
    margin-bottom: 1.25rem;
    line-height: 1.5;
    max-width: none;
  }

  .card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: auto;
    margin-bottom: 1rem;
  }

  .card__tag {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.2rem 0.6rem;
    border-radius: 100px;
    background: var(--color-linen);
    color: var(--color-ink-soft);
    border: 1px solid var(--color-border);
  }

  .card__arrow {
    font-size: 1.25rem;
    color: var(--accent);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.25s ease;
    margin-top: 0.5rem;
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