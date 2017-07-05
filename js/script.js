window.onscroll = function(){
    var header = document.getElementsByTagName('header')[0];
    if(window.scrollY >= window.innerHeight){
        header.style.position = 'fixed';
        header.style.top = '0px';
    }
    else{
        header.style.position = 'relative';
    }
};