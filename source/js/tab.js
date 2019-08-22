'use strict';

var links = document.querySelectorAll('.tab-toggle__link');

links.forEach(function(link) {
  link.addEventListener('click', function(evt) {
    evt.preventDefault();
    var id = this.getAttribute('data-tab');
    var content = document.querySelector('.tab-content__item[data-tab="' + id + '"]');
    var activeLink = document.querySelector('.tab-toggle__link.active');
    var activeContent = document.querySelector('.tab-content__item.active');

    activeLink.classList.remove('active');
    this.classList.add('active');

    activeContent.classList.remove('active');
    content.classList.add('active');
  })
})
