includeHtml().then(() => {
    const nav = document.getElementById("nav");
    if (!nav) {
        console.error("nav 요소를 찾을 수 없습니다.");
        return;
    }

    // 네비게이션 바의 원래 위치
    const navOffset = nav.offsetTop;

    window.addEventListener("scroll", function () {
        // 현재 스크롤 위치가 네비게이션 바의 위치보다 커지면 고정
        if (window.scrollY > navOffset) {
            nav.classList.add("fixed"); // fixed 클래스 추가
        } else {
            nav.classList.remove("fixed"); // fixed 클래스 제거
        }
    });
});
