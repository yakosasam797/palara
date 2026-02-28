import { icons } from '../components/icons.js';
import { outlets } from '../data/menu-data.js';
import { showToast } from '../components/toast.js';

export function createDeliveryZone() {
    const section = document.createElement('section');
    section.className = 'section delivery-section';
    section.id = 'locations';
    section.style.background = 'var(--color-bg-warm)';

    section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="section-eyebrow">Delivery Zones</span>
        <h2 class="section-title">Are We In Your Area?</h2>
        <p class="section-subtitle">We deliver across Puttur and surrounding areas</p>
      </div>

      <div class="delivery-check card animate-fade-up">
        <div class="card-body">
          <div class="delivery-input-row">
            <span class="delivery-pin-icon">${icons.mapPin}</span>
            <input class="form-input delivery-pincode" type="text" placeholder="Enter your pincode (e.g. 574201)" id="pincode-input" maxlength="6" />
            <button class="btn btn-primary" id="check-pincode">Check</button>
          </div>
          <div class="delivery-result" id="delivery-result"></div>
        </div>
      </div>

      <div class="outlets-grid stagger">
        ${outlets.map(o => `
          <div class="outlet-card card">
            <div class="card-body">
              <div class="outlet-card-header">
                <div class="outlet-icon">${icons.store}</div>
                <h4>${o.name}</h4>
              </div>
              <p class="outlet-address">${icons.mapPin} ${o.address}</p>
              <p class="outlet-hours">${icons.clock} ${o.hours}</p>
              <p class="outlet-phone">${icons.phone} ${o.phone}</p>
              <a href="tel:${o.phone.replace(/\s/g, '')}" class="btn btn-secondary btn-sm" style="width:100%;margin-top:var(--space-4)">
                ${icons.phone} Call Now
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

    section.querySelector('#check-pincode')?.addEventListener('click', () => {
        const input = section.querySelector('#pincode-input');
        const result = section.querySelector('#delivery-result');
        const pin = input?.value.trim();

        if (!pin || pin.length !== 6) {
            result.innerHTML = `<p class="delivery-no">⚠️ Please enter a valid 6-digit pincode</p>`;
            return;
        }

        if (pin.startsWith('574')) {
            result.innerHTML = `
        <div class="delivery-yes animate-fade-up">
          <span class="delivery-check-icon">🎉</span>
          <div>
            <strong>Yes, we deliver to your area!</strong>
            <p>Estimated delivery: 25-40 minutes. Free delivery for orders above ₹300!</p>
          </div>
        </div>
      `;
            showToast('Great news! We deliver to your area.', '🎉');
        } else {
            result.innerHTML = `
        <div class="delivery-no animate-fade-up">
          <span>😔</span>
          <div>
            <strong>We don't deliver here yet</strong>
            <p>But you can always order for pickup from any of our 3 outlets!</p>
          </div>
        </div>
      `;
        }
    });

    return section;
}
