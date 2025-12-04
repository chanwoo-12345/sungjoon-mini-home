// 오늘 날짜 표시
    function formatToday() {
      const d = new Date();
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return y + "." + m + "." + day;
    }
    document.getElementById("today-date").textContent = formatToday();

    // 메뉴 탭 전환
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll(".content-section");
    const contentTitle = document.querySelector(".content-title");

    const titleMap = {
      home: "홈",
      diary: "다이어리",
      photo: "사진첩",
      guestbook: "방명록"
    };

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        // 메뉴 active
        menuItems.forEach((m) => m.classList.remove("active"));
        item.classList.add("active");

        const target = item.getAttribute("data-target");

        // 컨텐츠 전환
        sections.forEach((section) => {
          section.classList.remove("active");
          if (section.id === target) {
            section.classList.add("active");
          }
        });

        // 상단 제목 변경
        contentTitle.textContent = titleMap[target] || "홈";
      });
    });

    // 방명록 작성 기능 (임시, 새로고침하면 사라짐)
    const guestbookForm = document.getElementById("guestbook-form");
    const guestbookList = document.getElementById("guestbook-list");

    guestbookForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const nameInput = document.getElementById("guest-name");
      const msgInput = document.getElementById("guest-message");

      const name = nameInput.value.trim() || "익명";
      const msg = msgInput.value.trim();
      if (!msg) return;

      const today = formatToday().replace(/\./g, "-");

      const item = document.createElement("div");
      item.className = "guestbook-item";
      item.innerHTML = `
        <div class="guestbook-meta">${name} · ${today}</div>
        <div class="guestbook-text">${msg.replace(/\n/g, "<br>")}</div>
      `;
      guestbookList.prepend(item);

      nameInput.value = "";
      msgInput.value = "";
    });
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
