import { icons } from '../components/icons.js';

export function createLoyalty() {
    const section = document.createElement('section');
    section.className = 'section loyalty-section';
    section.id = 'loyalty';

    const points = 480;
    const nextTier = 1000;
    const progress = (points / nextTier) * 100;

    section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="section-eyebrow">Palara Rewards</span>
        <h2 class="section-title">Earn While You Eat</h2>
        <p class="section-subtitle">Every order earns you reward points. Redeem for free dishes!</p>
      </div>

      <div class="loyalty-card card animate-fade-up">
        <div class="loyalty-card-inner">
          <div class="loyalty-header">
            <div class="loyalty-emoji">🏆</div>
            <div>
              <p class="loyalty-tier">Silver Member</p>
              <p class="loyalty-points"><span class="loyalty-count">${points}</span> points</p>
            </div>
          </div>

          <div class="loyalty-progress">
            <div class="loyalty-progress-bar">
              <div class="loyalty-progress-fill" style="width:${progress}%"></div>
            </div>
            <div class="loyalty-progress-labels">
              <span>Silver</span>
              <span>${nextTier - points} pts to Gold</span>
              <span>Gold</span>
            </div>
          </div>
        </div>
      </div>

      <div class="loyalty-tiers stagger">
        <div class="tier-card card">
          <div class="card-body">
            <div class="tier-icon">🥉</div>
            <h4>Bronze</h4>
            <p class="tier-range">0 – 299 pts</p>
            <ul class="tier-perks">
              <li>${icons.check} 1 point per ₹10 spent</li>
              <li>${icons.check} Birthday surprise</li>
            </ul>
          </div>
        </div>
        <div class="tier-card card tier-active">
          <div class="card-body">
            <div class="tier-icon">🥈</div>
            <h4>Silver</h4>
            <p class="tier-range">300 – 999 pts</p>
            <ul class="tier-perks">
              <li>${icons.check} 2 points per ₹10 spent</li>
              <li>${icons.check} Free delivery</li>
              <li>${icons.check} Priority ordering</li>
            </ul>
          </div>
        </div>
        <div class="tier-card card">
          <div class="card-body">
            <div class="tier-icon">🥇</div>
            <h4>Gold</h4>
            <p class="tier-range">1000+ pts</p>
            <ul class="tier-perks">
              <li>${icons.check} 3 points per ₹10 spent</li>
              <li>${icons.check} Free dessert monthly</li>
              <li>${icons.check} Exclusive menu access</li>
              <li>${icons.check} VIP event invites</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

    return section;
}
