document.querySelector('.top-header__btns_search-label').addEventListener('click', function() {
    document.querySelector('#searchInput').classList.toggle('display-none');
    document.querySelector('.top-header').classList.toggle('top-header__mobile');
    document.querySelector('.top-header__search-form').classList.toggle('search-mobile');
});

document.querySelector('.hamburger--squeeze').addEventListener('click', function() {
    this.classList.toggle('is-active');
    document.querySelector('.bottom-header__nav-list').classList.toggle('bottom-header__nav-list__mobile')
});