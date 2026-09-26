// 活动倒计时（国庆限时活动，活动截止时间：2026-10-01）
const eventDate = new Date("2026-10-01 00:00:00").getTime();

function updateEventCountdown() {
  const distance = eventDate - new Date().getTime();

  const eventText = document.getElementById("eventText");
  const eventBox = document.getElementById("eventBox");
  const eventFinished = document.getElementById("eventFinished");

  // 活动已结束：隐藏倒计时，显示结束画面
  if (distance <= 0) {
    eventText.style.display = "none";
    document.getElementById("countdown").style.display = "none";
    eventBox.classList.add("finished");
    eventFinished.style.display = "flex";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updateEventCountdown();
setInterval(updateEventCountdown, 1000);
