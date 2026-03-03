// Simple reactive store for marketing website navigation
const listeners = new Set();

const state = {
    currentView: 'home', // 'home' only for marketing site
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

// Navigation
export function setView(view) {
    state.currentView = view;
    emit();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
