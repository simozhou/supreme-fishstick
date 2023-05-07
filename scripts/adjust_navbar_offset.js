window.addEventListener('load', function() {
  var navbarHeight = document.querySelector('nav').offsetHeight;
  var header = document.querySelector('.header');
  header.style.paddingTop = navbarHeight + 'px';
});