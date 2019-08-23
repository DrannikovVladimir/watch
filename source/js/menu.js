'use strict';

var button = document.querySelector('.main-nav__button');
var menu = document.querySelector('.main-nav');

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  menu.classList.toggle('main-nav__toggle');
});
