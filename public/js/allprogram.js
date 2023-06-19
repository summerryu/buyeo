


const menus = document.querySelectorAll(".cont1_menus > li");


for(let i=0; i<menus.length; i++){
    menus[i].addEventListener("click", (e) => {
        // e.preventDefault();
        for(let j=0; j<menus.length; j++){
            menus[j].classList.remove("on");
        }
        menus[i].classList.add("on");
    })
}

