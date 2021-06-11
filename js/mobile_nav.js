let test = document.querySelector(".navigation__mobile-button");
let tet = document.querySelector(".navigation");
test.addEventListener('click', klasa);
function klasa(){
    test.classList.toggle('navigation__mobile-button--on');
    tet.classList.toggle('navigation--show');
}