document.addEventListener("DOMContentLoaded", () => {
    const scrollUpButton = document.querySelector(".scroll-up");
  
    if (scrollUpButton) {
      // 滾動事件
      // 點擊滾動到頂部
      scrollUpButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" }); // 平滑滾動
      });
    }
  });
  