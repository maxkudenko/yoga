$(function() {

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        nav:true,
        items: 1
    })


    var nav = $('.nav-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

    $(".header-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        top = top - 200;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(function() {
        $('.prices-list .button').hover(function() {
            $(this).siblings('.prices-list .price').css({
                'background-color': '#fff',
                'color': '#808080'
            });
        }, function() {
            $('.prices-list .price').css({
                'background-color': '',
                'color': ''
            });
        });
    });

});
