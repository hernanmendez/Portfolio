var $mobileNav = $('.mobileNav');
$mobileNav.hide(0);

$('nav img').click(function(){
    $mobileNav.slideToggle();
});

var $gif = $('#header-image');
$gif.mouseenter(function(){
    $gif.css('background-image','url(./images/js.gif)')
});
$gif.mouseleave(function(){
    $gif.css('background-image','url(./images/stop.gif)')
});