document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded 이벤트 발생!");  // 이벤트 발생 확인용 로그

    includeHtml().then(() => {
        console.log("HTML 파일들이 모두 로드되었습니다!");

        // Swiper wrapper 요소 찾기
        const swiperWrapper = document.querySelector(".aside-swiper .swiper-wrapper");
        console.log("swiperWrapper:", swiperWrapper);  // swiperWrapper가 제대로 선택되는지 확인

        if (!swiperWrapper) {
            console.log("swiperWrapper를 찾을 수 없습니다.");
            return;
        }

        // 최근 본 상품 데이터 (절대경로)
        let viewItems = [
            { id: "product1", thumb: "/src/assets/images/product-img1.jpeg" },
            { id: "product2", thumb: "/src/assets/images/product-img2.jpeg" },
            { id: "product3", thumb: "/src/assets/images/product-img3.jpeg" },
            { id: "product4", thumb: "/src/assets/images/product-img4.jpeg" },
        ];

        // localStorage에 저장
        localStorage.setItem("viewitems", JSON.stringify(viewItems));

        // localStorage에서 데이터 가져오기
        const items = JSON.parse(localStorage.getItem("viewitems")) || [];

        // 동적으로 Swiper 슬라이드 추가
        items.forEach(value => {
            let slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            slide.innerHTML = `<a href="#"><img src="${value.thumb}" alt="최근 본 상품 이미지" class="recent-products__img" /></a>`;
            swiperWrapper.appendChild(slide);
            console.log("슬라이드 추가됨:", slide);
        });

        // Swiper 초기화
        function initializeSwiper() {
            console.log("Swiper 초기화 시작");
            new Swiper(".aside-swiper", {
                direction: "vertical", // 세로 슬라이드
                slidesPerView: "auto", // 한 번에 보이는 슬라이드 개수
                slidesPerGroup: 1, // 한 번에 이동하는 슬라이드 개수
                loop: false, // 무한 루프 비활성화
                navigation: {
                    nextEl: ".recent-products__btn:last-of-type",
                    prevEl: ".recent-products__btn:first-of-type",
                },
            });
            console.log("Swiper 초기화 완료");
        }

        // Swiper 초기화 실행 (1초 딜레이)
        setTimeout(initializeSwiper, 1000);
    });
});
