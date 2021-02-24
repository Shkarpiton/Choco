const slider = $('.shop__list').bxSlider({
    pager: false,
    controls:false
});

$('.product__slider--one').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})
$('.product__slider--two').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})