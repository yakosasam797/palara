import { icons } from './icons.js';
import { getCartCount, subscribe, setView, getState } from '../data/store.js';

export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';

  function render() {
    const count = getCartCount();
    nav.innerHTML = `
      <div class="navbar-inner container">
        <a href="#" class="navbar-logo" id="nav-logo">
          <img src="/From me/logo-Photoroom.png" alt="Palara" class="navbar-logo-img" />
        </a>

        <ul class="navbar-links" id="nav-links">
          <li><a href="#menu" class="nav-link">Menu</a></li>
          <li><a href="#favorites" class="nav-link">Favorites</a></li>
          <li><a href="#instagram" class="nav-link">Instagram</a></li>
          <li><a href="#catering" class="nav-link">Catering</a></li>
          <li><a href="#locations" class="nav-link">Outlets</a></li>
        </ul>

        <div class="navbar-actions">
          <button class="btn-icon nav-cart-btn" id="nav-cart-btn" aria-label="Open cart">
            ${icons.cart}
            ${count > 0 ? `<span class="cart-badge">${count}</span>` : ''}
          </button>
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
          <li><a href="#favorites" class="mobile-link">❤️ Favorites</a></li>
          <li><a href="#instagram" class="mobile-link">📸 Instagram</a></li>
          <li><a href="#heritage" class="mobile-link">🏛️ Heritage</a></li>
          <li><a href="#catering" class="mobile-link">🍽️ Catering</a></li>
          <li><a href="#locations" class="mobile-link">📍 Our Outlets</a></li>
        </ul>
        <div class="mobile-drawer-footer">
          <button class="btn btn-primary btn-lg" style="width:100%" id="mobile-order-btn">
            Order Now
          </button>
        </div>
      </div>
    `;

    // Events
    nav.querySelector('#nav-cart-btn')?.addEventListener('click', () => {
      document.getElementById('cart-drawer')?.classList.add('active');
      document.querySelector('.overlay')?.classList.add('active');
      document.body.classList.add('no-scroll');
    });

    nav.querySelector('#nav-menu-toggle')?.addEventListener('click', () => {
      document.getElementById('mobile-drawer')?.classList.add('active');
      document.body.classList.add('no-scroll');
    });

    nav.querySelector('#mobile-close')?.addEventListener('click', closeMobile);

    nav.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobile();
        if (getState().currentView !== 'home') setView('home');
      });
    });

    nav.querySelector('#mobile-order-btn')?.addEventListener('click', () => {
      closeMobile();
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    });

    nav.querySelector('#nav-logo')?.addEventListener('click', (e) => {
      e.preventDefault();
      if (getState().currentView !== 'home') {
        setView('home');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  function closeMobile() {
    document.getElementById('mobile-drawer')?.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  render();
  subscribe(() => render());

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
