(function ($) {
    'use strict';

    var uza_window = $(window);


    $('.switch-lang input').on('change', function(){
      var dad = $(this).parent();
      if($(this).is(':checked'))
        dad.addClass('switch-lang-checked');
      else
        dad.removeClass('switch-lang-checked');
    });
    

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    uza_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#uzaNav').classyNav();
    }


    // *************************************
    // :: 5.0 Testimonial Slides Active Code
    // *************************************
    if ($.fn.owlCarousel) {
        var testimonialSlide = $('.testimonial-slides');
        testimonialSlide.owlCarousel({
            items: 1,
            margin: 2,
            dots: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 1500,
            nav: true,
            navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>']                      
        });
    }

    // *********************************
    // :: 8.0 Portfolio Menu Active Code
    // *********************************
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })


    // ***************************
    // :: 10.0 Tooltip Active Code
    // ***************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 11.0 WOW Active Code
    // ***********************
    if (uza_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 12.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // ****************************
    // :: 13.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        uza_window.scrollUp({
            scrollSpeed: 2000,
            scrollText: '<i class="fa fa-angle-up"</i>'
        });
    }

    // **************************
    // :: 14.0 Sticky Active Code
    // **************************
    uza_window.on('scroll', function () {
        if (uza_window.scrollTop() > 0) {
            $('.logo-h').addClass('menu-logo-active');
            $('.logo-h-b').removeClass('logo-content-active');
        } else {
           $('.logo-h').removeClass('menu-logo-active');
           $('.logo-h-b').addClass('logo-content-active');
        }
    });

    // ********************************
    // :: 15.0 Slick Slider Active Code
    // ********************************
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 15,
            time: 1500
        });
    }

    // *********************************
    // :: 16.0 Prevent Default 'a' Click
    // *********************************

    $('.cli').on('click', function () {
        $('.proyect-hidden').addClass('proyect-visible');
    });
    $('.cli-1').on('click', function () {
        $('.proyect-hidden-1').addClass('proyect-visible');
    });
    $('.cli-2').on('click', function () {
        $('.proyect-hidden-2').addClass('proyect-visible');
    });
    $('.cli-3').on('click', function () {
        $('.proyect-hidden-3').addClass('proyect-visible');
    });
    $('.cli-4').on('click', function () {
        $('.proyect-hidden,.proyect-hidden-1,.proyect-hidden-2,.proyect-hidden-3').removeClass('proyect-visible');
    });

    $('.cli').on('click', function () {
        $('.cli-1').addClass('cli-block');
        $('.cli').addClass('cli-hidden');
    });
    $('.cli-1').on('click', function () {
        $('.cli-2').addClass('cli-block');
        $('.cli-1').addClass('cli-hidden');
    });
    $('.cli-2').on('click', function () {
        $('.cli-3').addClass('cli-block');
        $('.cli-1').addClass('cli-hidden');
    });
    $('.cli-3').on('click', function () {
        $('.cli-4').addClass('cli-block');
        $('.cli-3').addClass('cli-hidden');
    });

    $('.cli-4').on('click', function () {
        $('.cli').addClass('cli-block');
        $('.cli-1,.cli-2,.cli-3,.cli-4').removeClass('cli-block');
    });
    


    

    // *********************************
    // :: More
    // *********************************
    $(function() {
        $(document).on('click', '#scrollUp', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 2000, 'easeInOutExpo');
            event.preventDefault();
        });

        $(document).on('click', '.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 2000, 'easeInOutExpo');
            event.preventDefault();
        });

    });

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() > 1) {
                $('#logo-h').addClass('menu-logo-active');
            }
            if($(this).scrollTop() < 1) {        
             $('#logo-h').removeClass('menu-logo-active');   
            }
        });
        });



})(jQuery);
