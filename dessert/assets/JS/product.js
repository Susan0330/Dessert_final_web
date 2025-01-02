
document.addEventListener("DOMContentLoaded", () => {
  // 現有的功能 (例如購物車和其他功能)
  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");
  const quantityInput = document.getElementById("quantity");

  decreaseBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value, 10);
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
    }
  });

  increaseBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value, 10);
    quantityInput.value = quantity + 1;
  });

  quantityInput.addEventListener("input", () => {
    if (quantityInput.value < 1) {
      quantityInput.value = 1; // 禁止輸入小於 1
    }
  });

  // 原始程式碼的其他功能 (例如輪播圖、添加到購物車等)
  const addToCartBtn = document.querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", () => {
    const quantity = quantityInput.value; // 從 input 取得最新數量
    alert(`成功將 ${quantity} 個商品加入購物車! 感謝您的購買!`);
  });

  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const progressBar = document.querySelector(".progress");

  const items = [
    { image: "商品圖片1", name: "商品名稱1", price: "$100" },
    { image: "商品圖片2", name: "商品名稱2", price: "$200" },
    { image: "商品圖片3", name: "商品名稱3", price: "$300" },
    { image: "商品圖片4", name: "商品名稱4", price: "$400" },
    { image: "商品圖片5", name: "商品名稱5", price: "$500" },
    { image: "商品圖片6", name: "商品名稱6", price: "$600" },
  ];

  let currentIndex = 0;
  const itemsPerView = 3;

  const updateProgressBar = () => {
    const totalGroups = Math.ceil(items.length / itemsPerView);
    const currentGroup = Math.floor(currentIndex / itemsPerView) + 1;
    progressBar.style.width = `${(currentGroup / totalGroups) * 100}%`;
  };

  const updateCarousel = () => {
    const totalWidth = carousel.scrollWidth;
    const itemWidth = totalWidth / items.length;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    updateProgressBar();
  };

  updateCarousel();

  prevBtn.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = items.length - itemsPerView;
    } else {
      currentIndex = (currentIndex - itemsPerView + items.length) % items.length;
    }
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex >= items.length - itemsPerView) {
      currentIndex = 0;
    } else {
      currentIndex = (currentIndex + itemsPerView) % items.length;
    }
    updateCarousel();
  });
    

    // 提交評論後清空星等和評論框
    const stars = document.querySelectorAll(".rating input");
    const reviewText = document.getElementById("review-text");
    const submitReviewButton = document.getElementById("submit-review");
  
    submitReviewButton.addEventListener("click", () => {
      console.log("按鈕被點擊！");
      const selectedRating = Array.from(stars).find(star => star.checked);
      if (!selectedRating) {
        alert("請選擇星等！");
        return;
      }
      if (reviewText.value.trim() === "") {
        alert("請填寫評論內容！");
        return;
      }
  
      // 清空星等和評論框
      stars.forEach(star => (star.checked = false));
      reviewText.value = "";
  
      // 跳出感謝視窗
      alert("感謝您的評論！");
    });

    
  });
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
  


      
