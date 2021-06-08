let test = document.querySelector(".navigation__mobile-button");
test.addEventListener('click', klasa);
function klasa(){
    test.classList.toggle('navigation__mobile-button--on');
}