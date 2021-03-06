// функция показа поля поиска
function showSearchField() {
    let searchForm = document.querySelector('.search-form-wrapper');

    searchForm.classList.toggle('search-form-wrapper__show');
};

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active');
});

// очистить поле поиска и убрать его

function eraseInput() {
    let searchForm = document.querySelector('.search-form-wrapper');
    let inputField = document.querySelector('.input-field');
    inputField.value = '';
    searchForm.classList.toggle('search-form-wrapper__show');
}

// покажем мобильное меню

function showMobileMenu() {
    let mobileMenu = document.querySelector('.mobile-menu');
    let headerBtns = document.querySelector('.top-header__wrapper');

    mobileMenu.classList.toggle('mobile-menu__show');
    headerBtns.classList.toggle('top-header__sticky-bottom');
    document.body.classList.toggle('no-scroll');
}

// отключим кнопку отправить/зарегистрироваться, если не чекнут чекбокс с соглашением

let checkBox = document.querySelector('.checkbox-wrap input[name="confirm-yes"]');
let submitBtn = document.querySelector('input[type="submit"]');

function checkPropButton() {
    if (checkBox.checked === false) {
        submitBtn.disabled = true;
        console.log('nope');
    } else {
        submitBtn.disabled = false;
        console.log('yep');
    }
};

// попап

function closePopup() {
    let popupWrapper = document.querySelector('.popup__wrapper');
    popupWrapper.classList.add('closed-popup');
    document.body.classList.remove('no-scroll');

    return console.log('попап закрыт');
}

function openPopup() {
    let popupWrapper = document.querySelector('.popup__wrapper');
    popupWrapper.classList.remove('closed-popup');
    document.body.classList.add('no-scroll');

    return console.log('попап открыт');
}

// показать ответ

let question = document.getElementsByClassName('questions-list-element__title');
let answer = document.getElementsByClassName('questions-list__answer');

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function() {
        answer[i].classList.toggle('show-answer')
    });
};