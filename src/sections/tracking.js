import { icons } from '../components/icons.js';
import { setView, setOrderStatus } from '../data/store.js';

const stages = [
    { key: 'placed', label: 'Order Placed', desc: 'Your order has been received', icon: '📋', time: '2 min ago' },
    { key: 'preparing', label: 'Being Prepared', desc: 'Our chefs are cooking your food', icon: '👨‍🍳', time: '~15 min' },
    { key: 'on-the-way', label: 'On the Way', desc: 'Your delivery partner is heading to you', icon: '🛵', time: '~10 min' },
    { key: 'delivered', label: 'Delivered!', desc: 'Enjoy your meal!', icon: '🎉', time: 'Now' },
];

export function createTracking() {
    const wrapper = document.createElement('div');
    wrapper.className = 'tracking-page section';

    let currentStage = 0;
    let intervalId = null;

    function render() {
        wrapper.innerHTML = `
      <div class="container tracking-container">
        <button class="btn btn-ghost" id="tracking-back">${icons.arrowLeft} Back</button>
        
        <div class="tracking-header animate-fade-up">
          <h2>Order Tracking</h2>
          <p class="tracking-order-id">Order #PAL${Math.floor(100000 + Math.random() * 900000)}</p>
        </div>

        <div class="tracking-card card animate-fade-up">
          <div class="card-body">
            <div class="tracking-eta">
              <span class="tracking-eta-icon">${stages[currentStage].icon}</span>
              <div>
                <p class="tracking-eta-label">${stages[currentStage].label}</p>
                <p class="tracking-eta-desc">${stages[currentStage].desc}</p>
              </div>
            </div>

            <div class="tracking-timeline">
              ${stages.map((s, i) => `
                <div class="timeline-step ${i <= currentStage ? 'active' : ''} ${i === currentStage ? 'current' : ''}">
                  <div class="timeline-dot">
                    ${i < currentStage ? icons.check : `<span>${s.icon}</span>`}
                  </div>
                  <div class="timeline-info">
                    <p class="timeline-label">${s.label}</p>
                    <p class="timeline-time">${s.time}</p>
                  </div>
                </div>
                ${i < stages.length - 1 ? `<div class="timeline-line ${i < currentStage ? 'active' : ''}"></div>` : ''}
              `).join('')}
            </div>
          </div>
        </div>

        <div class="tracking-info-card card animate-fade-up" style="animation-delay:0.1s">
          <div class="card-body">
            <h4>Delivery Partner</h4>
            <div class="driver-info">
              <div class="driver-avatar">🧑</div>
              <div>
                <p class="driver-name">Rajesh K.</p>
                <p class="driver-vehicle">Honda Activa • KA 21 AB 1234</p>
              </div>
              <a href="tel:+919876543210" class="btn btn-icon btn-secondary">${icons.phone}</a>
            </div>
          </div>
        </div>

        <div class="tracking-map-placeholder card animate-fade-up" style="animation-delay:0.2s">
          <div class="map-mock">
            <div class="map-pin">📍</div>
            <p>Live map tracking coming soon!</p>
          </div>
        </div>

        ${currentStage >= 3 ? `
          <div class="tracking-done animate-fade-up" style="animation-delay:0.3s">
            <button class="btn btn-primary btn-lg" id="tracking-reorder" style="width:100%">
              Order Again
            </button>
          </div>
        ` : ''}
      </div>
    `;

        wrapper.querySelector('#tracking-back')?.addEventListener('click', () => {
            if (intervalId) clearInterval(intervalId);
            setView('home');
        });

        wrapper.querySelector('#tracking-reorder')?.addEventListener('click', () => {
            if (intervalId) clearInterval(intervalId);
            setView('home');
            setTimeout(() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }), 300);
        });
    }

    // Auto-advance demo
    render();
    intervalId = setInterval(() => {
        if (currentStage < stages.length - 1) {
            currentStage++;
            setOrderStatus(stages[currentStage].key);
            render();
        } else {
            clearInterval(intervalId);
        }
    }, 3000);

    return wrapper;
}
