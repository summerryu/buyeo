

// 두번째 섹션 스크롤 시 등장효과
const cont2Top = document.querySelector("#cont2 .box");
const cont5Top = document.querySelector("#cont2 .box5");

window.onscroll = function(){
  let scTop = window.scrollY;
  if(scTop >= cont2Top.offsetTop ){
    cont2Top.classList.add("on");
  }
  if(scTop >= cont5Top.offsetTop){
    cont5Top.classList.add("on");
  }
  else{
    cont5Top.classList.remove("on");
  }
}



//


const slideBtnsPrev = document.querySelector(".slide_btns .prev_btn a");
const slideBtnsNext = document.querySelector(".slide_btns .next_btn a");

const slideBoxs = document.querySelectorAll(".box3 .slide .slide_wrap .top_box");

let currentIndex = 0;


const slideMenus = document.querySelectorAll(".slide_menus .menu");


slideBtnsPrev.addEventListener("click", (e) => {
  e.preventDefault();
  slideBoxs[currentIndex].classList.remove("on");
  slideMenus[currentIndex].classList.remove("on");
  slideBoxs[currentIndex].style.visibility = "hidden";
  currentIndex = (currentIndex - 1 + slideBoxs.length) % slideBoxs.length;
  slideBoxs[currentIndex].style.visibility = "visible";
  setTimeout(() => {
    slideBoxs[currentIndex].classList.add("on");
    slideMenus[currentIndex].classList.add("on");
  }, 10); 
});

slideBtnsNext.addEventListener("click", (e) => {
  e.preventDefault();
  slideBoxs[currentIndex].classList.remove("on");
  slideMenus[currentIndex].classList.remove("on");
  slideBoxs[currentIndex].style.visibility = "hidden";
  currentIndex = (currentIndex + 1) % slideBoxs.length;
  slideBoxs[currentIndex].style.visibility = "visible";
  setTimeout(() => {
    slideBoxs[currentIndex].classList.add("on");
    slideMenus[currentIndex].classList.add("on");
  }, 10); 
});









// 하단 캐러셀 구간


const slideContainer = document.querySelector('.slide_container');
const slideCarousel1 = slideContainer.querySelector('.slide_carousel');
const slideCarousel2 = slideContainer.querySelector('.slide_carousel2');

configureSlideCarousel(slideCarousel1, -1); // 첫 번째 슬라이드 캐러셀은 오른쪽으로 움직입니다 (-1은 반대 방향)
configureSlideCarousel(slideCarousel2, 1); // 두 번째 슬라이드 캐러셀은 왼쪽으로 움직입니다 (1은 정방향)

function configureSlideCarousel(slideCarousel, direction) {
  const items = slideCarousel.querySelectorAll('.item');
  const slideWidth = 100 / items.length;

  slideCarousel.style.width = `${items.length * slideWidth}%`;
  slideCarousel.style.transform = `translateX(${direction * (items.length * slideWidth)}%)`;

  items.forEach((item) => {
    item.style.width = `${slideWidth}%`;
  });
}

