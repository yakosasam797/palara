import { icons } from '../components/icons.js';
import { menuItems, categories } from '../data/menu-data.js';
import { addToCart, toggleFavorite, isFavorite, subscribe } from '../data/store.js';
import { showToast } from '../components/toast.js';

export function createMenu() {
    const section = document.createElement('section');
    section.className = 'section menu-section';
    section.id = 'menu';

    let activeCategory = 'popular';
    let searchQuery = '';

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
        <div class="section-header">
          <span class="section-eyebrow">Our Menu</span>
          <h2 class="section-title">Explore Our Flavours</h2>
          <p class="section-subtitle">From crispy dosas to creamy paneer — something for every craving</p>
        </div>

        <div class="menu-search-bar">
          <span class="menu-search-icon">${icons.search}</span>
          <input type="text" class="menu-search-input" placeholder="Search dishes..." value="${searchQuery}" id="menu-search" />
        </div>

        <div class="menu-categories" id="menu-cats">
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
              <div class="menu-card-img" style="background:linear-gradient(135deg, hsl(${item.id * 37 % 360}, 40%, 85%), hsl(${(item.id * 37 + 40) % 360}, 50%, 75%))">
                <span class="menu-card-emoji">${getCategoryEmoji(item.category)}</span>
                <button class="menu-fav-btn ${isFavorite(item.id) ? 'active' : ''}" data-fav="${item.id}" aria-label="Toggle favorite">
                  ${isFavorite(item.id) ? icons.heartFill : icons.heart}
                </button>
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
                  <button class="btn btn-primary btn-sm menu-add-btn" data-add="${item.id}">
                    ${icons.plus} Add
                  </button>
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

        section.querySelectorAll('.menu-add-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = menuItems.find(i => i.id === parseInt(btn.dataset.add));
                if (item) {
                    addToCart(item);
                    showToast(`${item.name} added to cart`, '🛒');
                }
            });
        });

        section.querySelectorAll('.menu-fav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.fav);
                toggleFavorite(id);
                const fav = isFavorite(id);
                showToast(fav ? 'Added to favorites!' : 'Removed from favorites', fav ? '❤️' : '💔');
                render();
            });
        });
    }

    render();
    return section;
}

function getCategoryEmoji(cat) {
    const map = { 'south-indian': '🥘', 'north-indian': '🍛', 'chinese': '🥡', 'mangalorean': '🌶️', 'beverages': '☕', 'desserts': '🍨' };
    return map[cat] || '🍽️';
}
