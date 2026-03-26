document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;
    
   
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'cream') {
        html.classList.add('cream-theme');
        if (themeIcon) themeIcon.textContent = '☀️';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isCream = html.classList.toggle('cream-theme');
            localStorage.setItem('theme', isCream ? 'cream' : 'dark');
            if (themeIcon) themeIcon.textContent = isCream ? '☀️' : '🌙';
        });
    }
});

/**
 * Hamburger Menu Interactivity
 * Handles mobile navigation toggle, animations, and accessibility
 */

(function() {
    'use strict';

    // DOM Elements
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');

    // State
    let isMenuOpen = false;

    /**
     * Toggle the mobile menu open/closed
     */
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Toggle menu visibility
        if (isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    }

    /**
     * Open the mobile menu
     */
    function openMenu() {
        // Slide in menu
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        
        // Animate hamburger to X
        animateToX();
        
        // Update ARIA attributes
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Add backdrop blur effect to nav
        document.querySelector('nav').classList.add('bg-slate-900/95');
    }

    /**
     * Close the mobile menu
     */
    function closeMenu() {
        // Slide out menu
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        
        // Animate X back to hamburger
        animateToHamburger();
        
        // Update ARIA attributes
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Remove backdrop blur effect
        document.querySelector('nav').classList.remove('bg-slate-900/95');
    }

    /**
     * Animate hamburger lines to form an X
     */
    function animateToX() {
        // First line: rotate 45deg and move down
        hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        
        // Second line: fade out
        hamburgerLines[1].style.opacity = '0';
        hamburgerLines[1].style.transform = 'translateX(-10px)';
        
        // Third line: rotate -45deg and move up
        hamburgerLines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    }

    /**
     * Animate X back to hamburger lines
     */
    function animateToHamburger() {
        // Reset all lines
        hamburgerLines.forEach(line => {
            line.style.transform = '';
            line.style.opacity = '1';
        });
    }

    /**
     * Handle navigation link clicks
     * Closes menu and smooth scrolls to section
     */
    function handleNavLinkClick(e) {
        // Close the menu
        closeMenu();
        
        // Allow default anchor behavior (smooth scroll)
        // The scroll-smooth class on html handles the smooth scrolling
    }

    /**
     * Close menu when clicking outside
     */
    function handleClickOutside(e) {
        if (isMenuOpen && 
            !mobileMenu.contains(e.target) && 
            !hamburgerBtn.contains(e.target)) {
            closeMenu();
        }
    }

    /**
     * Close menu on escape key
     */
    function handleEscapeKey(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    }

    /**
     * Handle window resize
     * Close mobile menu if window is resized to desktop
     */
    function handleResize() {
        if (window.innerWidth >= 768 && isMenuOpen) {
            closeMenu();
        }
    }

    // Event Listeners
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }

    // Add click listeners to all mobile nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    // Close menu when clicking outside
    document.addEventListener('click', handleClickOutside);

    // Close menu on escape key
    document.addEventListener('keydown', handleEscapeKey);

    // Handle resize
    window.addEventListener('resize', handleResize);

    // Expose API for external use (optional)
    window.hamburgerMenu = {
        open: openMenu,
        close: closeMenu,
        toggle: toggleMenu,
        isOpen: () => isMenuOpen
    };

})();