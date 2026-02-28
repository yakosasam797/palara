import { icons } from '../components/icons.js';
import { outlets } from '../data/menu-data.js';

export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-icon" style="font-size:1.5rem">🍃</span>
            <div>
              <span class="logo-brand" style="color:var(--color-text-on-dark)">Padival's</span>
              <span class="logo-name" style="color:var(--color-primary-light)">PALARA</span>
            </div>
          </div>
          <p class="footer-tagline">Pure Vegetarian. Pure Delicious.<br/>Serving happiness since 2020.</p>
          <div class="footer-social">
            <a href="https://instagram.com/padivalspalara" target="_blank" class="social-link" aria-label="Instagram">${icons.instagram}</a>
            <a href="https://wa.me/919876543210" target="_blank" class="social-link" aria-label="WhatsApp">${icons.whatsapp}</a>
          </div>
        </div>

        <div class="footer-outlets">
          <h4 class="footer-heading">Our Outlets</h4>
          ${outlets.map(o => `
            <div class="footer-outlet">
              <p class="footer-outlet-name">${o.name}</p>
              <p class="footer-outlet-addr">${o.address}</p>
              <p class="footer-outlet-hours">${icons.clock} ${o.hours}</p>
            </div>
          `).join('')}
        </div>

        <div class="footer-links-col">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#favorites">Favorites</a></li>
            <li><a href="#loyalty">Rewards</a></li>
            <li><a href="#catering">Catering</a></li>
            <li><a href="#locations">Delivery Zones</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 Padival's Palara — A Unit of Mahaveer Ventures. All rights reserved.</p>
        <p class="footer-powered">Crafted with ❤️ by <strong>Arovida Technologies</strong></p>
      </div>
    </div>
  `;
    return footer;
}
