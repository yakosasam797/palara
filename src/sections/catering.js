import { icons } from '../components/icons.js';
import { showToast } from '../components/toast.js';

export function createCatering() {
  const section = document.createElement('section');
  section.className = 'section catering-section';
  section.id = 'catering';
  section.style.background = 'var(--color-bg-warm)';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="section-eyebrow">Bulk Orders & Events</span>
        <h2 class="section-title">Catering <span class="accent-serif">Services</span></h2>
        <p class="section-subtitle">Weddings, corporate events, birthdays — we cater pure vegetarian excellence for any occasion</p>
      </div>

      <div class="catering-layout">
        <div class="catering-info animate-fade-up">
          <div class="catering-feature">
            <span class="catering-feature-icon">👨‍🍳</span>
            <div>
              <strong>Expert Chefs</strong>
              <p>Our experienced chefs handle events of 50 to 5,000+ guests</p>
            </div>
          </div>
          <div class="catering-feature">
            <span class="catering-feature-icon">🍽️</span>
            <div>
              <strong>Custom Menus</strong>
              <p>South Indian, North Indian, Chinese — mix & match for your event</p>
            </div>
          </div>
          <div class="catering-feature">
            <span class="catering-feature-icon">🚚</span>
            <div>
              <strong>Full Setup</strong>
              <p>We handle everything — food, service staff, equipment & cleanup</p>
            </div>
          </div>
          <div class="catering-feature">
            <span class="catering-feature-icon">💰</span>
            <div>
              <strong>Competitive Pricing</strong>
              <p>Custom quotes for every budget, starting at ₹250/plate</p>
            </div>
          </div>
        </div>

        <form class="catering-form card animate-fade-up" id="catering-form">
          <div class="card-body">
            <h3 style="margin-bottom:var(--space-6)">Get a Quote</h3>
            <div class="form-group">
              <label class="form-label">Event Type</label>
              <select class="form-input">
                <option>Wedding / Reception</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Festival / Puja</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Date</label>
                <input class="form-input" type="date" />
              </div>
              <div class="form-group">
                <label class="form-label">Guest Count</label>
                <input class="form-input" type="number" placeholder="e.g. 200" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Menu Preference</label>
              <select class="form-input">
                <option>South Indian Special</option>
                <option>North Indian Feast</option>
                <option>Mixed / Custom</option>
                <option>Let Chef Decide</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Your Name</label>
              <input class="form-input" type="text" placeholder="Enter your name" />
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input class="form-input" type="tel" placeholder="+91 98765 43210" />
            </div>
            <div class="form-group">
              <label class="form-label">Additional Requirements</label>
              <textarea class="form-input" placeholder="Any special requests, dietary needs, venue details..."></textarea>
            </div>
            <button class="btn btn-primary btn-lg" type="submit" style="width:100%">
              ${icons.send} Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  section.querySelector('#catering-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Inquiry submitted! We\'ll call you within 24 hours.', '✅');
  });

  return section;
}
