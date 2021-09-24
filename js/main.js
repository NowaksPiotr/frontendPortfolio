// ** Variavbles for hamburger menu
let mobileNavList = document.querySelector(".navigation");
let hamburgerMenuLink = document.querySelectorAll(".navigation__link");
let mobileNavBtn = document.querySelector(".navigation__mobile-button");
// **

let menuLink = document.querySelectorAll(".navigation__link");
// **** HAMBURGER MENU **** //

// Toggle function to open hamburger menu

mobileNavBtn.addEventListener("click", hamburgerToggle);

function hamburgerToggle() {
  mobileNavBtn.classList.toggle("navigation__mobile-button--on");
  mobileNavList.classList.toggle("navigation--show");
}

// After click on hamburger menu link hamburger menu will hide and user will be taken to desired element.

hamburgerMenuLink.forEach(function toggler(link, index) {
  link.addEventListener("click", toggleAndTake);

  function toggleAndTake() {
      mobileNavBtn.classList.remove("navigation__mobile-button--on");
      mobileNavList.classList.remove("navigation--show");
}});

//********************************* //

// Function for active menu

menuLink.forEach(function activeItem(link, index){
  link.addEventListener("click", ()=>{
    let activeLink = document.querySelector(".navigation__link--active");
    if(activeLink){
      activeLink.classList.remove("navigation__link--active");
    }
    menuLink[index].classList.add("navigation__link--active");
  })
})
//********************************* //