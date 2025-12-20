document.querySelectorAll('.pricing-container-view-more').forEach(item => {
    item.addEventListener('click', () => {
        // 1. Get all elements with that class
        const allItems = document.querySelectorAll('.pricing-container-view-more');

        // 2. Remove the active class from every item
        allItems.forEach(el => {
            if (el !== item) {
                el.classList.remove('pricing-container-view-more-active');
            }
        });
        
        // 3. Toggle the active class on the clicked item
        item.classList.toggle('pricing-container-view-more-active');
    });
    
    
    const slider = document.querySelector('.section-core-module-slider');
    const buttons = document.querySelectorAll('.section-core-module-timeline');
    const children = slider.children;
    const totalChildren = children.length;
    const nextBtn = document.getElementById('core-module-button-next');
    const prevBtn = document.getElementById('core-module-button-prev');


    function updateSlider(targetIndex) {
        const totalChildren = buttons.length;
        
        // Calculate percentage: each child is (100 / totalChildren)% of the slider's total width
        // We move -100% per index to slide to the right
        const movePercentage = -(targetIndex * (100 / totalChildren));
        
        slider.style.transform = `translateX(${movePercentage}%)`;

        // Update ID for active state
        document.getElementById('core-module-active')?.removeAttribute('id');
        buttons[targetIndex].id = 'core-module-active';
    }

    // Click logic for timeline items
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => updateSlider(index));
    });

      

    let currentIndex = 0;

    function moveSlider(index) {
        // Ensure the index stays within bounds (0 to total-1)
        if (index < 0) index = 0;
        if (index >= totalChildren) index = totalChildren - 1;

        currentIndex = index;

        // The shift value is the (100 / total number of children)
        const percentagePerChild = 100 / totalChildren;
        const translateValue = -(currentIndex * percentagePerChild);

        slider.style.transform = `translateX(${translateValue}%)`;
        
        // Update active ID logic
        document.getElementById('core-module-active')?.removeAttribute('id');
        // Assuming the buttons/timeline elements correspond to the slider index
        const timelines = document.querySelectorAll('.section-core-module-timeline');
        if(timelines[currentIndex]) {
            timelines[currentIndex].id = 'core-module-active';
        }
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalChildren - 1) {
            moveSlider(currentIndex + 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveSlider(currentIndex - 1);
        }
    });


    const productFeatures = document.querySelectorAll('.product-features');

productFeatures.forEach(feature => {
    feature.addEventListener('click', function() {
        this.classList.toggle('product-features-active');
    });
});
});
