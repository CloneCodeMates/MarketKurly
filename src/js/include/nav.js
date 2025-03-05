includeHtml().then(() => {
    const nav = document.getElementById("nav");
    const searchBox = document.getElementById("header-utility__search");
    const userMenu = document.getElementById("header-utility__user-menu");
    const navExtra = document.getElementById("nav-extra");

    // 검색창과 사용자 메뉴의 원래 부모 저장
    const headerUtility = searchBox.parentElement;

    if (!nav || !searchBox || !userMenu || !headerUtility || !navExtra) {
        console.error("필요한 요소를 찾을 수 없습니다.");
        return;
    }


    // 네비게이션 바의 원래 위치
    const navOffset = nav.offsetTop;

    window.addEventListener("scroll", function () {
        // 현재 스크롤 위치가 네비게이션 바의 위치보다 커지면 고정
        if (window.scrollY > navOffset) {
            nav.classList.add("fixed"); // fixed 클래스 추가

            // 검색창과 사용자 메뉴를 nav 안으로 이동
            navExtra.appendChild(searchBox);
            navExtra.appendChild(userMenu);
        } else {
            nav.classList.remove("fixed"); // fixed 클래스 제거

            // 원래 위치로 복귀
            headerUtility.appendChild(searchBox);
            headerUtility.appendChild(userMenu);
        }
    });
});
