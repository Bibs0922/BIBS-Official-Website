document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile navigation
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle dropdowns
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');

        dropdownLink.addEventListener('click', (e) => {
            // On mobile, prevent link navigation and toggle the dropdown
            if (window.innerWidth <= 768) { 
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile nav and dropdowns when clicking outside
    window.addEventListener('click', (e) => {
        // Close mobile nav if click is outside the nav and toggle button
        if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }

        // Close any open dropdowns if the click is outside
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('active') && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
});