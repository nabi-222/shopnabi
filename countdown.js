// Thiết lập thời gian kết thúc: 3 ngày sau thời điểm hiện tại
const endTime = new Date();
endTime.setDate(endTime.getDate() + 3);
endTime.setHours(0, 0, 0, 0);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance <= 0) {
    document.getElementById("timer").innerHTML = `
      <div><span>00</span>DAYS</div>
      <div><span>00</span>HRS</div>
      <div><span>00</span>MINS</div>
      <div><span>00</span>SECS</div>
    `;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("timer").innerHTML = `
    <div><span>${String(days).padStart(2, '0')}</span>DAYS</div>
    <div><span>${String(hours).padStart(2, '0')}</span>HRS</div>
    <div><span>${String(minutes).padStart(2, '0')}</span>MINS</div>
    <div><span>${String(seconds).padStart(2, '0')}</span>SECS</div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
