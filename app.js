/* Infinity Fitness Lab - Main App */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Initialize Bootstrap Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'rgba(11, 15, 20, 0.95)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'rgba(11, 15, 20, 0.8)';
        }
    });

    // Load Cart Count
    updateCartCount();
});

// Helper: Update Cart Count in Navbar
function updateCartCount() {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
}

// Helper: Format Currency
function formatCurrency(amount) {
    return '$' + parseFloat(amount).toFixed(2);
}
