document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    // The nav-buttons element was removed from HTML, so no need to select it here
    // const navButtons = document.querySelector('.nav-buttons');

    if (hamburger && navMenu) { // Ensure elements exist before adding listener
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // If nav-buttons was present, you'd toggle it here:
            // if (navButtons) { navButtons.classList.toggle('active'); }
            hamburger.classList.toggle('open');
        });
    }

    // JavaScript for current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});