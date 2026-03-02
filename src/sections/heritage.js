export function createHeritage() {
  const section = document.createElement('section');
  section.className = 'section heritage-section';
  section.id = 'heritage';

  section.innerHTML = `
    <!-- Decorative leaf accent -->
    <div class="heritage-leaf-accent" data-parallax="0.08">
      <img src="/From me/Image (2)-Photoroom.png" alt="" class="heritage-leaf-img" />
    </div>

    <div class="container">
      <div class="heritage-layout">

        <!-- Left: Temple illustrations with artistic overlay -->
        <div class="heritage-visuals reveal-left">
          <div class="heritage-temple-stack">
            <div class="heritage-temple-card heritage-temple-main" data-parallax="0.06">
              <img src="/From me/temple 01-Photoroom.png" alt="Traditional Temple Architecture" loading="lazy" />
              <div class="heritage-temple-overlay"></div>
            </div>
            <div class="heritage-temple-card heritage-temple-secondary" data-parallax="0.1">
              <img src="/From me/temple 02-Photoroom.png" alt="South Indian Temple" loading="lazy" />
              <div class="heritage-temple-overlay"></div>
            </div>
          </div>
        </div>

        <!-- Right: Heritage content -->
        <div class="heritage-content reveal-right">
          <span class="section-eyebrow">Our Heritage</span>
          <h2 class="heritage-title">Rooted in<br/><span class="heritage-title-accent">Tradition</span></h2>
          <p class="heritage-desc">
            Born from a deep reverence for pure vegetarian cuisine, Palara carries forward
            centuries of culinary wisdom from the temple kitchens of coastal Karnataka.
          </p>
          <p class="heritage-desc">
            Every dish we serve is crafted with the same devotion and purity that has
            defined our heritage — using fresh, locally sourced ingredients and
            time-honoured recipes passed down through generations.
          </p>

          <div class="heritage-stats">
            <div class="heritage-stat reveal">
              <span class="heritage-stat-number counter-animate" data-count="5">0</span>
              <span class="heritage-stat-suffix">+</span>
              <span class="heritage-stat-label">Years of Service</span>
            </div>
            <div class="heritage-stat reveal">
              <span class="heritage-stat-number counter-animate" data-count="3">0</span>
              <span class="heritage-stat-suffix"></span>
              <span class="heritage-stat-label">Outlets in Puttur</span>
            </div>
            <div class="heritage-stat reveal">
              <span class="heritage-stat-number">100</span>
              <span class="heritage-stat-suffix">%</span>
              <span class="heritage-stat-label">Pure Vegetarian</span>
            </div>
          </div>

          <div class="heritage-badges">
            <span class="heritage-badge">🍃 Pure Veg</span>
            <span class="heritage-badge">🏛️ Temple Tradition</span>
            <span class="heritage-badge">🌿 Fresh & Local</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom temple panoramic strip with Kerala temple & palms -->
    <div class="heritage-temple-strip" data-parallax="0.04">
      <img src="/From me/temple 03-Photoroom (1).png" alt="" loading="lazy" class="heritage-strip-img" />
      <div class="heritage-strip-overlay"></div>
    </div>
  `;

  return section;
}
