includeHtml().then(() => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
        loop: true, // 슬라이드 무한 반복
        navigation: {
            nextEl: '#event-next-button',
            prevEl: '#event-prev-button',
        },
        pagination: {
            el: '#event-page-index',
            type: 'custom',
            renderCustom: (swiper, current, total) => {
                return `${current} / ${total}`; // 커스터마이즈된 페이지 번호 형식
            },
        },
        autoplay: {
            delay: 3000, // 3초마다 슬라이드 자동 전환
            disableOnInteraction: false,
        },
        on: {
            init: () => {
                swiper.update();
            },
        },
    });
});
