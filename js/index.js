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
const counterUp = window.counterUp.default;

const callback = (entries) => {
    entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
                duration: 1500,
                delay: 10,
            });
            el.classList.add("is-visible");
        }
    });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });
const counterClasses = [".counter", ".counter2", ".counter3", ".counter4"];

for (const cls of counterClasses) {
    const el = document.querySelector(cls);
    IO.observe(el);
}
// const bl = document.querySelector(".counter2");
// IO.observe(bl);
