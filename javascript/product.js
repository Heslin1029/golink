document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Product Features Toggle ---
    const productFeatures = document.querySelectorAll('.product-features');
    productFeatures.forEach(feature => {
        feature.addEventListener('click', function() {
            this.classList.toggle('product-features-active');
        });
    });

    // --- 2. Pricing Accordion Logic ---
    const pricingItems = document.querySelectorAll('.pricing-container-view-more');
    pricingItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all other items
            pricingItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove('pricing-container-view-more-active');
                }
            });
            // Toggle clicked item
            item.classList.toggle('pricing-container-view-more-active');
        });
    });

    // --- 3. Slider Logic ---
    const slider = document.querySelector('.section-core-module-slider');
    const timelines = document.querySelectorAll('.section-core-module-timeline');
    const nextBtn = document.getElementById('core-module-button-next');
    const prevBtn = document.getElementById('core-module-button-prev');
    
    // Safety check: only run if slider exists
    if (!slider || timelines.length === 0) return;

    const totalChildren = timelines.length;
    let currentIndex = 0;

    function updateSlider(index) {
        // Clamp the index to ensure it's within bounds
        if (index < 0) index = 0;
        if (index >= totalChildren) index = totalChildren - 1;
        
        currentIndex = index;

        // Calculate movement
        const percentagePerChild = 100 / totalChildren;
        const translateValue = -(currentIndex * percentagePerChild);
        slider.style.transform = `translateX(${translateValue}%)`;

        // Update active state (ID-based as per your original code)
        const currentActive = document.getElementById('core-module-active');
        if (currentActive) {
            currentActive.removeAttribute('id');
        }
        timelines[currentIndex].id = 'core-module-active';
    }

    // Timeline Click logic
    timelines.forEach((btn, index) => {
        btn.addEventListener('click', () => updateSlider(index));
    });

    // Navigation Buttons
    nextBtn?.addEventListener('click', () => {
        if (currentIndex < totalChildren - 1) {
            updateSlider(currentIndex + 1);
        }
    });

    prevBtn?.addEventListener('click', () => {
        if (currentIndex > 0) {
            updateSlider(currentIndex - 1);
        }
    });
});
