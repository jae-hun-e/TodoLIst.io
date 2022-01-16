const clock = document.querySelector("h1#clock");

const week = ["월", "화", "수", "목", "금", "토", "일"];
function getClock() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  const day = week[today.getDay()];
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  clock.innerText = `${month}월 ${date}일 ${day}요일 ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
