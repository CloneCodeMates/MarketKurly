includeHtml().then(() => {
    const rankSwiper = document.querySelector('#ranking-products .swiper-container');

    if (!rankSwiper) {
        console.log('rank Swiper 를 찾을 수 없습니다.');
        return;
    }

    new Swiper(rankSwiper, {
        slidesPerView: 5, // 한 번에 보이는 슬라이드 개수
        slidesPerGroup: 5, // 버튼 클릭 시 이동하는 슬라이드 개수
        spaceBetween: 25,
        navigation: {
            nextEl: '#rank-next-button',
            prevEl: '#rank-prev-button',
        },
    });
});
