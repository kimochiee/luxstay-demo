$(document).ready(function(){
    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    });
});

$(document).ready(function(){
    $('.place-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
        ]
    });
});

$(document).ready(function(){
    $('.extra-list').slick({
        slidesToShow: 3,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                    nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false,
                }
            },
        ]       
    });
});

$(document).ready(function(){
    $('.suggest-list').slick({
        slidesToShow: 4,
        infinite: false,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false,
                }
            },
        ]
    });
});

$(document).ready(function(){
    $('.discover-list').slick({
        slidesToShow: 3,
        infinite: false,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false,
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.guide-list').slick({
        slidesToShow: 3,
        infinite: false,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false,
                }
            },
        ]
    });
});