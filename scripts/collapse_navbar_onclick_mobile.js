// Make the navbar collapse when a link is clicked only on mobile
window.addEventListener('load', function() {  
    var navbar = document.querySelector('nav');
    var navbarToggler = navbar.querySelector('.navbar-toggler');
        var navbarCollapse = navbar.querySelector('.navbar-collapse');
        navbarCollapse.addEventListener('click', function() {
            if ($(window).width() <= 768) {
            navbarToggler.click();
            }
            });
  }); 
