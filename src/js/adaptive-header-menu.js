export const menu = ()=> {
    const adaptiveBtn = document.querySelector(".header__menu-img");
    const adaptiveMenu = document.querySelector(".header__menu");
    adaptiveBtn.addEventListener("click", function () {
        adaptiveMenu.classList.toggle("header-visible");
    });
}
  