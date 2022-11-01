export const charts = () =>{
    const chartsBtn = document.querySelector(".charts__img");
    const menuCharts = document.querySelector(".charts__item");

    chartsBtn.addEventListener('click', function(){
        menuCharts.classList.toggle("charts__item-active");
    });
}