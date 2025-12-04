// 오늘 날짜 표시
function formatToday() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}.${m}.${day}`;
}
document.getElementById("today-date").textContent = formatToday();


// ⭐ 탭 전환 코드는 home.html 내부 스크립트에 이미 있으므로 삭제함


// 방명록 작성 기능
const guestForm = document.getElementById("guestbook-form");
const guestList = document.getElementById("guestbook-list");

guestForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("guest-name");
    const msgInput = document.getElementById("guest-message");

    const name = nameInput.value.trim() || "익명";
    const msg = msgInput.value.trim();
    if (!msg) return;

    const today = formatToday();

    const item = document.createElement("div");
    item.className = "guestbook-item";
    item.innerHTML = `
        <div class="guestbook-meta">${name} · ${today}</div>
        <div class="guestbook-text">${msg.replace(/\n/g, "<br>")}</div>
    `;
    guestList.prepend(item);

    nameInput.value = "";
    msgInput.value = "";
});


// ⭐ BGM 기능 (완전 동작)
const bgm = document.getElementById("bgm");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");

window.addEventListener("load", () => {
    bgm.play().catch(() => {});
});

playBtn.addEventListener("click", () => {
    bgm.play();
    playBtn.classList.add("active");
    pauseBtn.classList.remove("active");
});

pauseBtn.addEventListener("click", () => {
    bgm.pause();
    pauseBtn.classList.add("active");
    playBtn.classList.remove("active");
});
