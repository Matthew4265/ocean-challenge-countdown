// 設置目標時間（2025年5月25日23:59，臺灣時間）
const targetDate = new Date("2025-05-25T23:59:00+08:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // 計算天、小時、分鐘、秒
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // 更新網頁顯示
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // 如果倒計時結束，顯示訊息
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").textContent = "挑戰賽已開始！";
    }
}

// 每秒更新一次
const countdownInterval = setInterval(updateCountdown, 1000);

// 初次執行以避免延遲
updateCountdown();