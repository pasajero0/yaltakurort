
// $('.intro__slider').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 5000,
//   dots: true,
//   prevArrow: '',
//   nextArrow: '',
// });

function slidesToShowFunc () {
  if (window.innerWidth < 600) {
    return 1;
  } else if (window.innerWidth < 900) {
    return 2;
  } else {
    return 3;
  }
};

// window.onresize = slidesToShowFunc;

$('.apartments__slider').slick({
  infinite: true,
  slidesToShow: slidesToShowFunc(),
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  prevArrow: '<i class="fas fa-arrow-left apartments__prevArrow"></i>',
  nextArrow: '<i class="fas fa-arrow-right apartments__nextArrow"></i>',
});


$('.intro__gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.intro__galleryNav'
});
$('.intro__galleryNav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.intro__gallery',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});