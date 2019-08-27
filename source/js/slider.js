'use strict';

var windowView = document.querySelector('.slider__view');
var windowViewImage = windowView.querySelector('img');
var windowViewWebp = windowView.querySelector('source');
var items = document.querySelectorAll('.slider-list__item');
var leftArrow = document.querySelector('.slider__arrow--left');
var rightArrow = document.querySelector('.slider__arrow--right');

function getNewImg(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '.') {
      newStr = str.slice(0, i) + '-big' + str.slice(i);
    }
  }
  return newStr;
}

items.forEach(function(item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    var activeItem = document.querySelector('.slider-list__item--active');
    var img = this.querySelector('.slider-list__image').getAttribute('src');
    var webp = this.querySelector('source').getAttribute('srcset');

    activeItem.classList.remove('slider-list__item--active');
    item.classList.add('slider-list__item--active');
    windowViewImage.setAttribute('src', getNewImg(img));
    windowViewWebp.setAttribute('srcset', getNewImg(webp));
  });
});

leftArrow.addEventListener('click', function (evt) {
  evt.preventDefault();
  var activeItem = document.querySelector('.slider-list__item--active');
  console.log(activeItem.previousSibling);
  // if (activeItem.previousSibling === document.querySelector('slider-list__item')) {
  //   activeItem.previousSibling.classList.add('.slider-list__item--active');
  // } else {
  //   activeItem.parentNode.lastChild.classList.add('.slider-list__item--active');
  // }
  // activeItem.classList.remove('slider-list__item--active');
})
