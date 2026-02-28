import { icons } from '../components/icons.js';

export function createInstagram() {
    const section = document.createElement('section');
    section.className = 'section instagram-section';
    section.id = 'instagram';

    const posts = [
        { color: 'hsl(25, 60%, 80%)', emoji: '🥘', caption: 'Masala Dosa perfection' },
        { color: 'hsl(45, 70%, 82%)', emoji: '🍛', caption: 'Paneer Butter Masala' },
        { color: 'hsl(120, 30%, 80%)', emoji: '🥡', caption: 'Veg Manchurian magic' },
        { color: 'hsl(340, 50%, 82%)', emoji: '🍨', caption: 'Sweet Gulab Jamun' },
        { color: 'hsl(200, 40%, 82%)', emoji: '☕', caption: 'Filter Coffee heaven' },
        { color: 'hsl(15, 55%, 78%)', emoji: '🌶️', caption: 'Goli Baje special' },
        { color: 'hsl(50, 65%, 80%)', emoji: '🍽️', caption: 'Weekend thali feast' },
        { color: 'hsl(280, 35%, 82%)', emoji: '🥤', caption: 'Mango Lassi vibes' },
    ];

    section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="section-eyebrow">@padivalspalara</span>
        <h2 class="section-title">Follow Us on Instagram</h2>
        <p class="section-subtitle">See our food, get inspired, order instantly</p>
      </div>

      <div class="insta-grid stagger">
        ${posts.map((p, i) => `
          <div class="insta-card" style="animation-delay:${i * 0.05}s">
            <div class="insta-img" style="background:${p.color}">
              <span class="insta-emoji">${p.emoji}</span>
              <div class="insta-overlay">
                <span class="insta-caption">${p.caption}</span>
                <button class="btn btn-primary btn-sm">Order This</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="insta-cta">
        <a href="https://instagram.com/padivalspalara" target="_blank" class="btn btn-secondary btn-lg">
          ${icons.instagram} Follow @padivalspalara
        </a>
      </div>
    </div>
  `;

    return section;
}
