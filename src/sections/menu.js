import { icons } from '../components/icons.js';
import { menuItems, categories } from '../data/menu-data.js';

export function createMenu() {
  const section = document.createElement('section');
  section.className = 'section menu-section';
  section.id = 'menu';

  let activeCategory = 'popular';
  let searchQuery = '';

  // Map menu item IDs to food images for realistic visuals
  const foodImageMap = {
    1: '/images/foods/food-01.png',
    2: '/images/foods/food-02.png',
    3: '/images/foods/food-06.png',
    4: '/images/foods/food-09.png',
    5: '/images/foods/food-10.png',
    6: '/images/foods/food-13.png',
    7: '/images/foods/food-15.png',
    8: '/images/foods/food-18.png',
    9: '/images/foods/food-19.png',
    10: '/images/foods/food-22.png',
    11: '/images/foods/food-24.png',
    12: '/images/foods/food-26.png',
    13: '/images/foods/food-27.png',
    14: '/images/foods/food-29.png',
    15: '/images/foods/food-30.png',
  };

  function getFoodImage(itemId) {
    const keys = Object.keys(foodImageMap);
    const index = ((itemId - 1) % keys.length);
    return foodImageMap[keys[index]] || '/images/foods/food-01.png';
  }

  function getFiltered() {
    let items = menuItems;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));
    } else if (activeCategory === 'popular') {
      items = items.filter(i => i.tags.includes('popular'));
    } else {
      items = items.filter(i => i.category === activeCategory);
    }
    return items;
  }

  function render() {
    const filtered = getFiltered();
    section.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <span class="section-eyebrow">Our Menu</span>
          <h2 class="section-title">Explore Our <span class="accent-serif">Flavours</span></h2>
          <p class="section-subtitle">From crispy dosas to creamy paneer — something for every craving</p>
        </div>

        <div class="menu-search-bar reveal">
          <span class="menu-search-icon">${icons.search}</span>
          <input type="text" class="menu-search-input" placeholder="Search dishes..." value="${searchQuery}" id="menu-search" />
        </div>

        <div class="menu-categories reveal" id="menu-cats">
          ${categories.map(c => `
            <button class="cat-btn ${activeCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
              <span class="cat-icon">${c.icon}</span>
              <span class="cat-name">${c.name}</span>
            </button>
          `).join('')}
        </div>

        <div class="menu-grid stagger" id="menu-grid">
          ${filtered.length === 0 ? `
            <div class="menu-empty">
              <p>No dishes found. Try a different search!</p>
            </div>
          ` : filtered.map(item => `
            <div class="menu-card card" data-id="${item.id}">
              <div class="menu-card-img">
                <img src="${getFoodImage(item.id)}" alt="${item.name}" loading="lazy" class="menu-card-photo" />
                <div class="menu-card-img-overlay"></div>
                ${item.tags.includes('popular') ? '<span class="badge badge-popular menu-badge">🔥 Popular</span>' : ''}
                ${item.tags.includes('chef-special') ? '<span class="badge badge-veg menu-badge">⭐ Chef\'s Special</span>' : ''}
                ${item.tags.includes('spicy') ? '<span class="badge badge-spicy menu-badge">🌶️ Spicy</span>' : ''}
              </div>
              <div class="card-body">
                <div class="menu-card-header">
                  <span class="veg-indicator"></span>
                  <h4 class="menu-card-name">${item.name}</h4>
                </div>
                <p class="menu-card-desc">${item.desc}</p>
                <div class="menu-card-footer">
                  <span class="menu-card-price">₹${item.price}</span>
                  <div class="menu-card-order-links">
                    <a href="https://www.zomato.com" target="_blank" rel="noopener" class="btn btn-sm menu-zomato-btn" title="Order on Zomato">
                      Zomato
                    </a>
                    <a href="https://www.swiggy.com" target="_blank" rel="noopener" class="btn btn-sm menu-swiggy-btn" title="Order on Swiggy">
                      Swiggy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Events
    section.querySelector('#menu-search')?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
    });

    section.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        searchQuery = '';
        render();
      });
    });
  }

  render();
  return section;
}
