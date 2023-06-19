

const m_gnb = document.querySelector("#m_header .center")
const m_gnb_menus = document.querySelectorAll("#m_header .gnb > li");


for(let i=0; i<m_gnb_menus.length; i++){
    m_gnb_menus[i].addEventListener("click", (e) => {
        e.preventDefault(); 
        for(let j=0; j<m_gnb_menus.length; j++){
            m_gnb_menus[j].classList.remove("on");
        }
        m_gnb_menus[i].classList.add("on")
    })
}
