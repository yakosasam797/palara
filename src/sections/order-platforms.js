import { icons } from '../components/icons.js';

// Real platform logos from public/From me/
const platformLogos = {
  zomatoIcon: '/From me/zomato icon mark.png',
  swiggyIcon: '/From me/swiggy icon mark.png',
  zomatoFull: '/From me/zomato full logo.png',
  swiggyFull: '/From me/Swiggy full logo.png',
};

export function createOrderPlatforms() {
  const section = document.createElement('section');
  section.className = 'section order-platforms-section';
  section.id = 'order-online';

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">Order Online</span>
        <h2 class="section-title">Now on <span class="accent-serif">Swiggy & Zomato</span></h2>
        <p class="section-subtitle">Skip the queue — order your favourites from the comfort of your home</p>
      </div>

      <div class="platforms-grid">
        <!-- Zomato Card -->
        <a href="https://www.zomato.com" target="_blank" rel="noopener" class="platform-card platform-zomato reveal-left">
          <div class="platform-card-inner">
            <div class="platform-logo-area">
              <div class="platform-icon-circle platform-zomato-icon">
                <img src="${platformLogos.zomatoIcon}" alt="Zomato" class="platform-logo-img" />
              </div>
              <h3 class="platform-name">Zomato</h3>
            </div>
            <div class="platform-info">
              <p class="platform-desc">Order our full menu on Zomato with fast delivery right to your doorstep.</p>
              <div class="platform-features">
                <span class="platform-feature">${icons.check} Full Menu Available</span>
                <span class="platform-feature">${icons.check} Fast Delivery</span>
                <span class="platform-feature">${icons.check} Exclusive Offers</span>
              </div>
            </div>
            <div class="platform-cta">
              <span class="platform-cta-text">Order Now</span>
              ${icons.arrowRight}
            </div>
          </div>
        </a>

        <!-- Swiggy Card -->
        <a href="https://www.swiggy.com" target="_blank" rel="noopener" class="platform-card platform-swiggy reveal-right">
          <div class="platform-card-inner">
            <div class="platform-logo-area">
              <div class="platform-icon-circle platform-swiggy-icon">
                <img src="${platformLogos.swiggyIcon}" alt="Swiggy" class="platform-logo-img" />
              </div>
              <h3 class="platform-name">Swiggy</h3>
            </div>
            <div class="platform-info">
              <p class="platform-desc">Get your Palara favourites delivered via Swiggy — quick, easy, reliable.</p>
              <div class="platform-features">
                <span class="platform-feature">${icons.check} Lightning Fast</span>
                <span class="platform-feature">${icons.check} Live Tracking</span>
                <span class="platform-feature">${icons.check} No Min Order</span>
              </div>
            </div>
            <div class="platform-cta">
              <span class="platform-cta-text">Order Now</span>
              ${icons.arrowRight}
            </div>
          </div>
        </a>
      </div>

      <div class="platforms-trust reveal">
        <div class="trust-item">
          <span class="trust-icon">⭐</span>
          <span class="trust-text">4.5+ Rating on both platforms</span>
        </div>
        <div class="trust-divider"></div>
        <div class="trust-item">
          <span class="trust-icon">📦</span>
          <span class="trust-text">2,272+ happy deliveries</span>
        </div>
        <div class="trust-divider"></div>
        <div class="trust-item">
          <span class="trust-icon">⏱️</span>
          <span class="trust-text">Avg. 30 min delivery</span>
        </div>
      </div>
    </div>
  `;

  return section;
}
