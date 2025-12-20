document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PRODUCT FEATURES (Single Active)
    const productFeatures = document.querySelectorAll('.product-features');
    productFeatures.forEach(feature => {
        feature.addEventListener('click', function() {
            const isActive = this.classList.contains('product-features-active');
            productFeatures.forEach(el => el.classList.remove('product-features-active'));
            if (!isActive) this.classList.add('product-features-active');
        });
    });

    // 2. PRICING ACCORDION
    const pricingItems = document.querySelectorAll('.pricing-container-view-more');
    pricingItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('pricing-container-view-more-active');
            pricingItems.forEach(el => el.classList.remove('pricing-container-view-more-active'));
            if (!isActive) item.classList.add('pricing-container-view-more-active');
        });
    });

    // 3. SLIDER LOGIC
    const slider = document.querySelector('.section-core-module-slider');
    const timelines = document.querySelectorAll('.section-core-module-timeline');
    const nextBtn = document.getElementById('core-module-button-next');
    const prevBtn = document.getElementById('core-module-button-prev');
    
    if (slider && timelines.length > 0) {
        let currentIndex = 0;
        const totalChildren = timelines.length;

        function updateSlider(index) {
            currentIndex = Math.max(0, Math.min(index, totalChildren - 1));
            const movePercentage = -(currentIndex * (100 / totalChildren));
            
            slider.style.transform = `translateX(${movePercentage}%)`;

            // Handle ID-based active state
            document.getElementById('core-module-active')?.removeAttribute('id');
            timelines[currentIndex].id = 'core-module-active';
        }

        timelines.forEach((btn, index) => {
            btn.addEventListener('click', () => updateSlider(index));
        });

        nextBtn?.addEventListener('click', () => updateSlider(currentIndex + 1));
        prevBtn?.addEventListener('click', () => updateSlider(currentIndex - 1));
    }
});
