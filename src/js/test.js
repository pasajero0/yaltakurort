let a = 'success';
let b = (val) => console.log('mission ' + val);
b(a);

$('.intro__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  dots: true,
  prevArrow: '',
  nextArrow: '',
});

$('.apartments__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  prevArrow: '<i class="fas fa-arrow-left apartments__prevArrow"></i>',
  nextArrow: '<i class="fas fa-arrow-right apartments__nextArrow"></i>',
});