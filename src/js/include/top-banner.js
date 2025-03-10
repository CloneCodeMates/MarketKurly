includeHtml().then(() => {
    const closeButton = document.getElementById('top-banner__close-button');
    const topBanner = document.getElementById('top-banner');

    closeButton.addEventListener('click', () => {
        // hide 클래스를 추가하여 top-banner 위로 사라짐
        topBanner.classList.add('hide');

        // 트랜지션이 끝난 후 display를 none으로 변경 (공간 차지 방지)
        setTimeout(() => {
            topBanner.style.display = 'none';
        }, 400); // 0.4초 후 실행
    });
});
