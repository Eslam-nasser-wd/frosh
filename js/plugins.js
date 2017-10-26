// Slider Image
$(document).ready(function(){
  $('.index-slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    fade: true,
    pauseOnHover: false
  });
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    fade: true
  });
});


// POP UP
$('[data-popupImage]').click(function(){
    var attr = $(this).attr('data-popupImage')
    $(`#up, .${attr}`).fadeIn('fast')
})

$('.image, .smallimages').click(function(){
  $('#up, .pop').fadeIn('slow')
  var srcImage = $(this).css('background-image')
  $('.pop').css('background-image', srcImage)
})

$('#up').click(function(){
  $('#up, .pop').fadeOut('fast')
})
// End pop

$('.interface').click(function(){
  $(this).css('top', $(window).height())
  $('nav').css('opacity', '1')
  $('.back-layer').css('transform', 'translate(-50%, -50%) scale(1)')
})
$(window).resize(function(){
    $('.interface').css('top', $(window).height())
})
