// Variables

let styleSwitchButton = document.querySelector('.styleSwitchButton');
let loadingCover = document.querySelector('.loading__cover');
let test = document.querySelector('.background__wrapper');



styleSwitchButton.addEventListener('click', changeSiteStyle);




function changeSiteStyle(){
    test.classList.toggle('background__wrapper--vintage');
}