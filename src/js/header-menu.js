export const menuOne = () => {
    const menuBtn = document.querySelector(".menu-one");
    const wrapper = document.querySelector(".header")
    const menu = document.querySelector(".drop-one");
    menuBtn.addEventListener("click", function () {
      menu.classList.toggle("visible");
    });
    // wrapper.addEventListener("click", function (){
    //     menu.classList.remove("visible");
    // });

  };

  export const menuTwo= () => {
    const menuBtn = document.querySelector(".menu-two");
    const menu = document.querySelector(".drop-two");
    menuBtn.addEventListener("click", function () {
      menu.classList.toggle("visible");
    });
  };