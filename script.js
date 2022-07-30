$( document ).ready(function() {
    console.log( "ready!" );
    setInterval(preloaderTimeout, 5000)
    function preloaderTimeout(){
        $('.preloader-wrapper').fadeOut(100);
        $('.preloader-wrapper').addClass('invisible')
        $('.login-section').removeClass('d-none')
    }

    $('.login-btn').onClick(()=>{
        
    });
});