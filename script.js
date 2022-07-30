$( document ).ready(function() {
    console.log( "ready!" );
    setInterval(preloaderTimeout, 5000)
    function preloaderTimeout(){
        $('.preloader-wrapper').fadeOut(100);
        $('.preloader-wrapper').addClass('invisible')
        $('.login-section').removeClass('d-none')
    }

    $('.login-btn').click(()=>{
        var userDetails ={
            uname: $('#login-input-uname').val(),
            pass: $('#login-input-pass').val()
        }
        var existingUsers = JSON.parse(localStorage.getItem(userDetails.uname));
        console.log(existingUsers.userName)
        console.log(existingUsers.userPass)
        if(userDetails.uname === existingUsers.userName && userDetails.pass === existingUsers.userPass){
            console.log('logged in')
        }else{
            alert("check for pass")
        }
    });
});