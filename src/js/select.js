export const select = () =>{
    let selectHead = document.querySelector('.select__head');
    const selectMenu = document.querySelector('.select__body');
    const selectItem =document.querySelectorAll('.select__body-item')

    selectHead.addEventListener("click", function () {
        selectMenu.classList.toggle("select__isactive");
    });

    selectItem.forEach(item =>{
        item.addEventListener('click', selectChoose)
    })

    function selectChoose (){
        let text = this.innerText;
        let select = this.closest('.form__select')
        let currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        selectMenu.classList.remove('select__isactive');
    }
    
} 
  