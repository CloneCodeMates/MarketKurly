includeHtml().then(() => {
    function startCountdown() {
        const timeUnits = document.querySelectorAll('#countdown-timer .time-units span');
        let deadline = localStorage.getItem('weekendSaleDeadline');

        if (!deadline) {
            deadline = new Date().getTime() + 48 * 60 * 60 * 1000; // 48시간 설정
            localStorage.setItem('weekendSaleDeadline', deadline);
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
                localStorage.removeItem('weekendSaleDeadline'); // 카운트다운 종료 후 초기화
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
