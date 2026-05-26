<svelte:head>
  <title>About — CJ Frederickson</title>
</svelte:head>

<div class="about-page">
  <div class="about-hero">
    <div class="container">
      <p class="eyebrow">About</p>
      <h1>My <span class="accent">Story</span></h1>
    </div>
  </div>

  <div class="container">
    <div class="about-body">

      <div class="about-intro">
        <div class="about-intro__text">
          <blockquote>
            "Technology's impact isn't just in the code or dashboards—it's in the human connections it empowers and the stories it makes possible"
          </blockquote>
          <p>Hi, I'm Cole Frederickson, but you can call me CJ! I am a junior at Duke University studying Computer Science, Visual & Media Studies, and Statistics with a certificate in Innovation & Entrepreneurship. My work sits at the intersection of product management, data analytics, and user experience design, where I focus on turning complex information into clear, engaging, and impactful solutions.</p>
        </div>
        <div class="about-intro__image">
          <img src="/images/headshot.jpeg" alt="CJ Frederickson" />
        </div>
      </div>

      <div class="about-section">
        <h2>The <span class="accent">Journey</span></h2>
        <p>My journey has been shaped by resilience. Two weeks before starting college, I survived a massive brain hemorrhage that forced me to delay my studies and relearn how to walk and talk. During a gap year in Madrid, I worked with neurorehabilitation patients from around the world, using my own story to help them navigate recovery. That experience taught me a lesson that drives every project I take on: the most powerful strategies start with understanding people and telling a story that connects.</p>
      </div>

      <div class="about-section">
        <h2>The <span class="accent">Work</span></h2>
        <p>At Comcast West Division HQ, I designed and launched new engagement channels, built AI-driven KPI dashboards that went deeper than traditional analytics, and prototyped user-centric interfaces. I've also led UX and product case studies through Duke Innovation & Entrepreneurship — ranging from improving trust and safety in AI-powered social platforms, to streamlining Duke's dining system for efficiency, to building athlete-mentor matching tools. Across roles, I specialize in distilling complexity into clarity — through data, design, or narrative.</p>
        <p>Beyond metrics, I believe technology's real impact isn't just in the code or dashboards — it's in the human connections it empowers and the stories it makes possible. Whether through code, design, or data, I thrive on building solutions that truly connect.</p>
      </div>

      <div class="about-section">
        <h2>Beyond the <span class="accent">Screen</span></h2>
        <p>When I'm not exploring user experiences, you might find me singing with my a cappella group, lindy-hopping with Duke's Swing Dance Team, or making magic with Camp Kesem — which provides support for children through and beyond their caregiver's cancer.</p>
      </div>

      <div class="about-links">
        <a href="/projects" class="btn-primary">View My Work</a>
        <a href="/contact" class="btn-secondary">Get in Touch</a>
      </div>

    </div>
  </div>
</div>

<style>
  .about-page {
    min-height: 100vh;
    background: var(--color-cream);
    padding-bottom: 6rem;
  }

  .about-hero {
    padding: 6rem 0 2rem;
    background: var(--color-ink);
    margin-bottom: 4rem;
  }

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-gold);
    margin-bottom: 1rem;
    max-width: none;
  }

  .about-hero h1 {
    color: white;
    margin-bottom: 0;
  }

  .accent { color: var(--color-gold); }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .about-body {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .about-intro {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 3rem;
    align-items: start;
  }

  .about-intro__image img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
    border: 1px solid var(--color-border);
  }

  blockquote {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    line-height: 1.5;
    color: var(--color-ink);
    border-left: 3px solid var(--color-gold);
    padding-left: 1.25rem;
    margin: 0 0 1.75rem 0;
    font-style: italic;
  }

  .about-intro__text p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--color-ink-soft);
    max-width: none;
  }

  .about-section h2 {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    margin-bottom: 1.25rem;
  }

  .about-section p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--color-ink-soft);
    max-width: 68ch;
    margin-bottom: 1rem;
  }

  .about-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 2rem;
    background: var(--color-gold);
    color: white;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .btn-primary:hover {
    background: var(--color-gold-dark);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 2rem;
    border: 1px solid var(--color-border);
    border-radius: 100px;
    font-size: 0.85rem;
    color: var(--color-ink-soft);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .btn-secondary:hover {
    border-color: var(--color-gold);
    color: var(--color-gold);
  }

  @media (max-width: 700px) {
    .about-intro {
      grid-template-columns: 1fr;
    }
    .about-intro__image {
      order: -1;
    }
  }
</style>