'use strict';

var windowView = document.querySelector('.slider__view');
var windowViewImage = windowView.querySelector('img');
var windowViewWebp = windowView.querySelector('source');
var items = document.querySelectorAll('.slider-list__item');
var leftArrow = document.querySelector('.slider__arrow--left');
var rightArrow = document.querySelector('.slider__arrow--right');
var activeIndex = 0;
var timeInterval = setInterval(showSlide, 2000);

function showSlide() {
  items[activeIndex].className = 'slider-list__item';
  activeIndex = (activeIndex + 1) % items.length;
  items[activeIndex].className = 'slider-list__item slider-list__item--active';
}

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
