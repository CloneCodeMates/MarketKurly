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

    document.querySelectorAll('#ranking-products .swiper-slide').forEach((slide, index) => {
        const rankingNumber = slide.querySelector('.ranking-number');
        if (rankingNumber) {
            rankingNumber.textContent = index + 1; // 1부터 시작하도록 설정
        }
    });

    document.querySelectorAll('.ranking-product__button').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // 기본 동작 방지
        });
    });
});
