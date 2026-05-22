<script>
  import { page } from '$app/stores';

  const links = [
    { href: '/', label: 'Welcome' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const projectDropdown = [
    { href: '/projects/comcast', label: 'Comcast NBCUniversal' },
    { href: '/projects/cantina', label: 'Cantina' },
    { href: '/projects/collegeswimconnect', label: 'CollegeSwimConnect' },
    { href: '/projects/devil-exchange', label: 'Devil Exchange' },
    { href: '/projects/avia-games', label: 'AviaGames' },
    { href: '/projects/nba-analysis', label: 'NBA Data Science' },
    { href: '/projects/tiffany-rebrand', label: 'Tiffany & Co. Rebrand' },
    { href: '/projects/imdb-regression', label: 'IMDb Regression' },
    { href: 'projects/duke-athletics', label: 'Duke Athletics Marketing'}
  ];

  function isActive(href) {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  }

  let dropdownOpen = $state(false);
  let dropdownTimeout;

  function openDropdown() {
    clearTimeout(dropdownTimeout);
    dropdownOpen = true;
  }

  function closeDropdown() {
    dropdownTimeout = setTimeout(() => {
      dropdownOpen = false;
    }, 150);
  }
</script>

<nav class="navbar">
  <div class="navbar__inner">
    <a href="/" class="navbar__logo">CJ<span class="accent">.</span></a>
    <ul class="navbar__links">
      {#each links as link}
        <li
          class="navbar__item"
          onmouseenter={link.label === 'Projects' ? openDropdown : undefined}
          onmouseleave={link.label === 'Projects' ? closeDropdown : undefined}
        >
          <a href={link.href} class="navbar__link" class:active={isActive(link.href)}>
            {link.label}
            {#if link.label === 'Projects'}
              <span class="dropdown-caret">▾</span>
            {/if}
          </a>

          {#if link.label === 'Projects' && dropdownOpen}
            <ul
              class="dropdown"
              onmouseenter={openDropdown}
              onmouseleave={closeDropdown}
            >
              {#each projectDropdown as proj}
                <li>
                  <a href={proj.href} class="dropdown__link">
                    {proj.label}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
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
  .navbar__item {
    position: relative;
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
    display: flex;
    align-items: center;
    gap: 0.3rem;
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
  .dropdown-caret {
    font-size: 0.7rem;
    opacity: 0.6;
  }
  .dropdown {
    position: absolute;
    top: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(10,8,6,0.95);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(184,147,63,0.2);
    border-radius: 10px;
    padding: 0.5rem;
    list-style: none;
    margin: 0;
    min-width: 220px;
    z-index: 200;
  }
  .dropdown__link {
    display: block;
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.15s ease;
    white-space: nowrap;
    letter-spacing: 0.02em;
  }
  .dropdown__link:hover {
    background: rgba(184,147,63,0.12);
    color: var(--color-gold);
  }
</style>