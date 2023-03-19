

var $ = jQuery.noConflict();
$(document).ready(function(){
    $('.discover-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        prevArrow: '<span class="slick-arrow slick-prev"></span>',
        nextArrow: '<span class="slick-arrow slick-next"></span>', 
        responsive: [
            {
            breakpoint: 1299,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
            breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $('.category-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: '<span class="slick-arrow slick-prev"></span>',
        nextArrow: '<span class="slick-arrow slick-next"></span>', 
        responsive: [
            {
            breakpoint: 1023,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    
    $('.latest-row-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<span class="slick-arrow slick-prev"></span>',
        nextArrow: '<span class="slick-arrow slick-next"></span>', 
    });
    
});