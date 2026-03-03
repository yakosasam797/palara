export function createHeritage() {
  const section = document.createElement('section');
  section.className = 'section heritage-section';
  section.id = 'heritage';

  section.innerHTML = `
    <!-- Faded temple illustration as subtle background watermark -->
    <div class="heritage-temple-watermark" data-parallax="0.03">
      <img src="/From me/temple 03-Photoroom (1).png" alt="" loading="lazy" class="heritage-watermark-img" />
    </div>

    <div class="container">
      <div class="heritage-content-centered">
        <span class="section-eyebrow reveal">Our Heritage</span>
        <h2 class="heritage-title reveal" style="transition-delay:0.05s">
          Rooted in<br/><span class="heritage-title-accent">Tradition</span>
        </h2>
        <p class="heritage-desc reveal" style="transition-delay:0.1s">
          Born from a deep reverence for pure vegetarian cuisine, Palara carries forward
          centuries of culinary wisdom from the temple kitchens of coastal Karnataka.
        </p>
        <p class="heritage-desc reveal" style="transition-delay:0.15s">
          Every dish we serve is crafted with the same devotion and purity that has
          defined our heritage — using fresh, locally sourced ingredients and
          time-honoured recipes passed down through generations.
        </p>

        <div class="heritage-stats reveal" style="transition-delay:0.2s">
          <div class="heritage-stat">
            <span class="heritage-stat-number counter-animate" data-count="5">0</span>
            <span class="heritage-stat-suffix">+</span>
            <span class="heritage-stat-label">Years of Service</span>
          </div>
          <div class="heritage-stat">
            <span class="heritage-stat-number counter-animate" data-count="3">0</span>
            <span class="heritage-stat-suffix"></span>
            <span class="heritage-stat-label">Outlets in Puttur</span>
          </div>
          <div class="heritage-stat">
            <span class="heritage-stat-number">100</span>
            <span class="heritage-stat-suffix">%</span>
            <span class="heritage-stat-label">Pure Vegetarian</span>
          </div>
          <div class="heritage-stat">
            <span class="heritage-stat-number counter-animate" data-count="2272">0</span>
            <span class="heritage-stat-suffix">+</span>
            <span class="heritage-stat-label">Happy Reviews</span>
          </div>
        </div>

        <div class="heritage-values reveal" style="transition-delay:0.25s">
          <div class="heritage-value">
            <span class="heritage-value-icon">🍃</span>
            <div>
              <strong>Pure Vegetarian</strong>
              <p>Every single dish is 100% vegetarian — no compromise, no exceptions.</p>
            </div>
          </div>
          <div class="heritage-value">
            <span class="heritage-value-icon">🏛️</span>
            <div>
              <strong>Temple Kitchen Tradition</strong>
              <p>Our recipes draw inspiration from the ancient temple kitchens of Karnataka.</p>
            </div>
          </div>
          <div class="heritage-value">
            <span class="heritage-value-icon">🌿</span>
            <div>
              <strong>Fresh & Local</strong>
              <p>We source ingredients locally, ensuring freshness and supporting our community.</p>
            </div>
          </div>
          <div class="heritage-value">
            <span class="heritage-value-icon">👨‍🍳</span>
            <div>
              <strong>Crafted with Devotion</strong>
              <p>Our chefs cook with the same devotion and care as cooking for family.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
