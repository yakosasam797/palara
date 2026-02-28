import './styles/base.css';
import './styles/components.css';
import { createNavbar } from './components/navbar.js';
import { createCartDrawer } from './components/cart.js';
import { createFooter } from './components/footer.js';
import { createHero } from './sections/hero.js';
import { createMenu } from './sections/menu.js';
import { createCheckout } from './sections/checkout.js';
import { createTracking } from './sections/tracking.js';
import { createFavorites } from './sections/favorites.js';
import { createLoyalty } from './sections/loyalty.js';
import { createCatering } from './sections/catering.js';
import { createInstagram } from './sections/instagram.js';
import { createDeliveryZone } from './sections/delivery-zone.js';
import { subscribe, getState } from './data/store.js';
import { icons } from './components/icons.js';

const app = document.getElementById('app');

/* ============================================================
   INTRO LOADER — Brand Green Reveal (like Joyeux Repas)
   ============================================================ */
function createIntroLoader() {
    const loader = document.createElement('div');
    loader.className = 'intro-loader';
    loader.id = 'intro-loader';
    loader.innerHTML = `
    <div class="intro-flame">🔥</div>
    <div class="intro-logo">PALARA</div>
    <div class="intro-tagline">Pure Vegetarian · Since 2019</div>
    <div class="intro-dots">
      <span class="intro-dot"></span>
      <span class="intro-dot"></span>
      <span class="intro-dot"></span>
      <span class="intro-dot"></span>
    </div>
  `;
    return loader;
}

function dismissIntroLoader() {
    const loader = document.getElementById('intro-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
            document.body.classList.remove('no-scroll');
            setTimeout(() => loader.remove(), 900);
        }, 2200); // Show loader for 2.2s, then slide up
    }
}

/* ============================================================
   SCROLL REVEAL OBSERVER — Smooth scroll-triggered animations
   ============================================================ */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after revealing
                if (!entry.target.dataset.keepObserving) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    // Observe all elements with reveal classes
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================================
   PARALLAX — Subtle image depth effect on scroll
   ============================================================ */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                parallaxElements.forEach(el => {
                    const speed = parseFloat(el.dataset.parallax) || 0.1;
                    const rect = el.getBoundingClientRect();
                    const centerY = rect.top + rect.height / 2;
                    const viewportCenter = window.innerHeight / 2;
                    const offset = (centerY - viewportCenter) * speed;
                    el.style.transform = `translateY(${offset}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ============================================================
   SMOOTH NAVBAR — Hide on scroll down, show on scroll up
   ============================================================ */
function initSmoothNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                if (currentScrollY > 80) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }

                if (currentScrollY > lastScrollY && currentScrollY > 400) {
                    navbar.classList.add('hidden');
                } else {
                    navbar.classList.remove('hidden');
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ============================================================
   RENDER APP
   ============================================================ */
function renderApp() {
    const { currentView } = getState();
    app.innerHTML = '';

    // Navbar
    app.appendChild(createNavbar());

    // Overlay for drawers
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.addEventListener('click', () => {
        document.getElementById('cart-drawer')?.classList.remove('active');
        document.getElementById('mobile-drawer')?.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    app.appendChild(overlay);

    // Cart drawer
    app.appendChild(createCartDrawer());

    // Main content
    const main = document.createElement('main');
    main.className = 'main-content';

    if (currentView === 'home') {
        main.appendChild(createHero());
        main.appendChild(createMenu());
        main.appendChild(createFavorites());
        main.appendChild(createLoyalty());
        main.appendChild(createCatering());
        main.appendChild(createInstagram());
        main.appendChild(createDeliveryZone());
    } else if (currentView === 'checkout') {
        main.appendChild(createCheckout());
    } else if (currentView === 'tracking') {
        main.appendChild(createTracking());
    }

    app.appendChild(main);
    app.appendChild(createFooter());

    // WhatsApp FAB
    const whatsapp = document.createElement('a');
    whatsapp.className = 'whatsapp-fab';
    whatsapp.href = 'https://wa.me/919876543210';
    whatsapp.target = '_blank';
    whatsapp.setAttribute('aria-label', 'Chat on WhatsApp');
    whatsapp.innerHTML = icons.whatsapp;
    app.appendChild(whatsapp);

    // Init scroll effects after a tick
    requestAnimationFrame(() => {
        initSmoothNavbar();
        initScrollReveal();
        initParallax();
    });
}

/* ============================================================
   BOOT SEQUENCE
   ============================================================ */
// 1. Show intro loader
document.body.classList.add('no-scroll');
const introLoader = createIntroLoader();
document.body.appendChild(introLoader);

// 2. Render app behind loader
renderApp();

// 3. Dismiss loader after animation plays
dismissIntroLoader();

// 4. Re-render on view changes
let lastView = null;
subscribe((state) => {
    if (state.currentView !== lastView) {
        lastView = state.currentView;
        renderApp();
    }
});
