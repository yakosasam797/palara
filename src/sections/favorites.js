import { icons } from '../components/icons.js';
import { menuItems } from '../data/menu-data.js';
import { getState, toggleFavorite, addToCart } from '../data/store.js';
import { showToast } from '../components/toast.js';

export function createFavorites() {
    const section = document.createElement('section');
    section.className = 'section favorites-section';
    section.id = 'favorites';
    section.style.background = 'var(--color-bg-warm)';

    function render() {
        const { favorites } = getState();
        const favItems = menuItems.filter(i => favorites.includes(i.id));

        section.innerHTML = `
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Your Favourites</span>
          <h2 class="section-title">Quick Reorder</h2>
          <p class="section-subtitle">Your favourite dishes, ready to reorder in one tap</p>
        </div>

        <div class="favorites-grid stagger">
          ${favItems.length === 0 ? `
            <div class="fav-empty">
              <p>No favorites yet! Tap the ❤️ on any dish to save it here.</p>
            </div>
          ` : favItems.map(item => `
            <div class="fav-card card">
              <div class="card-body" style="display:flex;align-items:center;gap:var(--space-4)">
                <div class="fav-card-img" style="background:linear-gradient(135deg, hsl(${item.id * 37 % 360}, 40%, 85%), hsl(${(item.id * 37 + 40) % 360}, 50%, 75%))">
                  <span style="font-size:1.5rem">${getCategoryEmoji(item.category)}</span>
                </div>
                <div class="fav-card-info">
                  <div style="display:flex;align-items:center;gap:var(--space-2)">
                    <span class="veg-indicator" style="transform:scale(0.8)"></span>
                    <strong>${item.name}</strong>
                  </div>
                  <span class="fav-card-price">₹${item.price}</span>
                </div>
                <div class="fav-card-actions">
                  <button class="btn btn-primary btn-sm fav-reorder" data-id="${item.id}">Reorder</button>
                  <button class="btn-icon fav-remove" data-id="${item.id}" style="color:var(--color-primary)" aria-label="Remove">${icons.heartFill}</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

        section.querySelectorAll('.fav-reorder').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = menuItems.find(i => i.id === parseInt(btn.dataset.id));
                if (item) { addToCart(item); showToast(`${item.name} added to cart`, '🛒'); }
            });
        });

        section.querySelectorAll('.fav-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                toggleFavorite(parseInt(btn.dataset.id));
                showToast('Removed from favorites', '💔');
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
