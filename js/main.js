$(document).ready(function () { 

    'use strict';
    
    // Show Navbar When Click On Icon
        $('.bars i.icon').click(function() {
            $('.nav-list').slideToggle()
        });
    // When Scroll Body .. Sticky Navbar
        $(window).scroll(function() {
            var sc = $(this).scrollTop();
            if (sc > 20) {
                $('header').addClass("sticky");
            } else {
                $('header').removeClass("sticky");
            }
            // Count To Plugin
                if (sc > 2080) {
                    $('.timer').countTo(); 
                }
        });
    // Portfolio Buttons Change Bg
        $(".buttons button").click(function() {
            // Change Bg
            $(this).addClass("active-btn").siblings().removeClass("active-btn");
            // Animation Button
            var CSSFilter = $(this).attr("id");
            if ( CSSFilter === 'all' ) {
                $(".images .row > div").fadeIn();
            } else {
                $(".images .row > div").hide()
                $(".images .row").contents().filter('.' + CSSFilter).fadeIn();
            }
        });
    // Owl Carousel
        $('.owl-carousel.one').owlCarousel({
            loop:true,
            autoplay:true,
            margin:5,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });
    // Owl Carousel
        $('.owl-carousel.two').owlCarousel({
            loop:true,
            autoplay:true,
            margin:5,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });    
    // Choose Panel
        $('.c-panel li').click(function() {
            $(this).addClass('active-btn').siblings().removeClass('active-btn');
            var p = $(this).data('role');
            $('.content > div').hide();
            $('.content').contents().filter('#' + p).fadeIn();
        });
    // popup video in choose section
        $('.popo').magnificPopup({
            type: 'iframe'
        });

    // Slick
    $('.slick').slick({
        loop:true,
        nextArrow : false,
        prevArrow : false,
        autoplay: true
        // dots: true,
    });
    // Nice Scroll
        $("body").niceScroll({
        cursorcolor:"#96c93d",
        cursorwidth:"15px",
        zindex: "99999",
        cursorborder: "0",
        cursorborderradius: "10px"
        });

    // Loading Screen
        $(".loading-overlay .spinner").fadeOut(1100, function () {
            $(this).parent().fadeOut(600, function () {
                $(this).remove();
            });
        });
    // Scroll To Top
        var scrollButton = $("#scroll-top");
        $(window).scroll(function () {

            $(this).scrollTop() >= 400 ? scrollButton.show() : scrollButton.hide();

        });
        // Click On Button To Scroll Top
            scrollButton.click(function () {

                $('html,body').animate({scrollTop : 0}, 1000);
            });   
    // Smooth Scroll
        $(".list a").click(function() {
            $('body,html').animate({
                scrollTop : $($(this).attr("href")).offset().top - 50
            }, 1300);
        }); 
    // wow.js
        new WOW().init();    

});

