import { icons } from '../components/icons.js';

export function createInstagram() {
  const section = document.createElement('section');
  section.className = 'section instagram-section';
  section.id = 'instagram';

  // Use real food images for the Instagram grid
  const posts = [
    { img: '/images/foods/food-05.png', caption: 'Weekend special thali' },
    { img: '/images/foods/food-08.png', caption: 'Fresh from the kitchen' },
    { img: '/images/foods/food-11.png', caption: 'Pure vegetarian love' },
    { img: '/images/foods/food-14.png', caption: 'Taste the tradition' },
    { img: '/images/foods/food-17.png', caption: 'Flavors of Karnataka' },
    { img: '/images/foods/food-21.png', caption: 'Made with devotion' },
    { img: '/images/foods/food-25.png', caption: 'Spice & everything nice' },
    { img: '/images/foods/food-28.png', caption: 'Chef\'s masterpiece' },
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">@padivalspalara</span>
        <h2 class="section-title">Follow Us on <span class="accent-serif">Instagram</span></h2>
        <p class="section-subtitle">See our food, get inspired, order instantly</p>
      </div>

      <div class="insta-grid stagger">
        ${posts.map((p, i) => `
          <div class="insta-card reveal" style="transition-delay:${i * 0.06}s">
            <div class="insta-img">
              <img src="${p.img}" alt="${p.caption}" loading="lazy" />
              <div class="insta-overlay">
                <span class="insta-caption">${p.caption}</span>
                <button class="btn btn-primary btn-sm">Order This</button>
              </div>
              <div class="insta-icon-badge">${icons.instagram}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="insta-cta reveal">
        <a href="https://instagram.com/padivalspalara" target="_blank" class="btn btn-secondary btn-lg">
          ${icons.instagram} Follow @padivalspalara
        </a>
      </div>
    </div>
  `;

  return section;
}
