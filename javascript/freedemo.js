const accordionHeads = document.querySelectorAll('.accordion-container-head');

accordionHeads.forEach(head => {
    head.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains('accordion-container-head-active');

        // 1. Close ALL other open accordions
        accordionHeads.forEach(otherHead => {
            otherHead.classList.remove('accordion-container-head-active');
            if (otherHead.nextElementSibling) {
                otherHead.nextElementSibling.classList.remove('accordion-container-content-active');
            }
        });

        // 2. Only open the clicked one if it wasn't already open
        // (This allows you to click to open, and click the same one to close)
        if (!isActive) {
            this.classList.add('accordion-container-head-active');
            if (content) {
                content.classList.add('accordion-container-content-active');
            }
        }
    });
});