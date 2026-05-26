<!-- <script>
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
</style> -->

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
    { href: '/projects/duke-athletics', label: 'Duke Athletics Marketing' },
  ];

  function isActive(href) {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  }

  let dropdownOpen = $state(false);
  let dropdownTimeout;
  let mobileOpen = $state(false);
  let mobileProjectsOpen = $state(false);

  function openDropdown() {
    clearTimeout(dropdownTimeout);
    dropdownOpen = true;
  }

  function closeDropdown() {
    dropdownTimeout = setTimeout(() => {
      dropdownOpen = false;
    }, 150);
  }

  function closeMobile() {
    mobileOpen = false;
    mobileProjectsOpen = false;
  }
</script>

<nav class="navbar">
  <div class="navbar__inner">
    <a href="/" class="navbar__logo">CJ<span class="accent">.</span></a>

    <!-- Desktop links -->
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

    <!-- Hamburger button (mobile only) -->
    <button
      class="hamburger"
      onclick={() => mobileOpen = !mobileOpen}
      aria-label="Toggle menu"
    >
      <span class="hamburger__line" class:open={mobileOpen}></span>
      <span class="hamburger__line" class:open={mobileOpen}></span>
      <span class="hamburger__line" class:open={mobileOpen}></span>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <div class="mobile-menu">
      <ul class="mobile-links">
        {#each links as link}
          {#if link.label === 'Projects'}
            <li class="mobile-item">
              <button
                class="mobile-link mobile-link--toggle"
                onclick={() => mobileProjectsOpen = !mobileProjectsOpen}
              >
                Projects
                <span class="mobile-caret" class:rotated={mobileProjectsOpen}>▾</span>
              </button>
              {#if mobileProjectsOpen}
                <ul class="mobile-dropdown">
                  {#each projectDropdown as proj}
                    <li>
                      <a href={proj.href} class="mobile-dropdown__link" onclick={closeMobile}>
                        {proj.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </li>
          {:else}
            <li class="mobile-item">
              <a
                href={link.href}
                class="mobile-link"
                class:active={isActive(link.href)}
                onclick={closeMobile}
              >
                {link.label}
              </a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {/if}
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

  /* Desktop nav */
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
  .navbar__link.active { color: white; }
  .navbar__link.active::after,
  .navbar__link:hover::after { transform: scaleX(1); }
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

  /* Hamburger */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    width: 36px;
    height: 36px;
  }
  .hamburger__line {
    display: block;
    width: 22px;
    height: 2px;
    background: rgba(255,255,255,0.8);
    border-radius: 2px;
    transition: all 0.25s ease;
    transform-origin: center;
  }
  /* Animate to X when open */
  .hamburger__line:nth-child(1).open {
    transform: translateY(7px) rotate(45deg);
  }
  .hamburger__line:nth-child(2).open {
    opacity: 0;
    transform: scaleX(0);
  }
  .hamburger__line:nth-child(3).open {
    transform: translateY(-7px) rotate(-45deg);
  }

  /* Mobile menu */
  .mobile-menu {
    background: rgba(10,8,6,0.97);
    backdrop-filter: blur(16px);
    border-top: 1px solid rgba(184,147,63,0.15);
    padding: 1rem 2rem 1.5rem;
  }
  .mobile-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .mobile-item {
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .mobile-item:last-child {
    border-bottom: none;
  }
  .mobile-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.85rem 0;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-body);
    transition: color 0.2s;
  }
  .mobile-link:hover,
  .mobile-link.active {
    color: var(--color-gold);
  }
  .mobile-link--toggle {
    width: 100%;
    text-align: left;
  }
  .mobile-caret {
    font-size: 0.8rem;
    transition: transform 0.2s ease;
    opacity: 0.6;
  }
  .mobile-caret.rotated {
    transform: rotate(180deg);
  }
  .mobile-dropdown {
    list-style: none;
    margin: 0;
    padding: 0 0 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
  .mobile-dropdown__link {
    display: block;
    padding: 0.5rem 0.5rem;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.55);
    text-decoration: none;
    border-radius: 6px;
    transition: color 0.15s ease;
  }
  .mobile-dropdown__link:hover {
    color: var(--color-gold);
  }

  /* Show/hide */
  @media (max-width: 768px) {
    .navbar__links { display: none; }
    .hamburger { display: flex; }
    .navbar__inner { padding: 0 1.25rem; }
  }
  @media (min-width: 769px) {
    .mobile-menu { display: none; }
    .hamburger { display: none; }
  }
</style>