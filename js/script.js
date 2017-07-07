var $mobileNav = $('.mobileNav');
$mobileNav.hide(0);

$('nav img').click(function(){
    $mobileNav.slideToggle();
});