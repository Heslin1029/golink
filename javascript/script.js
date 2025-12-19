document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('products-dropdown').addEventListener('click', function() {
        var dropdown = document.getElementById('product-drop-down');
        dropdown.classList.toggle('product-drop-down-active');
    });

    document.getElementById('black-backdrop').addEventListener('click', function() {
        var dropdown = document.getElementById('product-drop-down');
        dropdown.classList.toggle('product-drop-down-active');
    });

    document.getElementById('nav-mobile-hamburger').addEventListener('click', function() {
        var navMobileMenu = document.getElementById('nav-mobile-menu');
        navMobileMenu.classList.toggle('nav-mobile-menu-active');
    });
    
    document.getElementById('nav-mobile-menu-close').addEventListener('click', function() {
        var navMobileMenu = document.getElementById('nav-mobile-menu');
        navMobileMenu.classList.toggle('nav-mobile-menu-active');
    });

    document.getElementById('mobile-menu-black-backdrop').addEventListener('click', function() {
        var navMobileMenu = document.getElementById('nav-mobile-menu');
        navMobileMenu.classList.toggle('nav-mobile-menu-active');
    });


    const productsHeader = document.querySelector('.nav-mobile-menu-products-header');
    const productsMenu = document.querySelector('.nav-mobile-menu-products');

    productsHeader.addEventListener('click', () => {
        productsHeader.classList.toggle('nav-mobile-menu-products-header-active')
        productsMenu.classList.toggle('nav-mobile-menu-products-active');
    });


    const backToTopBtn = document.getElementById('back-to-top-button');

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This creates the sliding effect instead of a jump
        });
    });
    
    // Optional: Show the button only after scrolling down 300px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = "1";
            backToTopBtn.style.pointerEvents = "auto";
        } else {
            backToTopBtn.style.opacity = "0";
            backToTopBtn.style.pointerEvents = "none";
        }
    });
});
