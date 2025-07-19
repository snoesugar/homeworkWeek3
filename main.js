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

