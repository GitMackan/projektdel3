"use strict";

window.addEventListener('scroll', function () {
  var header = document.getElementById('navbar');
  var scroller = document.getElementById('scroll-up');
  header.classList.toggle('sticky', window.scrollY > 0);
  scroller.classList.toggle('show', window.scrollY > 200);
});
var navigation = document.querySelector('.navbar .menu');
var hamburger = document.querySelector('.mobile-nav');

document.querySelector('.mobile-nav').onclick = function () {
  navigation.classList.toggle('active');
  hamburger.classList.toggle('active');
};