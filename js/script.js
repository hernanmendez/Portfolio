$('.mobileNav').hide(0);


$('#xs-img').click(function(){
    $('.mobileNav.hidden-sm').slideToggle();
});
$('#sm-img').click(function(){
    $('.mobileNav.hidden-xs').slideToggle();
});

var check = true;
$('#stopGif').click(function(){
    if(check)
    $('#header-image').css('background-image','url("./images/stop.gif")');
    else
    $('#header-image').css('background-image','url("./images/js.gif")'); 
    check = !check
});

var $containerProjectMD = $('#Projects .container.hidden-xs.hidden-sm')
var $containerProjectSM = $('#Projects .container.hidden-xs.hidden-md')
function resize(){
var colWidthMD = parseInt($containerProjectMD.css('width'))/3
var colWidthSM = parseInt($containerProjectSM.css('width'))/2

var topsMD = [0,0,0]
$($containerProjectMD.children()).each(function(index){
    index %= 3
    $(this).css('left', colWidthMD*index)
        .css('top',topsMD[index])
        
    topsMD[index] += parseInt($(this).css('height')) + 10
})

var topsSM = [0,0]
$($containerProjectSM.children()).each(function(index){
    index %= 2
    $(this).css('left', colWidthSM*index)
        .css('top',topsSM[index])

    topsSM[index] += parseInt($(this).css('height')) + 10
})
}
window.onload = resize;
$(window).resize(resize);