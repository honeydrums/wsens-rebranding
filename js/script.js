let searchIcon = document.querySelector('.top-header__btns_search-label');
let searchInput = document.querySelector('#searchInput');
let topHeader = document.querySelector('.top-header');
let searchForm = document.querySelector('.top-header__search-form');

searchIcon.addEventListener('click', function() {
    searchInput.classList.toggle('display-none');
    topHeader.classList.toggle('top-header__mobile');
    searchForm.classList.toggle('search-mobile');
});

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active');
    document.querySelector('.bottom-header__nav-list').classList.toggle('bottom-header__nav-list__mobile')
});

// отключим кнопку отправить/зарегистрироваться, если не чекнут чекбокс с соглашением

let checkBox = document.querySelector('.checkbox-wrap input[name="confirm-yes"]');
let submitBtn = document.querySelector('input[type="submit"]');

function checkPropButton() {
    if (checkBox.checked === false) {
        submitBtn.disabled = true;
        submitBtn.classList.add('too-many-symbols__button');
        console.log('nope');
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove('too-many-symbols__button');
        console.log('yep');
    }
};