document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const recentProductsList = document.getElementById("recent-products__items");
        const upButton = document.querySelector(".recent-products__btn:first-of-type");
        const downButton = document.querySelector(".recent-products__btn:last-of-type");

        // 버튼과 리스트 요소가 존재하는지 체크
        if (!recentProductsList || !upButton || !downButton) {
            console.error('필요한 요소가 존재하지 않습니다.');
            return;
        }

        const productItems = recentProductsList.children;
        const itemHeight = 84; // 각 아이템 높이 (80px + margin 4px)
        const maxVisibleHeight = 209; // 리스트가 보이는 영역 높이
        let scrollOffset = 0; // 현재 스크롤된 픽셀 값

        // 전체 리스트 높이
        const totalHeight = productItems.length * itemHeight;

        // 초기 버튼 상태 설정
        function updateButtons() {
            if (totalHeight <= maxVisibleHeight) {
                upButton.disabled = true;
                downButton.disabled = true;
            } else {
                upButton.disabled = scrollOffset === 0;
                downButton.disabled = scrollOffset + maxVisibleHeight >= totalHeight;
            }
        }

        // 아래 버튼 클릭 (리스트 위로 이동)
        downButton.addEventListener("click", function () {
            if (scrollOffset + maxVisibleHeight < totalHeight) {
                scrollOffset += itemHeight;
                recentProductsList.style.transform = `translateY(-${scrollOffset}px)`;
                updateButtons();
            }
        });

        // 위 버튼 클릭 (리스트 아래로 이동)
        upButton.addEventListener("click", function () {
            if (scrollOffset > 0) {
                scrollOffset -= itemHeight;
                recentProductsList.style.transform = `translateY(-${scrollOffset}px)`;
                updateButtons();
            }
        });

        // 초기 버튼 상태 업데이트
        updateButtons();
    }, 500); // 500ms 지연
});
