document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    // REMOVED: The line below is deleted as the element no longer exists
    // const navButtons = document.querySelector('.nav-buttons');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // REMOVED: The line below is deleted as it's no longer needed
        // if (navButtons) { navButtons.classList.toggle('active'); }
        hamburger.classList.toggle('open');
    });
});

// In Script.js, inside your DOMContentLoaded listener:
document.addEventListener('DOMContentLoaded', () => {
    // ... (your existing hamburger menu JS) ...

    // JavaScript for current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});