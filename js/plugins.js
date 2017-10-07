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
  console.log( $ )

  // button book in single flat page
  $('.btn-book').css({'left': '50%', 'opacity': '1'})
})
// End Sidebar
$(window).scroll(function(){
  var scrollTop = $(window).scrollTop()
  if( scrollTop < 80 ){
    $('.info-about-flat').css('margin-bottom', '150px')
    $('.btn-book').css({
      'top': '280px',
      'left': '50%',
      'transition': 'all .8s ease',
      'width': '236px',
      'height': '61px',
      'position': 'absolute',
      'box-shadow':'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    })
    $('.btn-book span').css({
      'padding': '8px 16px',
      'margin': '0 1px',
      'font-size': '30px'
    })
    $('.btn-book span:first-of-type').css('margin-left', '12px')
    $('.btn-book span:last-of-type').css('margin-right', '10px')
  }
    // if window > 100


  if( scrollTop > 100 ){
    $('.info-about-flat').css('margin-bottom', '50px')
    $('.btn-book').css({
      'top': '0',
      'left': '92%',
      'transition': 'all 1s ease',
      'width': '190px',
      'height': '52px',
      'box-shadow':'none',
      'position': 'fixed'
    })
    $('.btn-book span').css({
      'padding': '3px 13px',
      'margin': '0 0.5px 0 0',
      'font-size': '26px',
      'font-weight': '400',
      'text-shadow': '2px 1px 4px'
    })
    $('.btn-book span:first-of-type').css('margin-left', '8px')
    $('.btn-book span:last-of-type').css('margin-right', '5px')
  }
  // if window > 101
  // if()
})
