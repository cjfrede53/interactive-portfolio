<svelte:head>
  <title>Contact — CJ Frederickson</title>
</svelte:head>

<div class="contact-page">
  <div class="contact-hero">
    <div class="container">
      <p class="eyebrow">Contact</p>
      <h1>Get in <span class="accent">Touch</span></h1>
      <p class="contact-hero__sub">Whether you're a recruiter, collaborator, or just curious — I'd love to hear from you.</p>
    </div>
  </div>

  <div class="container">
    <div class="contact-body">

      <div class="contact-card">
        <div class="contact-card__icon">✉</div>
        <div class="contact-card__content">
          <p class="contact-card__label">Duke Email</p>
          <a href="mailto:cole.frederickson@duke.edu" class="contact-card__value">cole.frederickson@duke.edu</a>
        </div>
      </div>

      <div class="contact-card">
        <div class="contact-card__icon">✉</div>
        <div class="contact-card__content">
          <p class="contact-card__label">Personal Email</p>
          <a href="mailto:cj.frederickson24@gmail.com" class="contact-card__value">cj.frederickson24@gmail.com</a>
        </div>
      </div>

      <div class="contact-card">
        <div class="contact-card__icon">in</div>
        <div class="contact-card__content">
          <p class="contact-card__label">LinkedIn</p>
          <a href="https://www.linkedin.com/in/cole-frederickson-b56765291/" target="_blank" rel="noopener noreferrer" class="contact-card__value">cole-frederickson</a>
        </div>
      </div>

      <div class="contact-card">
        <div class="contact-card__icon">☎</div>
        <div class="contact-card__content">
          <p class="contact-card__label">Phone</p>
          <a href="tel:+17249726901" class="contact-card__value">+1 724-972-6901</a>
        </div>
      </div>

    </div>
  </div>
</div>

<style>
  .contact-page {
    min-height: 100vh;
    background: var(--color-cream);
    padding-bottom: 6rem;
  }

  .contact-hero {
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

  .contact-hero h1 {
    color: white;
    margin-bottom: 1rem;
  }

  .contact-hero__sub {
    font-size: 1rem;
    color: rgba(255,255,255,0.45);
    max-width: 48ch;
  }

  .accent { color: var(--color-gold); }

  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .contact-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .contact-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: 12px;
    padding: 1.5rem 2rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .contact-card:hover {
    border-color: var(--color-gold);
    box-shadow: 0 4px 20px rgba(184,147,63,0.08);
  }

  .contact-card__icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: var(--color-linen);
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: var(--color-gold);
    flex-shrink: 0;
    font-weight: 600;
  }

  .contact-card__content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .contact-card__label {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin: 0;
    max-width: none;
  }

  .contact-card__value {
    font-size: 1rem;
    color: var(--color-ink);
    text-decoration: none;
    font-weight: 400;
    transition: color 0.2s ease;
  }

  .contact-card__value:hover {
    color: var(--color-gold);
  }
</style>