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

    function addModal() {
        document.querySelectorAll('.ranking-product__button').forEach((button) => {
            button.classList.add('cart-btn');

            button.addEventListener('click', (event) => {
                event.preventDefault(); // 기본 동작 방지
            });
        });

        document.querySelectorAll('.ranking-product a').forEach((link) => {
            link.classList.add('product-wrapper'); // product-wrapper 클래스 추가
        });

        document.querySelectorAll('.ranking-product__image-wrapper').forEach((wrapper) => {
            wrapper.classList.add('product-image'); // product-wrapper 클래스 추가
        });

        document.querySelectorAll('.ranking-product__title p').forEach((title) => {
            title.classList.add('product-title'); // product-wrapper 클래스 추가
        });
    }

    addModal();
});
