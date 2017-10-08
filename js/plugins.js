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
$('.image, .bullding-in-map, .smallimages').click(function(){
  $('#up, .pop').fadeIn('slow')
  var srcImage = $(this).css('background-image')
  $('.pop').css('background-image', srcImage)
})
$('#up').click(function(){
  $('#up, .pop').fadeOut('fast')
})
// End pop

// This for to hide sidebar
$('.sidebar .close').click(function(){
  $('.sidebar').css('transform', 'translateX(600px)')
})
$(document).ready(function(){
  var heightNav = $('nav').height(),
      heightWindow = $(window).height(),
      heightSide = heightWindow - heightNav
  $('.sidebar').css({'top': heightNav, 'height': heightSide})
})
// End Sidebar
$(window).scroll(function(){
  var scrollTop = $(window).scrollTop()

  // if( scrollTop > 50 ){
  //   $('.btn-book').css({
  //     'position': 'absolute',
  //     'top': '0',
  //     'right': '0',
  //     'background-color': '$green-color'
  //   })
  // }
})
