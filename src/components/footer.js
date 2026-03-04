import { icons } from '../components/icons.js';
import { outlets } from '../data/menu-data.js';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  // Faded temple illustration at the bottom of the footer
  footer.innerHTML = `
    <div class="footer-temple-watermark">
      <img src="/From me/temple 03-Photoroom (1).png" alt="" class="footer-temple-img" />
    </div>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/From me/logo-Photoroom.png" alt="Palara" class="footer-logo-img" />
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
            <li><a href="#specialties">Specialties</a></li>
            <li><a href="#heritage">Heritage</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#catering">Catering</a></li>
            <li><a href="#outlets">Outlets</a></li>
          </ul>
        </div>

        <div class="footer-order-col">
          <h4 class="footer-heading">Order Online</h4>
          <div class="footer-platform-links">
            <a href="https://www.zomato.com" target="_blank" rel="noopener" class="footer-platform-link">
              <span class="footer-platform-icon">🟥</span>
              <span>Order on Zomato</span>
              ${icons.externalLink}
            </a>
            <a href="https://www.swiggy.com" target="_blank" rel="noopener" class="footer-platform-link">
              <span class="footer-platform-icon">🟧</span>
              <span>Order on Swiggy</span>
              ${icons.externalLink}
            </a>
          </div>
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
