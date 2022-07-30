$(document).ready(()=>{
    $('#signup-btn').click( 
        ()=>{
            var userDetails = {
                userName: $('#signup-uname').val(),
                userPass: $('#signup-pass').val(),
                userEmail: $('#signup-email').val()
            }
            var userStore = $('#signup-uname').val();
            console.log(userDetails)
            localStorage.setItem(`${userStore}`, JSON.stringify(userDetails));
            let a = JSON.parse(localStorage.getItem(`${userStore}`));
            console.log(a)        
            location.href = '../index.html'
        }
    );
});