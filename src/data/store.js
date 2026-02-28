// Simple reactive store for cart, favorites, and order state
const listeners = new Set();

const state = {
    cart: [],
    favorites: [1, 3, 19, 27], // pre-populated for demo
    orderMode: 'delivery', // 'delivery' | 'pickup'
    selectedOutlet: 1,
    currentView: 'home', // 'home' | 'checkout' | 'tracking'
    orderStatus: null, // null | 'placed' | 'preparing' | 'on-the-way' | 'delivered'
    loyaltyPoints: 480,
    loyaltyTier: 'Silver',
};

export function getState() {
    return state;
}

function emit() {
    listeners.forEach(fn => fn({ ...state }));
}

export function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

// Cart actions
export function addToCart(item) {
    const existing = state.cart.find(c => c.id === item.id);
    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.push({ ...item, qty: 1 });
    }
    emit();
}

export function removeFromCart(itemId) {
    state.cart = state.cart.filter(c => c.id !== itemId);
    emit();
}

export function updateQty(itemId, qty) {
    if (qty <= 0) { removeFromCart(itemId); return; }
    const item = state.cart.find(c => c.id === itemId);
    if (item) item.qty = qty;
    emit();
}

export function clearCart() {
    state.cart = [];
    emit();
}

export function getCartTotal() {
    return state.cart.reduce((sum, c) => sum + c.price * c.qty, 0);
}

export function getCartCount() {
    return state.cart.reduce((sum, c) => sum + c.qty, 0);
}

// Favorites
export function toggleFavorite(itemId) {
    const idx = state.favorites.indexOf(itemId);
    if (idx > -1) state.favorites.splice(idx, 1);
    else state.favorites.push(itemId);
    emit();
}

export function isFavorite(itemId) {
    return state.favorites.includes(itemId);
}

// Order mode
export function setOrderMode(mode) {
    state.orderMode = mode;
    emit();
}

export function setSelectedOutlet(id) {
    state.selectedOutlet = id;
    emit();
}

// Navigation
export function setView(view) {
    state.currentView = view;
    emit();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Order tracking
export function setOrderStatus(status) {
    state.orderStatus = status;
    emit();
}
