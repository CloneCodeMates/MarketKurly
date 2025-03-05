includeHtml().then(() => {
    function startCountdown() {
        const timeUnits = document.querySelectorAll('#countdown-timer .time-units span');
        let deadline = localStorage.getItem('saleDeadline');

        const now = new Date();
        const today = now.getDate(); // 0(일요일) ~ 6(토요일)
        const isWeekend = today === 0 || today === 6; // 주말 여부
        const countdownHours = isWeekend ? 48 : 24; // 주말이면 48시간, 평일이면 24시간

        if (!deadline) {
            deadline = now.getTime() + countdownHours * 60 * 60 * 1000; // 시간 설정
            localStorage.setItem('saleDeadline', deadline);
        } else {
            deadline = parseInt(deadline, 10);
        }

        function updateCountdown() {
            const now = new Date().getTime();
            const remainingTime = deadline - now;

            if (remainingTime <= 0) {
                timeUnits[0].textContent = '00';
                timeUnits[1].textContent = '00';
                timeUnits[2].textContent = '00';
                clearInterval(timer);
                localStorage.removeItem('saleDeadline'); // 카운트다운 종료 후 초기화
                return;
            }

            const hours = Math.floor(remainingTime / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
            const seconds = Math.floor((remainingTime / 1000) % 60);

            timeUnits[0].textContent = String(hours).padStart(2, '0'); // 두 자리로 표시
            timeUnits[1].textContent = String(minutes).padStart(2, '0');
            timeUnits[2].textContent = String(seconds).padStart(2, '0');
        }
        const timer = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    startCountdown();
});
