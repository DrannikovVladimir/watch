'use strict';

var button = document.querySelectorAll('.form-filter__title');

button.forEach(function (title) {
  title.addEventListener('click', function (evt) {
    evt.preventDefault();
    var id = title.getAttribute('data-tab');
    var section = title.parentNode;
    section.classList.toggle('form-filter__section--closed');
  });
});
