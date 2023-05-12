$(function() {
  // Scroll to top when logo is clicked
  $('.nav-element').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 400); // Adjust the animation speed as needed
  });

  // Smooth scroll to anchor links
  $('.nav-link').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var offset = 120; // Adjust the offset value as needed

    $('html, body').animate({
      scrollTop: $(target).offset().top - offset
    }, 400); // Adjust the animation speed as needed
  });
});
