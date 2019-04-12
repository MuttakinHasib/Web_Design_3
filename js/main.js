

$(document).ready(function(){
    $('.home-slider').owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        nav:true,
        marge:true,
        dots:false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });
        /****
         * 
         * About-2 carousel
         * 
         ****/
    $('.abt-inner').owlCarousel({
        items:1,
        autoplay:true,
        loop:true
    });
        /**
         * 
         * Clients Slider
         * 
         */
    $('.clients-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:4500,
        margin:15,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        loop:true,
        nav:false,
        dots:false,
        responsive:{
            300: {
                items:2,
            },
            480: {
                items:3,
            },
            768: {
                items:4,
            },
            1170: {
                items:6,
            }
        }
    });
        /**
         * 
         * ScrollSpy
         * 
         */
    $('.scrollspy').scrollSpy();

    /**
     * 
     * CounterUp
     * 
     */

    $('.counter').counterUp();

 });

 /**
  * 
  * MagnifincPop up and mixup
  * 
  */

 $(document).ready(function() {

    $('.zoom').magnificPopup({

        type: 'image',
        gallery:{
          enabled:true
        }
    });

    var containerEl = document.querySelector('.ports-items');

    var mixer = mixitup(containerEl);

});

    /**
     * 
     * onclick chnge active class
     * 
     * 
     */

$(document).on('click','.controls ul li',function(){
    $(this).addClass('active').siblings().removeClass('active')
});