
    
const gnbMenus = document.querySelectorAll(".center .gnb > li");
const subMenus = document.querySelectorAll(".gnb li ul");

console.log(gnbMenus);

for (let i = 0; i < gnbMenus.length; i++) {
  gnbMenus[i].onmouseenter = function () {
    for (let j = 0; j < subMenus.length; j++) {
      subMenus[j].classList.remove("on");
    }
    subMenus[i].classList.add("on");
  };

  gnbMenus[i].onmouseleave = function () {
    let isSubMenuHovered = false;
    subMenus[i].onmouseenter = function () {
      isSubMenuHovered = true;
    };
    subMenus[i].onmouseleave = function () {
      isSubMenuHovered = false;
      subMenus[i].classList.remove("on");
    };

    //서브메뉴에서 마우스를 뗀 경우에만 서브메뉴를 숨김
    setTimeout(function () {
      if (!isSubMenuHovered) {
        subMenus[i].classList.remove("on");
      }
    }, 100);
  };
}

const sub_gnb = document.querySelector(".sub_gnb_on");
const main_header = document.querySelector("#header");
const m_gnb = document.querySelector("#m_header")
const m_gnb_menus = document.querySelectorAll("#m_header .gnb > li");
const closeBtn = document.querySelector(".closeBtn");
const body = document.querySelector("body");

console.log(m_gnb_menus);
sub_gnb.addEventListener("click", (e) =>{
  e.preventDefault(); 
  m_gnb.classList.add("on");
})

closeBtn.addEventListener("click", (e) =>{
  e.preventDefault(); 
  m_gnb.classList.remove("on");
})


for(let i=0; i<m_gnb_menus.length; i++){
    m_gnb_menus[i].addEventListener("click", () => {
        for(let j=0; j<m_gnb_menus.length; j++){
            m_gnb_menus[j].classList.remove("on");
        }
        m_gnb_menus[i].classList.add("on")
    })
}

