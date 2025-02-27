includeHtml().then(() => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '#event-next-button',
            prevEl: '#event-prev-button',
        },
    });
});
