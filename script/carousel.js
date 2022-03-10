
   
 function carousel(carouselLoop){  

    var $owl = $('.owl-carousel');
$owl.trigger('destroy.owl.carousel');
// After destory, the markup is still not the same with the initial.
// The differences are:
//   1. The initial content was wrapped by a 'div.owl-stage-outer';
//   2. The '.owl-carousel' itself has an '.owl-loaded' class attached;
//   We have to remove that before the new initialization.
$owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');

    $owl.owlCarousel({
    loop:carouselLoop,
    // nav:true,
    // navText : ["<i class='bi bi-arrow-bar-left'></i>","<i class='bi bi-arrow-bar-rigth'></i>"],
    margin:0,
    autoplay:true,
    stagePadding: 200,
    autoplayHoverPause:true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
    }
}) 

$owl.owlCarousel();
// Go to the next item
$('.bi-arrow-bar-right').click(function() {
    $owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.bi-arrow-bar-left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    $owl.trigger('prev.owl.carousel');
})

carouselLoop ? document.querySelector('.carousel-nav').style.display = 'block' : document.querySelector('.carousel-nav').style.display = 'none';
}
