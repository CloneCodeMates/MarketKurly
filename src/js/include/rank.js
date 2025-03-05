includeHtml().then(() => {
    const rankSwiper = document.querySelector('#ranking-products .swiper-container');

    if (!rankSwiper) {
        console.log('rank Swiper 를 찾을 수 없습니다.');
        return;
    }

    new Swiper(rankSwiper, {
        slidesPerView: 'auto',
        slidesPerGroup: 5, // 버튼 클릭 시 이동하는 슬라이드 개수
        navigation: {
            nextEl: '#rank-next-button',
            prevEl: '#rank-prev-button',
        },
    });
});
