$('.mobileNav').hide(0);


$('#xs-img').click(function(){
    $('.mobileNav.hidden-sm').slideToggle();
});
$('#sm-img').click(function(){
    $('.mobileNav.hidden-xs').slideToggle();
});

$('#stopGif').click(function(){
    console.log('hey')
    $('#header-image').toggleClass('stop')
});

var $containerProjectMD = $('#Projects div.container.hidden-xs.hidden-sm')
var $containerProjectSM = $('#Projects div.container.hidden-xs.hidden-md')
function resize(){
var topsMD = [0,0,0]
$($containerProjectMD.children()).each(function(){
    var index = topsMD.indexOf(Math.min(...topsMD))
    $(this).css('left', 100/3 *index + '%')
        .css('top',topsMD[index])
        
    topsMD[index] += parseInt($(this).css('height'))
})

var topsSM = [0,0]
$($containerProjectSM.children()).each(function(){
    var index = topsSM.indexOf(Math.min(...topsSM))
    $(this).css('left', 50*index  + '%')
        .css('top',topsSM[index])

    topsSM[index] += parseInt($(this).css('height'))
})
}
window.onload = resize;
$(window).resize(resize);