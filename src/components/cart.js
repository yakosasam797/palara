import { icons } from './icons.js';
import { getState, getCartTotal, getCartCount, updateQty, removeFromCart, clearCart, subscribe, setView } from '../data/store.js';

export function createCartDrawer() {
    const drawer = document.createElement('div');
    drawer.className = 'cart-drawer';
    drawer.id = 'cart-drawer';

    function render() {
        const { cart, orderMode } = getState();
        const total = getCartTotal();
        const deliveryFee = orderMode === 'delivery' ? 30 : 0;
        const count = getCartCount();

        drawer.innerHTML = `
      <div class="cart-header">
        <h3>Your Cart ${count > 0 ? `(${count})` : ''}</h3>
        <button class="btn-icon cart-close-btn" id="cart-close">${icons.x}</button>
      </div>

      ${cart.length === 0 ? `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <p class="cart-empty-text">Your cart is empty</p>
          <p class="cart-empty-sub">Add delicious items from our menu!</p>
        </div>
      ` : `
        <div class="cart-items">
          ${cart.map(item => `
            <div class="cart-item">
              <div class="cart-item-info">
                <span class="veg-indicator"></span>
                <div>
                  <p class="cart-item-name">${item.name}</p>
                  <p class="cart-item-price">₹${item.price}</p>
                </div>
              </div>
              <div class="cart-item-actions">
                <div class="qty-control">
                  <button class="qty-btn" data-id="${item.id}" data-action="dec">${icons.minus}</button>
                  <span class="qty-value">${item.qty}</span>
                  <button class="qty-btn" data-id="${item.id}" data-action="inc">${icons.plus}</button>
                </div>
                <span class="cart-item-total">₹${item.price * item.qty}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="cart-summary">
          <div class="cart-summary-row">
            <span>Subtotal</span>
            <span>₹${total}</span>
          </div>
          ${orderMode === 'delivery' ? `
            <div class="cart-summary-row">
              <span>Delivery Fee</span>
              <span>₹${deliveryFee}</span>
            </div>
          ` : ''}
          <div class="cart-summary-row cart-total">
            <span>Total</span>
            <span>₹${total + deliveryFee}</span>
          </div>
        </div>

        <div class="cart-actions">
          <button class="btn btn-primary btn-lg cart-checkout-btn" id="cart-checkout">
            Proceed to Checkout — ₹${total + deliveryFee}
          </button>
          <button class="btn btn-ghost btn-sm" id="cart-clear" style="width:100%;margin-top:var(--space-2)">Clear Cart</button>
        </div>
      `}
    `;

        // Events
        drawer.querySelector('#cart-close')?.addEventListener('click', closeCart);

        drawer.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const action = btn.dataset.action;
                const item = cart.find(c => c.id === id);
                if (item) {
                    updateQty(id, action === 'inc' ? item.qty + 1 : item.qty - 1);
                }
            });
        });

        drawer.querySelector('#cart-clear')?.addEventListener('click', () => {
            clearCart();
        });

        drawer.querySelector('#cart-checkout')?.addEventListener('click', () => {
            closeCart();
            setView('checkout');
        });
    }

    function closeCart() {
        drawer.classList.remove('active');
        document.querySelector('.overlay')?.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    render();
    subscribe(() => render());

    return drawer;
}
