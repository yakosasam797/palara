import { setOrderMode, getState } from '../data/store.js';

export function createHero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'hero';

  const { orderMode } = getState();

  // Select diverse food images for the strip
  const stripImages = [
    { src: '/images/foods/food-03.png', alt: 'Delicious Meal' },
    { src: '/images/foods/food-07.png', alt: 'Special Dish' },
    { src: '/images/foods/food-12.png', alt: 'Chef Special' },
    { src: '/images/foods/food-16.png', alt: 'Popular Item' },
    { src: '/images/foods/food-20.png', alt: 'Signature Platter' },
    { src: '/images/foods/food-23.png', alt: 'Traditional Recipe' },
  ];

  section.innerHTML = `
    <div class="hero-bg">
      <div class="hero-bg-image" style="background-image:url('/images/foods/food-04.png')"></div>
      <div class="hero-overlay"></div>
      <!-- Temple accent parallax layer -->
      <div class="hero-temple-accent" data-parallax="0.05">
        <img src="/From me/temple 01-Photoroom.png" alt="" class="hero-temple-img" />
      </div>
    </div>

    <!-- MASSIVE BRAND NAME — edge to edge -->
    <div class="hero-brand-massive">
      <span class="hero-brand-text">PALARA</span>
    </div>

    <div class="hero-content container">
      <div class="hero-center">
        <div class="hero-tagline-wrapper animate-fade-up">
          <span class="hero-pill-badge" style="transform:rotate(-4deg)">🍃 PURE VEG</span>
          <span class="hero-pill-badge" style="transform:rotate(2deg)">🔥 3 OUTLETS</span>
          <span class="hero-pill-badge" style="transform:rotate(-1deg)">📍 PUTTUR</span>
        </div>

        <h1 class="hero-headline animate-fade-up" style="animation-delay:0.1s">
          WE SERVE<br/>
          <span class="hero-headline-accent">HAPPINESS,</span><br/>
          AT TABLE<br/>
          ESSENTIALLY.
        </h1>
        
        <p class="hero-sub animate-fade-up" style="animation-delay:0.2s">
          South Indian · North Indian · Chinese · Mangalorean
        </p>

        <div class="hero-cta-row animate-fade-up" style="animation-delay:0.3s">
          <div class="hero-mode-toggle">
            <button class="mode-btn ${orderMode === 'delivery' ? 'active' : ''}" data-mode="delivery">
              🚚 DELIVERY
            </button>
            <button class="mode-btn ${orderMode === 'pickup' ? 'active' : ''}" data-mode="pickup">
              🏪 PICKUP
            </button>
          </div>
          <a href="#menu" class="btn btn-primary btn-lg hero-order-btn">
            ORDER NOW ↓
          </a>
        </div>
      </div>
    </div>

    <!-- REAL FOOD IMAGE STRIP — editorial gallery with real photos -->
    <div class="hero-food-strip">
      <div class="food-strip-track">
        ${stripImages.map(img => `
          <div class="food-strip-item food-strip-img-card">
            <img src="${img.src}" alt="${img.alt}" loading="lazy" />
          </div>
        `).join('')}
        <!-- Duplicate for seamless infinite scroll -->
        ${stripImages.map(img => `
          <div class="food-strip-item food-strip-img-card">
            <img src="${img.src}" alt="${img.alt}" loading="lazy" />
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Stats marquee -->
    <div class="hero-marquee">
      <div class="marquee-track">
        <span class="marquee-item">★ 4.5 RATED</span>
        <span class="marquee-divider">·</span>
        <span class="marquee-item">2,272+ REVIEWS</span>
        <span class="marquee-divider">·</span>
        <span class="marquee-item">5+ YEARS</span>
        <span class="marquee-divider">·</span>
        <span class="marquee-item">PURE VEGETARIAN</span>
        <span class="marquee-divider">·</span>
        <span class="marquee-item">3 OUTLETS IN PUTTUR</span>
        <span class="marquee-divider">·</span>
        <span class="marquee-item">★ 4.5 RATED</span>
        <span class="marquee-divider">·</span>
        <span class="marquee-item">2,272+ REVIEWS</span>
        <span class="marquee-divider">·</span>
        <span class="marquee-item">5+ YEARS</span>
        <span class="marquee-divider">·</span>
        <span class="marquee-item">PURE VEGETARIAN</span>
        <span class="marquee-divider">·</span>
        <span class="marquee-item">3 OUTLETS IN PUTTUR</span>
        <span class="marquee-divider">·</span>
      </div>
    </div>
  `;

  section.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setOrderMode(btn.dataset.mode);
      section.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  return section;
}
