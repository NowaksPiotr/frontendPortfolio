// Variables

// DOM Elements that styles will be changed.

let navWrapper = document.querySelector(".nav__wrapper");
let navigation = document.querySelector(".navigation");
let navItem = document.querySelectorAll(".navigation__item");
let navLink = document.querySelectorAll(".navigation__link");
let navLinkActive = document.querySelector(".navigation__link--active");
let mobileHamburger = document.querySelector(".navigation__mobile-button");
let mainSectionWrapper = document.querySelectorAll(".main-section__wrapper");
let mainSectionTitle = document.querySelectorAll(".main-section__title");
let internalLink = document.querySelectorAll(".internal-link");
let backgroundWrapper = document.querySelector(".background__wrapper");
let backgroundPicture = document.querySelector(".background__picture");
let homeContentWrapper = document.querySelector(".home-content__wrapper");
let portraitWrapper = document.querySelector(".portrait__wrapper");
let portraitPhotoBg = document.querySelector(".portrait__photo-bg");
let portraitPhoto = document.querySelector(".portrait__photo");
let portraitPhotoImage = document.querySelector(".portrait__photo-image");
let homeTextWrapper = document.querySelector(".home-text__wrapper");
let homeTextContainer = document.querySelector(".home-text__container");
let headerMain = document.querySelectorAll(".header__main");
let desctiptionCardWrapper = document.querySelector(
  ".description-card__wrapper"
);
let desctiptionCardFlex = document.querySelector(".description__card--flex");
let mainSectionWrapperConact = document.querySelector(
  ".main-section__wrapper--contact"
);
let projectsExamples = document.querySelector(".projects-examples");
let projectExampleCard = document.querySelectorAll(".project-example__card");
let projectDescriptionButtonsWrapper = document.querySelectorAll(
  " .project-description__buttons--wrapper"
);
let projectDescriptionButton = document.querySelectorAll(
  ".project-description__button"
);
let footer = document.querySelector(".footer");
let footerWrapper = document.querySelector(".footer__wrapper");
let footerText = document.querySelector(" .footer__text");

//-----------------------------------------------------------------------------

let vintage = "--vintage";
let styleSwitch = document.querySelector(".style-switch-button");

// ============================================================================
// ============================================================================

styleSwitch.addEventListener("click", styleChange);

function styleChange() {
  if (navigation.classList.contains("navigation" + vintage)) {
    navWrapper.classList.remove("nav__wrapper" + vintage);
    navWrapper.classList.add('nav__wrapper');
    navigation.classList.remove('navigation' + vintage);
    navigation.classList.add("navigation");
    // navLinkActive.classList.remove("navigation__link--active" + vintage);
    // navLinkActive.classList.add("navigation__link--active");
    mobileHamburger.classList.remove("navigation__mobile-button" + vintage);
    mobileHamburger.classList.add("navigation__mobile-button");
  } else {
    navWrapper.classList.remove("nav__wrapper");
    navWrapper.classList.add("nav__wrapper" + vintage);
    navigation.classList.remove("navigation");
    navigation.classList.add("navigation" + vintage);
    // navLinkActive.classList.remove("navigation__link--active");
    // navLinkActive.classList.add("navigation__link--active" + vintage);
    mobileHamburger.classList.remove("navigation__mobile-button");
    mobileHamburger.classList.add("navigation__mobile-button" + vintage);
  }

  backgroundWrapper.classList.toggle("background__wrapper" + vintage);
  backgroundPicture.classList.toggle("background__picture" + vintage);
  homeContentWrapper.classList.toggle("home-content__wrapper" + vintage);
  portraitWrapper.classList.toggle("portrait__wrapper" + vintage);
  portraitPhotoBg.classList.toggle("portrait__photo-bg" + vintage);
  portraitPhoto.classList.toggle("portrait__photo" + vintage);
  portraitPhotoImage.classList.toggle("portrait__photo-image" + vintage);
  homeTextContainer.classList.toggle("home-text__container" + vintage);
  desctiptionCardWrapper.classList.toggle(
    "description-card__wrapper" + vintage
  );
  desctiptionCardFlex.classList.toggle("description__card--flex" + vintage);
  mainSectionWrapperConact.classList.toggle(
    "main-section__wrapper--contact" + vintage
  );
  projectsExamples.classList.toggle("projects-examples" + vintage);
  homeTextWrapper.classList.toggle("home-text__wrapper" + vintage);
  footer.classList.toggle("footer" + vintage);
  footerWrapper.classList.toggle("footer__wrapper" + vintage);
  footerText.classList.toggle("footer__text" + vintage);

  mainSectionWrapper.forEach((el, index) => {
    mainSectionWrapper[index].classList.toggle(
      "main-section__wrapper" + vintage
    );
  });
  mainSectionTitle.forEach((el, index) => {
    mainSectionTitle[index].classList.toggle("main-section__title" + vintage);
  });
  internalLink.forEach((el, index) => {
    internalLink[index].classList.toggle("internal-link" + vintage);
  });
  headerMain.forEach((el, index) => {
    headerMain[index].classList.toggle("header__main" + vintage);
  });
  projectExampleCard.forEach((el, index) => {
    projectExampleCard[index].classList.toggle(
      "project-example__card" + vintage
    );
  });
  projectDescriptionButtonsWrapper.forEach((el, index) => {
    projectDescriptionButtonsWrapper[index].classList.toggle(
      "project-description__buttons--wrapper" + vintage
    );
  });
  projectDescriptionButton.forEach((el, index) => {
    projectDescriptionButton[index].classList.toggle(
      "project-description__button" + vintage
    );
  });
  navItem.forEach((el, index) => {
    navItem[index].classList.toggle("navigation__item" + vintage);
  });
  navLink.forEach((el, index) => {
    navLink[index].classList.toggle("navigation__link" + vintage);
  });
}
