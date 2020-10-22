// функция показа поля поиска
function showSearchField() {
    let searchIcon = document.querySelector('.top-header__btns_search-label');
    let searchInput = document.querySelector('#searchInput');
    let searchForm = document.querySelector('.top-header__search-form');

    searchInput.classList.toggle('display-none');
    searchForm.classList.toggle('search-mobile');
};

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active');
});

// покажем мобильное меню

function showMobileMenu() {
    let mobileMenu = document.querySelector('.mobile-menu');
    let headerBtns = document.querySelector('.top-header__wrapper');

    mobileMenu.classList.toggle('mobile-menu__show');
    headerBtns.classList.toggle('top-header__sticky-bottom');
    document.body.classList.toggle('no-scroll');
}

// попап

function closePopup() {
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

let popupWrapper = document.querySelector('.popup__wrapper');

// отключим кнопку отправить/зарегистрироваться, если не чекнут чекбокс с соглашением

let checkBox = document.querySelector('.checkbox-wrap input[name="confirm-yes"]');
let submitBtn = document.querySelector('input[type="submit"]');

function checkPropButton() {
    if (checkBox.checked === false) {
        submitBtn.disabled = true;
        popupWrapper.classList.add('callback__popup-wrong');
        console.log('nope');
    } else {
        submitBtn.disabled = false;
        popupWrapper.classList.remove('callback__popup-wrong');
        console.log('yep');
    }
};

// показать ответ

let question = document.getElementsByClassName('questions-list-element__title');
let answer = document.getElementsByClassName('questions-list__answer');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function() {
    answer[i].classList.toggle('show-answer')
  });
};