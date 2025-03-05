includeHtml().then(() => {
    const timeUnits = document.querySelectorAll('#countdown-timer .time-units span');

    // 카운트다운 타이머 업데이트 함수
    function updateCountdownTimer() {
        let now = new Date(); // 현재 시간
        let deadline = new Date(); // 마감 시간을 저장할 객체 생성

        const today = now.getDay(); // 0(일요일) ~ 6(토요일)
        const isWeekend = today === 0 || today === 6; // 주말 여부
        const countdownHours = isWeekend ? 48 : 24; // 주말이면 48시간, 평일이면 24시간

        // 마감 시간을 설정 (오늘의 24:00:00 (자정) 또는 48시간 후 자정)
        deadline.setHours(countdownHours, 0, 0, 0);

        // 남은 시간 계산 (밀리초 단위)
        let remainingTime = Math.max(deadline.getTime() - now.getTime(), 0); // 음수 값 방지

        // 남은 시간을 '시:분:초' 단위로 변환
        let hours = String(Math.floor(remainingTime / 3600000)).padStart(2, '0'); // 시간
        let minutes = String(Math.floor((remainingTime % 3600000) / 60000)).padStart(2, '0'); // 분
        let seconds = String(Math.floor((remainingTime % 60000) / 1000)).padStart(2, '0'); // 초

        // 타이머 표시
        timeUnits[0].textContent = hours;
        timeUnits[1].textContent = minutes;
        timeUnits[2].textContent = seconds;
    }

    // 카운트다운 타이머 시작
    updateCountdownTimer();
    // 1초 간격으로 타이머 갱신
    setInterval(updateCountdownTimer, 1000);
});
