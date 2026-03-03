import { icons } from '../components/icons.js';

export function createSpecialties() {
    const section = document.createElement('section');
    section.className = 'section specialties-section';
    section.id = 'specialties';

    const specialties = [
        {
            name: 'Masala Dosa',
            desc: 'Our signature crispy golden dosa with perfectly spiced potato masala, served with sambar & fresh chutneys. A recipe perfected over generations.',
            img: '/images/foods/food-01.png',
            tag: 'Signature Dish',
            tagIcon: '⭐',
        },
        {
            name: 'Goli Baje',
            desc: 'Authentic Mangalorean fritters — crispy on the outside, fluffy inside. Made with our secret fermented batter and spice blend.',
            img: '/images/foods/food-03.png',
            tag: 'Mangalorean Special',
            tagIcon: '🌶️',
        },
        {
            name: 'Paneer Butter Masala',
            desc: 'Rich, creamy tomato-cashew gravy with melt-in-your-mouth paneer cubes. Our most loved North Indian creation.',
            img: '/images/foods/food-02.png',
            tag: 'Most Ordered',
            tagIcon: '🔥',
        },
        {
            name: 'Filter Coffee',
            desc: 'Hand-brewed South Indian filter coffee made with freshly ground beans. The perfect way to end your meal — or start your day.',
            img: '/images/foods/food-09.png',
            tag: 'House Favourite',
            tagIcon: '☕',
        },
    ];

    section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">What We're Known For</span>
        <h2 class="section-title">Our <span class="accent-serif">Specialties</span></h2>
        <p class="section-subtitle">Dishes that keep our guests coming back — perfected with love and tradition</p>
      </div>

      <div class="specialties-grid">
        ${specialties.map((item, i) => `
          <div class="specialty-card reveal" style="transition-delay:${i * 0.1}s">
            <div class="specialty-img-wrap">
              <img src="${item.img}" alt="${item.name}" loading="lazy" class="specialty-img" />
              <div class="specialty-img-overlay"></div>
              <span class="specialty-tag">${item.tagIcon} ${item.tag}</span>
            </div>
            <div class="specialty-content">
              <div class="specialty-header">
                <span class="veg-indicator"></span>
                <h3 class="specialty-name">${item.name}</h3>
              </div>
              <p class="specialty-desc">${item.desc}</p>
              <div class="specialty-order-row">
                <a href="https://www.zomato.com" target="_blank" rel="noopener" class="specialty-order-link">
                  Order on Zomato ${icons.externalLink}
                </a>
                <a href="https://www.swiggy.com" target="_blank" rel="noopener" class="specialty-order-link">
                  Order on Swiggy ${icons.externalLink}
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

    return section;
}
