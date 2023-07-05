const menuBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");
const invisibleScreen = document.querySelector(".invisible-screen");


const toggleMenu = () => {
    barsMenu.toggle("open-menu");
    if (barsMenu.classList.contains("open-menu")) {
        barsMenu.classList.remove("open-menu");
        return;
    }
    invisibleScreen.classList.toggle("show-invisible-screen");
};

const closeOnClick = (e) => {
    if (!e.target.classList.contains("navbar-link")) {
        return;
    }
    barsMenu.classList.remove("open-menu");
};

const closeOnInvisibleScreenClick = () => { 
    barsMenu.classList.remove("open-menu");
    invisibleScreen.classList.remove("show-invisible-screen");
}


const init = () => {
    menuBtn.addEventListener("click", toggleMenu);
    barsMenu.addEventListener("click", closeOnClick);
    invisibleScreen.addEventListener("click", closeOnInvisibleScreenClick);
};

init();