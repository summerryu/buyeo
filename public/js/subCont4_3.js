
const boxs = document.querySelectorAll(".center_box .boxs");


for(let i=0; i<boxs.length; i++){
    boxs[i].addEventListener("click", (e) => {
        e.preventDefault();
        for(let j=0; j<boxs.length; j++){
            boxs[j].classList.remove("on");
        }
        boxs[i].classList.add("on");
    })
}
