/*
.nav__wrapper
.navigation
.navigation__item
.navigation__link
.navigation__link--active
*/
let navigation = document.querySelector(".navigation");
let navigation1 = document.querySelector(".nav__wrapper");
let navigation2 = document.querySelector(".navigation__item");
let navigation3 = document.querySelector(".navigation__link");
let navigation4 = document.querySelector(".navigation__link--active");
let btn = document.querySelector(".changer");
let styleState = false; // false is default for vintage
let darkCover = document.querySelector(".darkLoader");
let time = setTimeout(2000);
btn.addEventListener("click", changingStyles);

function changingStyles() {
  if (styleState == true) {
    alert("Brak dostępnych akcji, skontaktuj się z administratorem");
    styleState = false;
    return;
  }
  styleState = true;
  darkCover.style.display = "block";
  setTimeout(() => {
    darkCover.style.display = "none";
  }, 2000);
  clearTimeout();
  setTimeout(()=>{
       navigation.classList.remove('navigation');
  navigation1.classList.remove('nav__wrapper');
  navigation2.classList.remove('navigation__item');
  navigation3.classList.remove('navigation__link');
  navigation.classList.add('navigation-modern');
  navigation1.classList.add('nav-modern__wrapper');
  navigation2.classList.add('navigation-modern__item');
  navigation3.classList.add('navigation-modern__link'); 
  },1000);

return;
}
