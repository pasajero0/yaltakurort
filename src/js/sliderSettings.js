
$('.apartments__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  prevArrow: '<i class="fas fa-arrow-left apartments__prevArrow"></i>',
  nextArrow: '<i class="fas fa-arrow-right apartments__nextArrow"></i>',
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.intro__gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  prevArrow: '<i class="fas fa-arrow-left intro__prevArrow"></i>',
  nextArrow: '<i class="fas fa-arrow-right intro__nextArrow"></i>',
});