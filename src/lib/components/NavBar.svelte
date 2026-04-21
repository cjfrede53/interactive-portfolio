<script>
  import { page } from '$app/stores';

  const links = [
    { href: '/', label: 'Welcome' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  function isActive(href) {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  }
</script>

<nav class="navbar">
  <div class="navbar__inner">
    <a href="/" class="navbar__logo">CJ<span class="accent">.</span></a>
    <ul class="navbar__links">
      {#each links as link}
        <li>
          <a href={link.href} class="navbar__link {isActive(link.href) ? 'active' : ''}">{link.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 72px;
    background: rgba(10,8,6,0.75);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(184,147,63,0.2);
  }
  .navbar__inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .navbar__logo {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 600;
    color: white;
    letter-spacing: -0.02em;
    text-decoration: none;
  }
  .accent { color: var(--color-gold); }
  .navbar__links {
    display: flex;
    gap: 3rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .navbar__link {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    position: relative;
    padding-bottom: 2px;
    transition: color 0.2s ease;
  }
  .navbar__link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--color-gold);
    transform: scaleX(0);
    transition: transform 0.25s ease;
    transform-origin: left;
  }
  .navbar__link:hover,
  .navbar__link.active {
    color: white;
  }
  .navbar__link.active::after,
  .navbar__link:hover::after {
    transform: scaleX(1);
  }
</style>