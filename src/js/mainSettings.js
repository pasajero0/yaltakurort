
// location circle submenu

$('.header__location').click(function () {
  $('.header__locationMenuBtn').toggleClass('header__locationMenuBtn_isVisible');
});

// anchor smooth scroll

$('.intro__button').click( function (event) {
  event.preventDefault();
  let id  = $(this).attr('href');
  let top = $(id).offset().top-100;
  $('body,html').animate({scrollTop: top}, 1500);
});
