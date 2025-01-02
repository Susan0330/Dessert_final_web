document.addEventListener("DOMContentLoaded", () => {
    const createAccountBtn = document.getElementById("create-account-btn");

    createAccountBtn.addEventListener("click", (event) => {
        event.preventDefault(); // 阻止默認的表單提交行為
        window.location.href = 'information.html'; // 替換為目標頁面的路徑
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const createAccountBtn = document.getElementById("login-btn");

    createAccountBtn.addEventListener("click", (event) => {
        event.preventDefault(); // 阻止默認的表單提交行為
        window.location.href = 'index.html'; // 替換為目標頁面的路徑
    });
});

$(document).ready(function() {
    // 切換到註冊頁面
    $('#signup').click(function() {
        console.log('Signup button clicked');
        // 將 colorbox 移動到右側
        $('.colorbox').css('transform', 'translateX(80%)');
        // 隱藏登入表單，顯示註冊表單
        $('.signin').addClass('nodisplay');
        $('.signup').removeClass('nodisplay');
    });

    // 切換到登入頁面
    $('#signin').click(function() {
        console.log('Signin button clicked');
        // 將 colorbox 移動回原位
        $('.colorbox').css('transform', 'translateX(0%)');
        // 隱藏註冊表單，顯示登入表單
        $('.signup').addClass('nodisplay');
        $('.signin').removeClass('nodisplay');
    });
});

