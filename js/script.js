var $mobileNav = $('.mobileNav');
$mobileNav.hide(0);

$('header img').click(function(){
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

var $containerProjectMD = $('#Projects .container.hidden-xs.hidden-sm')
var $containerProjectSM = $('#Projects .container.hidden-xs.hidden-md')
var $containerProjectXS = $('#Projects .container.hidden-sm.hidden-md')
function resize(){
var colWidthMD = parseInt($containerProjectMD.css('width'),10)/3
var colWidthSM = parseInt($containerProjectSM.css('width'),10)/2

var topsMD = [0,0,0]
$($containerProjectMD.children()).each(function(index){
    index %= 3
    $(this).css('left', colWidthMD*index)
        .css('top',topsMD[index])

    topsMD[index] += parseInt($(this).css('height'),10) + 10
})

$containerProjectMD.css('height', Math.max(...topsMD))

var topsSM = [0,0]
$($containerProjectSM.children()).each(function(index){
    index %= 2
    $(this).css('left', colWidthSM*index)
        .css('top',topsSM[index])

    topsSM[index] += parseInt($(this).css('height'),10) + 10
})

$containerProjectSM.css('height', Math.max(...topsSM))

var topsXS = 0
$($containerProjectXS.children()).each(function(){
    $(this).css('left', 0)
        .css('top',topsXS)

    topsXS += parseInt($(this).css('height'),10) + 10
})

$containerProjectXS.css('height', topsXS)
}
resize()

$(window).resize(resize)
