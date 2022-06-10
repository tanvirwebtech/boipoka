$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 1500,
            },
            600: {
                items: 2,
                nav: false,
                loop: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 1500,
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 1500,
            },
        },
    });
});

AOS.init();
