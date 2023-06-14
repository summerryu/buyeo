
    
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