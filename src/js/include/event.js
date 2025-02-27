includeHtml().then(() => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
        loop: true, // 슬라이드를 무한 반복하도록 설정
        navigation: {
            nextEl: '#event-next-button',
            prevEl: '#event-prev-button',
        },
        pagination: {
            el: '#event-page-index',
            type: 'custom', // 커스터마이즈된 페이지 번호 형식을 사용
            renderCustom: function (swiper, current, total) {
                return `${current} / ${total}`; // 커스터마이즈된 페이지 번호 형식
            },
        },
        on: {
            // Swiper 초기화 시 호출되는 함수
            init: function () {
                updatePageIndex(swiper); // 초기 페이지 번호 업데이트
            },
        },
    });
});
