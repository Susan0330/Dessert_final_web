document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // 当滚动距离超过 50px
            navbar.classList.add('navbar-transparent');
        } else {
            navbar.classList.remove('navbar-transparent');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript 已成功載入！");

    // 選擇元素
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    const updateBtn = document.getElementById("update-btn");
    const passwordInput = document.getElementById("password");
    const passwordIcon = document.getElementById("password-icon");
    const newPasswordInput = document.getElementById("new-password"); // 新密碼輸入框

    // Tab 切換功能
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active-tab"));
            contents.forEach(content => content.classList.add("hidden"));
            button.classList.add("active-tab");
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).classList.remove("hidden");
        });
    });

    // 更新資料按鈕
    updateBtn.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const birthday = document.getElementById("birthday").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const username = document.getElementById("username").value;
        const password = passwordInput.value;
        const newPassword = newPasswordInput.value; // 獲取新密碼的值

        console.log("更新的會員資料如下：");
        console.log(`姓名: ${name}`);
        console.log(`生日: ${birthday}`);
        console.log(`電話: ${phone}`);
        console.log(`郵箱: ${email}`);
        console.log(`地址: ${address}`);
        console.log(`帳號: ${username}`);
        console.log(`密碼: ${password}`);
        if (newPassword) {
            console.log(`新密碼: ${newPassword}`);
            // 如果新密碼有輸入，更新密碼欄位的值
            passwordInput.value = newPassword;
            alert("會員資料已成功更新，密碼已變更！");
            newPasswordInput.value = ""; // 清空新密碼輸入框
        } else {
            alert("會員資料已成功更新，但未輸入新密碼！");
        }
    });

    // 顯示/隱藏密碼功能
    document.getElementById("toggle-password").addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        passwordIcon.src = isPassword ? "../assets/images/open.png" : "../assets/images/close.png";
        passwordIcon.alt = isPassword ? "顯示密碼" : "隱藏密碼";
    });
});
