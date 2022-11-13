$(document).ready(function(){
    $('.slider_container').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<img class="arrow-left" src="images/back.png" alt="prevArrow">',
        nextArrow: '<img class="arrow-right" src="images/next.png" alt="nextArrow">',
    });
  });