document.querySelectorAll('.pricing-container-view-more').forEach(item => {
    const btnPremise = document.getElementById('pricing-on-premise');
    const btnCloud = document.getElementById('pricing-cloud');

    const wrapPremise = document.querySelector('.pricing-containers-parent-wrap-premise');
    const wrapCloud = document.querySelector('.pricing-containers-parent-wrap-cloud');

    // Function to handle the switch
    function togglePricing(selected) {
        if (selected === 'premise') {
            // Button Classes
            btnPremise.classList.add('button-black');
            btnPremise.classList.remove('button-black-unactive');
            
            btnCloud.classList.add('button-black-unactive');
            btnCloud.classList.remove('button-black');

            // Container Visibility
            wrapPremise.style.display = 'flex';
            wrapCloud.style.display = 'none';
        } else {
            // Button Classes
            btnCloud.classList.add('button-black');
            btnCloud.classList.remove('button-black-unactive');
            
            btnPremise.classList.add('button-black-unactive');
            btnPremise.classList.remove('button-black');

            // Container Visibility
            wrapCloud.style.display = 'flex';
            wrapPremise.style.display = 'none';
        }
    }

    // Event Listeners
    btnPremise.addEventListener('click', () => togglePricing('premise'));
    btnCloud.addEventListener('click', () => togglePricing('cloud'));
});