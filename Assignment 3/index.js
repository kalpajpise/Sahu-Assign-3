var header = $('#navbar_Nav');
var sticky = header.offset().top;

$(window).on('scroll', function () {
  if($(window).scrollTop() > sticky) {
    header.addClass('sticky');
  }

  else{
    header.removeClass('sticky');
  }
});


$('a').click(function () {
  $('.selectedLink').removeClass('selectedLink');
  $(this).addClass('selectedLink');
});

$('.buy_now_btn, .submit_btn, .sign_up').click(function () {
  $('.buttonClicked').removeClass('buttonClicked');
  $(this).addClass('buttonClicked');
  return false;
});
