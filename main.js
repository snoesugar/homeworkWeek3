import './assets/scss/all.scss';

console.log('Hello world');

//加入收藏
const btn = document.querySelector(".favorite");
const btnBheart = document.querySelector(".btnBheart");
const icon = document.querySelector("i");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  if (icon.classList.contains("bi-heart")) {
    icon.classList.remove("bi-heart");
    icon.classList.add("bi-heart-fill");
    btn.innerHTML = '<i class="bi bi-heart-fill mr-24"></i>已收藏';
  } else {
    icon.classList.remove("bi-heart-fill");
    icon.classList.add("bi-heart");
    btn.innerHTML = '<i class="bi bi-heart mr-8"></i>加入收藏';
  }
});

//手機愛心收藏
btnBheart.addEventListener("click", () => {
  btnBheart.classList.toggle("activeBheart");
  if (icon.classList.contains("bi-heart")) {
    icon.classList.remove("bi-heart");
    icon.classList.add("bi-heart-fill");
    btnBheart.innerHTML = '<i class="bi bi-heart-fill b-heart"></i>';
  } else {
    icon.classList.remove("bi-heart-fill");
    icon.classList.add("bi-heart");
    btnBheart.innerHTML = '<i class="bi bi-heart b-heart"></i>';
  }
});

//輪播系統(問GTP的JS寫法>_<")
let likeSwiper;          // 存目前的 Swiper 實例

function mountOrDestroySwiper() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile && !likeSwiper) {
    // 1) 手機 & 尚未建立 ⇒ 建立
    likeSwiper = new Swiper('.like-list.swiper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 1.6 },
        768: { slidesPerView: 2.2 },
      },
    });
  } else if (!isMobile && likeSwiper) {
    // 2) 回到桌機 & 之前有實例 ⇒ 銷毀
    likeSwiper.destroy(true, true);
    likeSwiper = undefined;
  }
}

/* 監聽載入與視窗尺寸改變 */
window.addEventListener('load', mountOrDestroySwiper);
window.addEventListener('resize', mountOrDestroySwiper);
