// функция показа поля поиска
function showSearchField() {
    let searchIcon = document.querySelector('.top-header__btns_search-label');
    let searchInput = document.querySelector('#searchInput');
    let topHeader = document.querySelector('.top-header');
    let searchForm = document.querySelector('.top-header__search-form');

    searchInput.classList.toggle('display-none');
    topHeader.classList.toggle('top-header__mobile');
    searchForm.classList.toggle('search-mobile');
};

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active');
});

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
    
    return console.log('попап закрыт');
}

function openPopup() {
    let popupWrapper = document.querySelector('.popup__wrapper');
    popupWrapper.classList.remove('closed-popup');
    return console.log('попап открыт');
}