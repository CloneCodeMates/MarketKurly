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

        // 마우스 드래그 관련 옵션
        simulateTouch: true, // 마우스로 드래그 가능
        grabCursor: true, // 마우스 커서를 손 모양으로 변경

        loop: false, // 무한 루프 비활성화
        navigation: {
            nextEl: "#swiper-next-btn",
            prevEl: "#swiper-prev-btn",
        },
    });

    // 모달 관련 변수
    const modalBackground = document.getElementById("modal-background");
    const cartModal = document.querySelector(".cart-modal");
    const modalImg = cartModal.querySelector(".modal__img");
    const modalTitle = cartModal.querySelector(".modal__title");
    const modalSubtitle = cartModal.querySelector(".modal__subtitle");
    const priceDiscounted = cartModal.querySelector(".price-discounted");
    const priceOriginal = cartModal.querySelector(".price-original");
    const totalPrice = cartModal.querySelector(".total__price");
    const quantityCount = cartModal.querySelector(".quantity-count");
    const decreaseBtn = cartModal.querySelector(".quantity-btn__decrease");
    const increaseBtn = cartModal.querySelector(".quantity-btn__increase");
    const cancelBtn = cartModal.querySelector(".modal__btn:first-of-type");

    let currentQuantity = 1;

    // 모달 열기 함수
    const openModal = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.classList.add("modal-open");
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        // 사이드바가 다른 섹션에서 불러와졌다면 해당 섹션을 찾아서 padding-right 적용
        const sidebar = document.getElementById("sidebar"); // 사이드바 요소 찾기

        if (sidebar) {
            sidebar.style.paddingRight = `${scrollbarWidth}px`;
        }
    };

    // 모달 닫기 함수
    const closeModal = () => {
        document.body.classList.remove("modal-open");
        document.body.style.paddingRight = "";

        // 모달을 닫을 때 사이드바의 padding-right도 원래대로 복구
        const sidebar = document.getElementById("sidebar");

        if (sidebar) {
            sidebar.style.paddingRight = "";
        }

        modalBackground.style.display = "none";
        cartModal.style.display = "none";
    };

    // 모든 'cart-btn' 클릭 시 이벤트 처리
    document.querySelectorAll(".cart-btn").forEach(cartBtn => {
        cartBtn.addEventListener("click", (e) => {
            // 해당 제품 정보 가져오기
            const productWrapper = e.target.closest(".product-wrapper");
            const productImg = productWrapper.querySelector(".product-img img");
            const productName = productWrapper.querySelector(".product-name");
            const salesPrice = productWrapper.querySelector(".sales-price");
            const dimmedPrice = productWrapper.querySelector(".dimmed-price");

            // 모달에 데이터 넣기
            modalImg.src = productImg.src;
            modalTitle.textContent = productName.textContent;
            modalSubtitle.textContent = productName.textContent;
            priceDiscounted.textContent = salesPrice.textContent;
            priceOriginal.textContent = dimmedPrice ? dimmedPrice.textContent : '';

            // 초기 합계 설정
            updateTotalPrice();

            // 모달과 배경 표시
            modalBackground.style.display = "block";
            cartModal.style.display = "block";

            // 모달 열기 함수 호출 (스크롤 방지)
            openModal();
        });
    });

    // 합계 가격 업데이트 함수
    function updateTotalPrice() {
        const price = parseInt(priceDiscounted.textContent.replace('원', '').replace(',', '').trim());
        const total = price * currentQuantity;
        totalPrice.textContent = total.toLocaleString();  // 천의 자리 , 추가
    }

    // 수량 변경 버튼 이벤트
    decreaseBtn.addEventListener("click", () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityCount.textContent = currentQuantity;
            updateTotalPrice();
            checkDecreaseButton();
        }
    });

    increaseBtn.addEventListener("click", () => {
        currentQuantity++;
        quantityCount.textContent = currentQuantity;
        updateTotalPrice();
        checkDecreaseButton();
    });

    // 수량이 1일 때는 decrease 버튼 비활성화
    function checkDecreaseButton() {
        decreaseBtn.disabled = currentQuantity === 1;
    }

    // 취소 버튼 클릭 시 모달 창 닫기
    cancelBtn.addEventListener('click', closeModal);
});