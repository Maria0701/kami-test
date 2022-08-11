import { menuOpener } from "./menuOpener";

function updateMistakes(inputsArray) {
   inputsArray.forEach(input => {
    if (input.classList.contains('mistake')) {
        input.classList.remove('mistake');
    }});
}

function sendForm(form) {
    alert('Спасибо за заявку')
    form.reset();
    const popup = form.closest('.popup');

    if (popup && popup.classList.contains('opened')) {
        popup.classList.remove('opened');
        const overlay = document.querySelector('.overlay');        
        document.querySelector('body').classList.remove('overflow-hidden');        
        overlay.classList.remove('overlay--active');

        const opener = document.querySelector('.header__btn');        
        if (opener && popup) {
            const closeElt = popup.querySelector('.popup__close');
            menuOpener(opener, popup, popup, closeElt);
        }    
    }
}

export function validateForm(form) {
    const inputsToValidate = form.querySelectorAll('.validate');
    if (inputsToValidate.length === 0) {
        sendForm(form);
        return;
    };

    updateMistakes(inputsToValidate);

    let mistakes = [];

    inputsToValidate.forEach(input => {
        if (input.value === '' ) {
            input.classList.add('mistake');
        } 
        if (input.type === 'checkbox' && input.checked === false) {
            input.classList.add('mistake');
        }
        if (input.classList.contains('phone') && input.value.length  < 18) {

            input.classList.add('mistake');
        }     
    })

    mistakes = [...inputsToValidate]
            .filter(input => input.classList.contains('mistake'));
    if (mistakes.length === 0) {
        sendForm(form);
        return;
    };
}