import { icons } from './icons.js';

export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';

  function render() {
    nav.innerHTML = `
      <div class="navbar-inner container">
        <a href="#" class="navbar-logo" id="nav-logo">
          <img src="/From me/logo-Photoroom.png" alt="Palara" class="navbar-logo-img" />
        </a>

        <ul class="navbar-links" id="nav-links">
          <li><a href="#menu" class="nav-link">Menu</a></li>
          <li><a href="#specialties" class="nav-link">Specialties</a></li>
          <li><a href="#heritage" class="nav-link">Heritage</a></li>
          <li><a href="#catering" class="nav-link">Catering</a></li>
          <li><a href="#outlets" class="nav-link">Outlets</a></li>
        </ul>

        <div class="navbar-actions">
          <a href="https://www.zomato.com" target="_blank" rel="noopener" class="btn btn-primary btn-sm nav-order-btn" id="nav-order-btn">
            Order Online
          </a>
          <button class="btn-icon nav-menu-btn" id="nav-menu-toggle" aria-label="Open menu">
            ${icons.menu}
          </button>
        </div>
      </div>

      <!-- Mobile Drawer -->
      <div class="mobile-drawer" id="mobile-drawer">
        <div class="mobile-drawer-header">
          <img src="/From me/logo-Photoroom.png" alt="Palara" class="mobile-logo-img" />
          <button class="btn-icon mobile-close-btn" id="mobile-close">${icons.x}</button>
        </div>
        <ul class="mobile-nav-links">
          <li><a href="#menu" class="mobile-link">🥘 Menu</a></li>
          <li><a href="#specialties" class="mobile-link">⭐ Specialties</a></li>
          <li><a href="#heritage" class="mobile-link">🏛️ Heritage</a></li>
          <li><a href="#instagram" class="mobile-link">📸 Instagram</a></li>
          <li><a href="#catering" class="mobile-link">🍽️ Catering</a></li>
          <li><a href="#outlets" class="mobile-link">📍 Our Outlets</a></li>
        </ul>
        <div class="mobile-drawer-footer">
          <p class="mobile-drawer-label">Order Online</p>
          <div class="mobile-order-platforms">
            <a href="https://www.zomato.com" target="_blank" rel="noopener" class="btn btn-primary btn-lg mobile-platform-btn">
              Zomato
            </a>
            <a href="https://www.swiggy.com" target="_blank" rel="noopener" class="btn btn-primary btn-lg mobile-platform-btn">
              Swiggy
            </a>
          </div>
        </div>
      </div>
    `;

    // Events
    nav.querySelector('#nav-menu-toggle')?.addEventListener('click', () => {
      document.getElementById('mobile-drawer')?.classList.add('active');
      document.body.classList.add('no-scroll');
    });

    nav.querySelector('#mobile-close')?.addEventListener('click', closeMobile);

    nav.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobile();
      });
    });

    nav.querySelector('#nav-logo')?.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function closeMobile() {
    document.getElementById('mobile-drawer')?.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  render();

  // Sticky navbar on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 60);
    nav.classList.toggle('hidden', scrollY > lastScroll && scrollY > 300);
    lastScroll = scrollY;
  });

  return nav;
}
