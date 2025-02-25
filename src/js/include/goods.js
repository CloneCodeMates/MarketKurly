includeHtml().then(() => {
    // Swiper wrapper 요소 찾기
    const goodsSwiperContainer = document.querySelector("#goods-swiper .swiper-container");

    if (!goodsSwiperContainer) {
        console.log("goods Swiper 를 찾을 수 없습니다.");
        return;
    }

    // Swiper 초기화
    new Swiper(goodsSwiperContainer, {
        slidesPerView: 'auto', // 한 번에 보이는 슬라이드 개수
        slidesPerGroup: 4, // 버튼 클릭 시 이동하는 슬라이드 개수
        spaceBetween: 18,
        loop: false, // 무한 루프 비활성화
        navigation: {
            nextEl: "#swiper-next-btn",
            prevEl: "#swiper-prev-btn",
        },
    });

    console.log("Goods Swiper 초기화 완료");
}).catch(error => {
    console.log("HTML 포함 중 오류 발생:", error);
});

