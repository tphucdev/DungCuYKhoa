
const modalIconUser = document.querySelector('.header__navbar-action__icon-user');
const modalHidenUser = document.querySelector('.header__navbar-action__icon-user-ul');
const main = document.querySelector('body');

modalIconUser.onclick = function(e) {
    modalHidenUser.classList.toggle('show');
    e.stopPropagation();
}

main.onclick = function(e) {
    modalHidenUser.classList.remove('show');
}

modalHidenUser.onclick =function(e) {
    e.stopPropagation();
}


// Bật/ Tắt Icon bars

const mainModalBars = document.querySelector('.header__navbar-items__tablet');
const listItem =document.querySelector('.header__navbar-items-ul__tablet');
const iconBars = document.querySelector('.header-icon-bars ');

iconBars.onclick = function() {
    mainModalBars.classList.add('open');
}


mainModalBars.onclick = function() {
    mainModalBars.classList.remove('open');
}

listItem.onclick = function(e) {
    e.stopPropagation();
}

// Bật/ Tắt Icon search

const iconSearch = document.querySelector('.icon-search-tablet');
const inputSearch = document.querySelector('.header__navbar-action__search-tablet');

iconSearch.onclick = function() {
    inputSearch.classList.toggle('show');
}

