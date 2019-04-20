
// location circle submenu

$('.header__location').click(function () {
  $('.header__locationMenuBtn').toggleClass('header__locationMenuBtn_isVisible');
});

// mobmenu is visible

$('.header__showCloseBtn').click(function () {
  if ($('.header__locationMenuBtn').hasClass('header__locationMenuBtn_isVisible')) {
    $('.header__locationMenuBtn').removeClass('header__locationMenuBtn_isVisible');
  }
  $('.header__showCloseBtn').toggleClass('isOpen');
  $('.header').toggleClass('header__isVisible');
});

// anchor smooth scroll

$('.intro__button').click( function (event) {
  event.preventDefault();
  let id  = $(this).attr('href');
  let top = $(id).offset().top-100;
  $('body,html').animate({scrollTop: top}, 1500);
});


$(window).scroll(function(){
  const scrollTopValue = $(this).scrollTop();
	if (scrollTopValue >= 1000 ) {
    $('.scrollToTop').css('right', '5%');
	} else {
    $('.scrollToTop').css('right', '-100px');
	}
});

$('.scrollToTop').click(function () {
  $('body,html').animate({scrollTop: 0}, 1500);
});