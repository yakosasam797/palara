import './styles/base.css';
import './styles/components.css';
import { createNavbar } from './components/navbar.js';
import { createFooter } from './components/footer.js';
import { createHero } from './sections/hero.js';
import { createMenu } from './sections/menu.js';
import { createSpecialties } from './sections/specialties.js';
import { createOrderPlatforms } from './sections/order-platforms.js';
import { createHeritage } from './sections/heritage.js';
import { createInstagram } from './sections/instagram.js';
import { createCatering } from './sections/catering.js';
import { createOutlets } from './sections/outlets.js';
import { icons } from './components/icons.js';

const app = document.getElementById('app');

/* ============================================================
   INTRO LOADER — Brand Logo Reveal
   ============================================================ */
function createIntroLoader() {
    const loader = document.createElement('div');
    loader.className = 'intro-loader';
    loader.id = 'intro-loader';
    loader.innerHTML = `
    <div class="intro-logo-glow"></div>
    <div class="intro-logo-img">
      <img src="/From me/logo-Photoroom.png" alt="Palara Logo" />
    </div>
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
        }, 2600);
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
                if (!entry.target.dataset.keepObserving) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate, .reveal-blur').forEach(el => {
        observer.observe(el);
    });

    // Stagger children in sections
    document.querySelectorAll('.stagger').forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.07}s`;
        });
    });
}

/* ============================================================
   COUNTER ANIMATION — Animate numbers from 0 to target
   ============================================================ */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-animate');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'), 10);
                if (isNaN(target)) return;

                let current = 0;
                const duration = 1800;
                const stepTime = 30;
                const steps = duration / stepTime;
                const increment = target / steps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current).toLocaleString();
                }, stepTime);

                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
}

/* ============================================================
   TEXT REVEAL — Word-by-word fade-in for section titles
   ============================================================ */
function initTextReveal() {
    document.querySelectorAll('.text-reveal').forEach(el => {
        const words = el.textContent.trim().split(/\s+/);
        el.innerHTML = words.map((word, i) =>
            `<span class="word-reveal" style="transition-delay:${i * 0.06}s">${word}</span>`
        ).join(' ');
    });

    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('text-revealed');
                textObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.text-reveal').forEach(el => textObserver.observe(el));
}

/* ============================================================
   SMOOTH SECTIONS — Scale + opacity on enter for premium feel
   ============================================================ */
function initSmoothSections() {
    const sections = document.querySelectorAll('.section');
    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    sections.forEach(s => {
        s.classList.add('section-animate');
        sectionObserver.observe(s);
    });
}

/* ============================================================
   TEMPLE DIVIDER — Decorative section separator
   ============================================================ */
function createTempleDivider() {
    const div = document.createElement('div');
    div.className = 'temple-divider';
    div.innerHTML = '<div class="temple-divider-line"></div>';
    return div;
}

/* ============================================================
   BUTTON GLOW — Mouse-tracking radial highlight on CTAs
   ============================================================ */
function initButtonGlow() {
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            btn.style.setProperty('--mouse-x', `${x}%`);
            btn.style.setProperty('--mouse-y', `${y}%`);
        });
    });
}

/* ============================================================
   PARALLAX — Multi-layer depth effect on scroll
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
   SCROLL PROGRESS INDICATOR
   ============================================================ */
function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${progress}%`;
    }, { passive: true });
}

/* ============================================================
   RENDER APP
   ============================================================ */
function renderApp() {
    app.innerHTML = '';

    // Navbar
    app.appendChild(createNavbar());

    // Overlay for mobile drawer
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.addEventListener('click', () => {
        document.getElementById('mobile-drawer')?.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    app.appendChild(overlay);

    // Main content
    const main = document.createElement('main');
    main.className = 'main-content';

    main.appendChild(createHero());
    main.appendChild(createOrderPlatforms());
    main.appendChild(createTempleDivider());
    main.appendChild(createMenu());
    main.appendChild(createTempleDivider());
    main.appendChild(createSpecialties());
    main.appendChild(createTempleDivider());
    main.appendChild(createInstagram());
    main.appendChild(createTempleDivider());
    main.appendChild(createHeritage());
    main.appendChild(createCatering());
    main.appendChild(createOutlets());

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
        initScrollProgress();
        initCounterAnimation();
        initTextReveal();
        initSmoothSections();
        initButtonGlow();
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
