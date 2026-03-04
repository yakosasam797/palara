import { icons } from '../components/icons.js';
import { outlets } from '../data/menu-data.js';

export function createOutlets() {
  const section = document.createElement('section');
  section.className = 'section outlets-section';
  section.id = 'outlets';

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">Visit Us</span>
        <h2 class="section-title">Our <span class="accent-serif">Outlets</span></h2>
        <p class="section-subtitle">3 locations across Puttur — find one near you</p>
      </div>

      <div class="outlets-grid stagger">
        ${outlets.map((o, i) => `
          <div class="outlet-card card reveal" style="transition-delay:${i * 0.1}s">
            <div class="card-body">
              <div class="outlet-card-header">
                <div class="outlet-icon-wrap">
                  <span class="outlet-number">${i + 1}</span>
                </div>
                <h4 class="outlet-name">${o.name}</h4>
              </div>
              <div class="outlet-details">
                <p class="outlet-detail">
                  <span class="outlet-detail-icon">${icons.mapPin}</span>
                  <span>${o.address}</span>
                </p>
                <p class="outlet-detail">
                  <span class="outlet-detail-icon">${icons.clock}</span>
                  <span>${o.hours}</span>
                </p>
                <p class="outlet-detail">
                  <span class="outlet-detail-icon">${icons.phone}</span>
                  <span>${o.phone}</span>
                </p>
              </div>
              <div class="outlet-actions">
                <a href="tel:${o.phone.replace(/\s/g, '')}" class="btn btn-secondary btn-sm outlet-action-btn">
                  ${icons.phone} Call Now
                </a>
                <a href="https://maps.google.com/?q=Padival's+Palara+${encodeURIComponent(o.name)}+Puttur" target="_blank" rel="noopener" class="btn btn-secondary btn-sm outlet-action-btn">
                  ${icons.navigation} Directions
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Order Online CTA within outlets -->
      <div class="outlets-order-cta reveal">
        <div class="outlets-order-inner">
          <div class="outlets-order-text">
            <h3>Can't visit? Order from home!</h3>
            <p>Get your Palara favourites delivered via Swiggy or Zomato</p>
          </div>
          <div class="outlets-order-buttons">
            <a href="https://www.zomato.com" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
              Zomato
            </a>
            <a href="https://www.swiggy.com" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
              Swiggy
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
