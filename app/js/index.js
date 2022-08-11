
import { menuOpener } from "./components/menuOpener";
import Swiper, { Navigation, Pagination } from 'swiper';
import { validateForm } from "./components/formValidator";
import { phoneMask } from "./components/phone-mask";

try {
    const opener = document.querySelector('.js-toggler');
    const menuElt = document.querySelector('.header__menu-wrapper');  
    
    if (opener && menuElt) {
        const eltToOpen = document.querySelector('.header');
        menuOpener(opener, menuElt, eltToOpen, opener);
    }    
} catch(e) {
    console.log(e);
}

try {
  const opener = document.querySelector('.header__btn');
  const popup = document.querySelector('.popup');  
  
  if (opener && popup) {
      const closeElt = popup.querySelector('.popup__close');
      menuOpener(opener, popup, popup, closeElt);
  }    
} catch(e) {
  console.log(e);
}

try{
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });      

} catch(e) {
  console.log(e);
}

try {
  const menuTogglers = document.querySelectorAll('.menu__op');
  menuTogglers.forEach(toggler => toggler.addEventListener('click', () => {
    toggler.parentElement.classList.toggle('active');
  }));
}catch(e) {
  console.log(e)
}

try {
  const allForms = document.querySelectorAll('form');
  allForms.forEach(form => form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm(form);
  }))

} catch(e) {
  console.log(e);
}

try {
  const phones = document.querySelectorAll('.phone');
   if (phones.length > 0) {
      phones.forEach(phone => phoneMask(phone));
  }
} catch(e) {
  console.log(e);
}
