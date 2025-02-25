const closeButton = document.getElementById('top-banner__close-button');
const topBanner = document.getElementById('top-banner');

closeButton.addEventListener('click', () => {
    topBanner.style.display = 'none';
});
