$(function(){
    $(".slider__box").slick({
        prevArrow: '<img src="/images/arrow-left.svg" alt="prev arrow" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="/images/arrow-right.svg" alt="next arrow" class="slider__arrow slider__arrow-right">',
    });

    $(".menu-btn").on("click", function(){
        $(".menu__list").toggleClass("active");
    })


});