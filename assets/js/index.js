(function($) {
    "use strict";

    /*====== Active Plugins ======
    1 background image    
    2 banner Slider 
    3 header
    4 Accordion
    5 Client Slider
    6 Brand Slider
   
    =============================*/




    /*=====================
    1 background image
    =======================*/

    bgImg()

    function bgImg() {
        $("[data-background]").each(function() {
            $(this).css(
                "background-image",
                "url(" + $(this).attr("data-background") + ")"
            );
        });
    }

    /*=============================
    2 banner Slider 
    =============================*/
    $(".slider-items").slick({
        autoplay: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 7500,
        speed: 900,
        infinite: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        arrows: false,
        appendDots: $('.banner-slider-dots'),
        dots: true,


    });




    /*=====================
    4 Accordion 
    =======================*/

    accordion();

    function accordion() {

        $(".accordion-header").on("click", function() {
            if ($(this).next(".accordion-body").hasClass("active")) {
                $(this).next(".accordion-body").removeClass("active").slideUp();
                $(this).children(".accordion-icon").removeClass("active")
            } else {
                $(".accordion-items .accordion-body").removeClass("active").slideUp();
                $(".accordion-items .accordion-header .accordion-icon").removeClass("active");
                $(this).next(".accordion-body").addClass("active").slideDown();
                $(this).children(".accordion-icon").addClass("active")
            }
        })

    }

    /*=============================
    5 Client Slider 
    =============================*/
    $(".client-right").slick({
        autoplay: false,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 7500,
        speed: 900,
        infinite: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        arrows: true,
        prevArrow: $('.client-slider-prev'),
        nextArrow: $('.client-slider-next'),
        dots: false,

    });

    /*=============================
    6 Brand Slider 
    =============================*/
    $(".brand-items").slick({
        autoplay: false,
        fade: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 7500,
        speed: 900,
        infinite: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        arrows: true,
        prevArrow: $('.brand-slider-prev'),
        nextArrow: $('.brand-slider-next'),
        dots: false,
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }

            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });



    /*=====================
    3 header 
    =======================*/


    menuSideBar();

    function menuSideBar() {
        let mainMenuCopy = $(".main-menu .menu-nav").html();

        $(".header").after(`<div class="mobile-menu">${mainMenuCopy}</div>`);


        menuSlider(".contact-part .menu-btn", ".mobile-menu", "active", ".close-icon");

        function menuSlider(menuBtn, mainMenu, activeClass, closeBtn) {
            $(menuBtn).on("click", function() {
                $(mainMenu).toggleClass(activeClass)
                $(this).toggleClass(activeClass);
            });

            $(mainMenu).on("click", function(event) {
                event.stopPropagation()
            });

            $(closeBtn).on("click", function() {
                $(mainMenu).removeClass(activeClass)
                $(menuBtn).removeClass(activeClass)
            });

            $(document).on("click", function(e) {
                let target = e.target;
                if (!$(target).is(mainMenu) && !$(target).parents().is(".contact-part")) {
                    $(`${menuBtn}, ${mainMenu}`).removeClass(activeClass)
                }
            });
        };
    };

    let headerPosition = $('.header-area').offset().top
    let headerHeight = (headerPosition + 90);

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll > headerHeight) {
            $(".header-area").addClass('sticky');
        } else {
            $(".header-area").removeClass('sticky');
        }
    });













})(jQuery);