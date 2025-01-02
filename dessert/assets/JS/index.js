let slideIndex = 1; // 初始索引設為 1
let slides = document.getElementsByClassName("singleSlide");

function showSlides() {
    // 隱藏所有幻燈片
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";  // 顯示當前幻燈片
}

// 下一張/上一張 按鈕功能
function plusSlides(n) {
    slideIndex += n;

    if (slideIndex > slides.length) {
        slideIndex = 1; // 如果超過最大索引，回到第一個幻燈片
    } else if (slideIndex < 1) {
        slideIndex = slides.length; // 如果小於1，回到最後一張幻燈片
    }

    showSlides(); // 更新當前幻燈片
}

// 顯示初始圖片
showSlides();

