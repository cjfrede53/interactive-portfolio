<svelte:head>
  <title>CJ Frederickson — Product · UX · Data</title>
</svelte:head>

<section class="hero">
  <div class="hero__bg">
    <div class="hero__bg-overlay"></div>
  </div>

  <div class="hero__diamond"></div>
  <div class="hero__diamond hero__diamond--2"></div>

  <div class="container hero__content">
    <div class="hero__eyebrow">
      <span class="hero__eyebrow-line"></span>
      <span class="hero__eyebrow-text">Portfolio 2025</span>
    </div>

    <h1 class="hero__name">
      <span class="hero__name-first">Cole <em>"CJ"</em></span>
      <span class="hero__name-last">Frederickson</span>
    </h1>

    <div class="hero__credentials">
      <p class="hero__disciplines">
        Product Management&nbsp;&nbsp;<span class="sep">|</span>&nbsp;&nbsp;User Experience&nbsp;&nbsp;<span class="sep">|</span>&nbsp;&nbsp;Data Analytics&nbsp;&nbsp;<span class="sep">|</span>&nbsp;&nbsp;Media Innovation
      </p>
      <p class="hero__degree">
        Duke University&nbsp;&nbsp;·&nbsp;&nbsp;B.S. Computer Science &amp; Statistics&nbsp;&nbsp;·&nbsp;&nbsp;Class of 2027
      </p>
    </div>

    <div class="hero__cta">
      <a href="/projects" class="btn btn--primary">View My Work</a>
      <a href="/contact" class="btn btn--ghost">Get in Touch</a>
    </div>
  </div>

  <!-- Ambient ticker -->
  <div class="hero__ticker">
    <div class="ticker__track">
      {#each Array(6) as _}
        <span class="ticker__item">Comcast NBCUniversal</span>
        <span class="ticker__sep">✦</span>
        <span class="ticker__item">Cantina</span>
        <span class="ticker__sep">✦</span>
        <span class="ticker__item">CollegeSwimConnect</span>
        <span class="ticker__sep">✦</span>
        <span class="ticker__item">Duke Athletics</span>
        <span class="ticker__sep">✦</span>
        <span class="ticker__item">Duke I&amp;E</span>
        <span class="ticker__sep">✦</span>
        <span class="ticker__item">Tiffany &amp; Co.</span>
        <span class="ticker__sep">✦</span>
      {/each}
    </div>
  </div>

  <div class="hero__scroll">
    <span>Scroll</span>
    <div class="hero__scroll-line"></div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .hero__bg {
    position: absolute;
    inset: 0;
    background-color: var(--color-ink);
    background-image: url('/images/duke-background.jpeg');
    background-size: cover;
    background-position: center 30%;
    animation: slowZoom 20s ease-out forwards;
  }
  @keyframes slowZoom {
    from { transform: scale(1.08); }
    to   { transform: scale(1); }
  }
  .hero__bg-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(20,17,14,0.75) 0%,
      rgba(20,17,14,0.45) 55%,
      rgba(184,147,63,0.1) 100%
    );
  }
  .hero__diamond {
    position: absolute;
    right: 6%;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: clamp(240px, 32vw, 480px);
    height: clamp(240px, 32vw, 480px);
    border: 1px solid rgba(184,147,63,0.3);
    pointer-events: none;
    animation: diamondFadeIn 1.8s ease forwards;
    opacity: 0;
  }
  .hero__diamond--2 {
    width: clamp(180px, 24vw, 360px);
    height: clamp(180px, 24vw, 360px);
    border-color: rgba(184,147,63,0.12);
    animation-delay: 0.3s;
  }
  @keyframes diamondFadeIn {
    from { opacity: 0; transform: translateY(-50%) rotate(45deg) scale(0.9); }
    to   { opacity: 1; transform: translateY(-50%) rotate(45deg) scale(1); }
  }
  .hero__content {
    position: relative;
    z-index: 2;
    padding-top: 80px;
    padding-bottom: 160px;
  }
  .hero__eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1.75rem;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.2s forwards;
  }
  .hero__eyebrow-line {
    display: block;
    width: 40px;
    height: 1px;
    background: var(--color-gold);
  }
  .hero__eyebrow-text {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-gold-light);
  }
  .hero__name {
    display: flex;
    flex-direction: column;
    font-family: var(--font-display);
    font-weight: 300;
    color: white;
    line-height: 0.95;
    letter-spacing: -0.02em;
    margin-bottom: 1.75rem;
  }
  .hero__name-first {
    font-size: clamp(3rem, 7vw, 6.5rem);
    opacity: 0;
    animation: fadeUp 0.9s ease 0.4s forwards;
  }
  .hero__name-first em {
    color: var(--color-gold-light);
    font-style: italic;
    font-weight: 300;
  }
  .hero__name-last {
    font-size: clamp(3.5rem, 9vw, 8.5rem);
    opacity: 0;
    animation: fadeUp 0.9s ease 0.55s forwards;
  }

  /* ── Credentials block ── */
  .hero__credentials {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.75s forwards;
  }
  .hero__disciplines {
    font-size: clamp(0.8rem, 1.6vw, 1rem);
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.9);
    max-width: none;
  }
  .sep {
    color: var(--color-gold);
    opacity: 0.7;
  }
  .hero__degree {
    font-size: clamp(0.75rem, 1.3vw, 0.875rem);
    letter-spacing: 0.05em;
    color: rgba(255,255,255,0.75);
    max-width: none;
  }

  /* ── CTAs ── */
  .hero__cta {
    display: flex;
    gap: 1rem;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.95s forwards;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 2.25rem;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: all 0.25s ease;
    text-decoration: none;
  }
  .btn--primary {
    background: var(--color-gold);
    color: white;
    border: 1px solid var(--color-gold);
  }
  .btn--primary:hover {
    background: var(--color-gold-dark);
    border-color: var(--color-gold-dark);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(184,147,63,0.35);
  }
  .btn--ghost {
    background: transparent;
    color: rgba(255,255,255,0.8);
    border: 1px solid rgba(255,255,255,0.3);
  }
  .btn--ghost:hover {
    border-color: white;
    color: white;
    background: rgba(255,255,255,0.08);
    transform: translateY(-2px);
  }

  /* ── Ticker ── */
  .hero__ticker {
    position: absolute;
    bottom: 64px;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 2;
    opacity: 0;
    animation: fadeIn 1s ease 1.4s forwards;
    border-top: 1px solid rgba(184,147,63,0.35);
    border-bottom: 1px solid rgba(184,147,63,0.35);
    padding: 0.55rem 0;
    background: rgba(20,17,14,0.3);
  }
  .ticker__track {
    display: flex;
    white-space: nowrap;
    animation: ticker 40s linear infinite;
  }
.ticker__item {
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.65);
    padding: 0 1.5rem;
  }
  .ticker__sep {
    color: var(--color-gold);
    font-size: 0.45rem;
    display: inline-flex;
    align-items: center;
    opacity: 0.9;
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── Scroll indicator ── */
  .hero__scroll {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    opacity: 0;
    animation: fadeIn 1s ease 1.8s forwards;
    z-index: 3;
  }
  .hero__scroll span {
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
  }
  .hero__scroll-line {
    width: 1px;
    height: 28px;
    background: linear-gradient(to bottom, rgba(184,147,63,0.4), transparent);
    animation: scrollPulse 2s ease-in-out 2s infinite;
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 1; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
</style>