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

var $containerProject = $('#Projects .container')
var colWidth = parseInt($containerProject.css('width'),10)/3

var tops = [0,0,0]
$($containerProject.children()).each(function(index){
    index %= 3
    $(this).css('left', colWidth*index)
        .css('top',tops[index])

    tops[index] += parseInt($(this).css('height'),10) + 10
})

$containerProject.css('height', Math.max(...tops))

$(window).resize(function(){
    colWidth = parseInt($containerProject.css('width'),10)/3
    
        var top = [0,0,0]
        $($containerProject.children()).each(function(index){
            index %= 3
            $(this).css('left', colWidth*index)
                .css('top',top[index])

            top[index] += parseInt($(this).css('height'),10)
        })
    $containerProject.css('height', Math.max(...top))
    
})