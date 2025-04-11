function startCountdown(durationInSeconds) {
    let timeLeft = durationInSeconds;

    function updateCountdown() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("countdown").textContent = 
            `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        } else {
            document.getElementById("countdown").textContent = "Hết giờ!";
        }
    }

    updateCountdown();
}

// Bắt đầu đếm ngược từ 5 phút (300 giây)
startCountdown(300);