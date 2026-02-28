import { icons } from '../components/icons.js';
import { getState, getCartTotal, clearCart, setView, setOrderStatus } from '../data/store.js';
import { outlets } from '../data/menu-data.js';
import { showToast } from '../components/toast.js';

export function createCheckout() {
    const wrapper = document.createElement('div');
    wrapper.className = 'checkout-page';

    let step = 1; // 1=delivery/pickup, 2=payment, 3=confirmation

    function render() {
        const { cart, orderMode, selectedOutlet } = getState();
        const total = getCartTotal();
        const deliveryFee = orderMode === 'delivery' ? 30 : 0;
        const grandTotal = total + deliveryFee;

        wrapper.innerHTML = `
      <div class="container checkout-container">
        <button class="btn btn-ghost checkout-back" id="checkout-back">
          ${icons.arrowLeft} Back ${step > 1 ? '' : 'to Menu'}
        </button>

        <div class="checkout-progress">
          <div class="progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'done' : ''}">
            <div class="progress-dot">${step > 1 ? icons.check : '1'}</div>
            <span>Delivery</span>
          </div>
          <div class="progress-line ${step > 1 ? 'active' : ''}"></div>
          <div class="progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'done' : ''}">
            <div class="progress-dot">${step > 2 ? icons.check : '2'}</div>
            <span>Payment</span>
          </div>
          <div class="progress-line ${step > 2 ? 'active' : ''}"></div>
          <div class="progress-step ${step >= 3 ? 'active' : ''}">
            <div class="progress-dot">3</div>
            <span>Confirm</span>
          </div>
        </div>

        ${step === 1 ? renderDeliveryStep(orderMode) : ''}
        ${step === 2 ? renderPaymentStep(grandTotal) : ''}
        ${step === 3 ? renderConfirmation() : ''}
      </div>
    `;

        // Events
        wrapper.querySelector('#checkout-back')?.addEventListener('click', () => {
            if (step > 1) { step--; render(); }
            else setView('home');
        });

        wrapper.querySelector('#checkout-next')?.addEventListener('click', () => {
            step++;
            if (step === 3) {
                clearCart();
                setOrderStatus('placed');
            }
            render();
        });

        wrapper.querySelector('#checkout-track')?.addEventListener('click', () => {
            setView('tracking');
        });

        wrapper.querySelector('#checkout-home')?.addEventListener('click', () => {
            setView('home');
        });

        // Payment method selection
        wrapper.querySelectorAll('.payment-option').forEach(opt => {
            opt.addEventListener('click', () => {
                wrapper.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
            });
        });
    }

    function renderDeliveryStep(mode) {
        return `
      <div class="checkout-step animate-fade-up">
        <h3>Delivery Details</h3>
        <p style="color:var(--color-text-muted);margin-bottom:var(--space-6)">
          ${mode === 'delivery' ? 'Where should we deliver your food?' : 'Select pickup outlet'}
        </p>
        ${mode === 'delivery' ? `
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input class="form-input" type="text" placeholder="Enter your name" value="Demo User" />
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input class="form-input" type="tel" placeholder="+91 98765 43210" value="+91 98765 43210" />
          </div>
          <div class="form-group">
            <label class="form-label">Delivery Address</label>
            <textarea class="form-input" placeholder="Enter your full address">Near Mahaveer Mall, Main Road, Puttur - 574201</textarea>
          </div>
        ` : `
          <div class="outlet-selector">
            ${outlets.map(o => `
              <label class="outlet-option card">
                <input type="radio" name="outlet" value="${o.id}" ${o.id === 1 ? 'checked' : ''} />
                <div class="card-body">
                  <strong>${o.name}</strong>
                  <p class="outlet-addr">${o.address}</p>
                  <span class="outlet-hours">${icons.clock} ${o.hours}</span>
                </div>
              </label>
            `).join('')}
          </div>
        `}
        <button class="btn btn-primary btn-lg" id="checkout-next" style="width:100%;margin-top:var(--space-6)">
          Continue to Payment
        </button>
      </div>
    `;
    }

    function renderPaymentStep(total) {
        return `
      <div class="checkout-step animate-fade-up">
        <h3>Choose Payment Method</h3>
        <p style="color:var(--color-text-muted);margin-bottom:var(--space-6)">Total: <strong style="color:var(--color-text)">₹${total}</strong></p>
        
        <div class="payment-options">
          <div class="payment-option card selected" data-method="upi">
            <div class="card-body">
              <div class="payment-icon">📱</div>
              <strong>UPI</strong>
              <p>Google Pay, PhonePe, Paytm</p>
            </div>
          </div>
          <div class="payment-option card" data-method="card">
            <div class="card-body">
              <div class="payment-icon">💳</div>
              <strong>Card</strong>
              <p>Credit / Debit Card</p>
            </div>
          </div>
          <div class="payment-option card" data-method="cod">
            <div class="card-body">
              <div class="payment-icon">💰</div>
              <strong>Cash on Delivery</strong>
              <p>Pay when you receive your order</p>
            </div>
          </div>
        </div>

        <button class="btn btn-primary btn-lg" id="checkout-next" style="width:100%;margin-top:var(--space-8)">
          Place Order — ₹${total}
        </button>
      </div>
    `;
    }

    function renderConfirmation() {
        const orderId = 'PAL' + Math.floor(100000 + Math.random() * 900000);
        return `
      <div class="checkout-step checkout-success animate-fade-up">
        <div class="success-icon">🎉</div>
        <h2>Order Placed!</h2>
        <p class="success-msg">Your order <strong>#${orderId}</strong> has been placed successfully!</p>
        <p style="color:var(--color-text-muted)">You'll receive updates on WhatsApp shortly.</p>
        
        <div class="success-actions">
          <button class="btn btn-primary btn-lg" id="checkout-track" style="width:100%">
            Track Your Order
          </button>
          <button class="btn btn-secondary btn-lg" id="checkout-home" style="width:100%">
            Back to Menu
          </button>
        </div>
      </div>
    `;
    }

    render();
    return wrapper;
}
