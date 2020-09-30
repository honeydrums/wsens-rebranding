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