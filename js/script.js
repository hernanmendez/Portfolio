var $mobileNav = $('.mobileNav');
$mobileNav.hide(0);

$('nav img').click(function(){
    $mobileNav.slideToggle();
});

var check = true;
$('#stopGif').click(function(){
    if(check)
    $('#header-image').css('background-image','url("./images/stop.gif")');
    else
    $('#header-image').css('background-image','url("./images/js.gif")'); 
    check = !check
});