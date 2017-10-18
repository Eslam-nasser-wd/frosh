// Slider Image
$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    fade: true
  });
});


// POP UP
$('.image, .back-layer div, .smallimages').click(function(){
  $('#up, .pop').fadeIn('slow')
  var srcImage = $(this).css('background-image')
  $('.pop').css('background-image', srcImage)
})
$('#up').click(function(){
  $('#up, .pop').fadeOut('fast')
})
// End pop

$('.interface').click(function(){
  $(this).css('top', '700px')
  $('.back-layer').css('transform', 'translate(-50%, -50%) scale(1)')
})
