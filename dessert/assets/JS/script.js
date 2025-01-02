//購物車:金額計算、數據儲存、訂單確認以及即時驗證使用者輸入
// 更新購物車金額
function updateCartTotals() {
    const items = document.querySelectorAll(".item-quantity");//選取購物車內的數量輸入框 (.item-quantity)，透過 querySelectorAll 選取多個相同類別的元素
    let subtotal = 0;//初始化小計變數

    items.forEach(item => {//forEach 迴圈遍歷每個商品    (item.value) 並轉換成整數。
        const quantity = parseInt(item.value);// 取得數量(input中的數值)
        const price = parseInt(item.dataset.price);// 獲取 data-price 屬性的值
        const total = quantity * price;

        subtotal += total;
        item.closest("tr").querySelector(".item-total").textContent = `NT$ ${total}`;
    });

    document.getElementById("subtotal").textContent = `NT$ ${subtotal}`;
    document.getElementById("total").textContent = `NT$ ${subtotal + 60}`;
}

// 儲存購物車數據到 localStorage（在 cart.html 中使用）
function saveCartData() {
    const cartData = Array.from(document.querySelectorAll(".item-quantity")).map(item => ({
        name: item.closest("tr").querySelector("td:nth-child(2)").textContent,
        quantity: parseInt(item.value),
        price: parseInt(item.dataset.price),
        total: parseInt(item.value) * parseInt(item.dataset.price),
        image: item.closest("tr").querySelector("img").src,
    }));
    localStorage.setItem("cartData", JSON.stringify(cartData));
    location.href = "checkout.html";
}

// 加載購物車數據到確認頁面（在 confirmation.html 中使用）
function loadOrderConfirmation() {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    const customerData = JSON.parse(localStorage.getItem("customerData"));

    if (cartData && customerData) {
        // 更新商品列表
        const orderSummaryBody = document.querySelector("#order-summary tbody");
        const orderSummaryFooter = document.querySelector("#order-summary tfoot");
        let subtotal = 0;

        orderSummaryBody.innerHTML = "";
        cartData.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${item.image}" width="100"></td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>NT$ ${item.total}</td>
            `;
            orderSummaryBody.appendChild(row);
            subtotal += item.total;
        });

        // 填充小計、運費和合計
        orderSummaryFooter.innerHTML = `
            <tr><td colspan="3">小計:</td><td>NT$ ${subtotal}</td></tr>
            <tr><td colspan="3">運費:</td><td>NT$ 60</td></tr>
            <tr><td colspan="3">合計:</td><td>NT$ ${subtotal + 60}</td></tr>
        `;

        // 更新客戶資料
        document.getElementById("customer-name").textContent = customerData.name;
        document.getElementById("customer-email").textContent = customerData.email;
        document.getElementById("customer-phone").textContent = customerData.phone;
        document.getElementById("recipient-address").textContent = customerData.address;
        document.getElementById("payment-method").textContent = customerData.payment;
    } else {
        alert("無法載入訂單資料！");
    }
}

// 儲存客戶資料到 localStorage（在 checkout.html 中使用）
function saveCustomerData() {
    const customerData = {
        name: document.getElementById("customer-name").value,
        email: document.getElementById("customer-email").value,
        phone: document.getElementById("customer-phone").value,
        address: document.getElementById("recipient-address").value,
        payment: document.getElementById("payment-method").value,
    };
    localStorage.setItem("customerData", JSON.stringify(customerData));
    location.href = "confirmation.html";
}

// 綁定按鈕和頁面事件
document.addEventListener("DOMContentLoaded", () => {
    if (document.title === "購物車") {
        document.querySelector(".btn-next").addEventListener("click", saveCartData);
        document.querySelectorAll(".item-quantity").forEach(input => {
            input.addEventListener("input", updateCartTotals);
        });
        updateCartTotals();
    } else if (document.title === "填寫資料") {
        document.querySelector(".btn-next").addEventListener("click", saveCustomerData);
    } else if (document.title === "送出訂單") {
        loadOrderConfirmation();
    }
});

//下方了解完了
/*當使用者輸入錯誤格式的電子信箱或電話時，立即顯示錯誤提示，避免提交後才發現錯誤。*/
document.addEventListener("DOMContentLoaded", function () {//addEventListener：為document添加事件監聽器，當指定事件發生時執行特定程式碼
    const emailInput = document.getElementById("customer-email");
    const phoneInput = document.getElementById("customer-phone");
    //DOMContentLoaded：這是一個事件，當HTML文件完全載入且DOM樹建立後觸發，但不需等待CSS或圖片等資源載入完成
    //function () { ... }：匿名函式（沒有名稱的函式），表示當事件發生時，執行大括號內的程式碼。
    //const：宣告常數，表示這個變數的參考（元素）在程式碼執行過程中不會再改變。
    //document.getElementById：透過HTML元素的id屬性來選取元素。
    //emailInput 和 phoneInput：分別代表電子信箱輸入欄位和電話輸入欄位

    // 驗證電子信箱格式
    emailInput.addEventListener("input", () => {//選取的電子信箱輸入框，對該輸入框綁定input事件，每當使用者在輸入框內輸入或刪除字元時觸發，立即執行函式進行即時檢查
                                                //() => { ... }：箭頭函式，功能與一般函式相同，語法較簡潔
        const emailError = document.getElementById("email-error");
        const emailValue = emailInput.value;//取得輸入框內目前的文字內容
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {//如果不包含字串開頭、@、.、字串結尾。簡單來說是:@符號或空格之外的任何字元，且至少要有一個
            /*  ^：表示字串開頭                                 在「@」後面，要求再次輸入「不包含空白和@符號的字元」，且至少要有一個
            [^\s@]+：[]表示字元集合，^在[]內表示「不包含」，\s代表空白字元，@代表@符號  
            +：表示前面字元至少出現一次或多次  @：電子信箱的@符號   
            \.：表示. ，因為.在正則表示式中是特殊符號，需用\轉義  $：表示字串結尾。
            測試emailValue（使用者在電子信箱輸入框中輸入的內容）是否表示正確。
            如果不符合:true*/
            emailError.textContent = "請輸入有效的電子信箱格式";
        } else {
            emailError.textContent = "";//若格式正確，清空錯誤訊息（顯示空字串）
        }
    });

    // 驗證電話號碼格式（假設格式為 10 碼數字）
    phoneInput.addEventListener("input", () => {
        const phoneError = document.getElementById("phone-error");
        const phoneValue = phoneInput.value;
        if (!/^\d{10}$/.test(phoneValue)) {// ^：字串開頭 \d：代表數字（0-9） {10}：出現10次，表示只能接受10位數字 $：字串結尾
            phoneError.textContent = "電話號碼需為 10 碼數字";
        } else {
            phoneError.textContent = "";
        }
    });
});