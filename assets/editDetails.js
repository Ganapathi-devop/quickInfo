$(document).ready(
    ()=>{
        $('#checkbox-editDetails').click(
            ()=>{
                if($('#checkbox-editDetails').prop('checked')){
                    $('#password-editDetails').attr("type", "text");
                }else{
                    $('#password-editDetails').attr("type", "password");
                }
            }
        )
       if(window.location.href.indexOf("username") > -1){
        let searchParams = new URLSearchParams(window.location.search)
        const userName = searchParams.get('username')
        console.log(userName)
        var userDetails = JSON.parse(localStorage.getItem(userName))
        console.log(userDetails)
        $('#username-editDetails').val(`${userDetails.userName}`)
        $('#password-editDetails').val(`${userDetails.userPass}`)
        $('#email-editDetails').val(`${userDetails.userEmail}`)
        

        $('#submit-btn-editDetails').click(
            ()=>{
                editedUserDetails = {
                    userName: $('#username-editDetails').val(),
                    userPass: $('#password-editDetails').val(),
                    userEmail: $('#email-editDetails').val()
                }
                localStorage.removeItem(userDetails.userName);
                localStorage.setItem(`${editedUserDetails.userName}`, JSON.stringify(editedUserDetails))                
                location.href = `./user.html?username=${editedUserDetails.userName}`
                console.log(localStorage.getItem(editedUserDetails.userName))
                console.log(localStorage.getItem(userDetails.userName))
             }
        );
    }else{
        let searchParams = new URLSearchParams(window.location.search)
        const admin = searchParams.get('admin');
        console.log(admin)
        var adminDetails = JSON.parse(localStorage.getItem(admin))
        console.log(adminDetails)
        $('#username-editDetails').val(`${adminDetails.adminName}`)
        $('#password-editDetails').val(`${adminDetails.adminPass}`)
        $('#email-editDetails').val(`${adminDetails.adminEmail}`)

        $('#submit-btn-editDetails').click(
            ()=>{
                editedAdminDetails = {
                    adminName: $('#username-editDetails').val(),
                    adminPass: $('#password-editDetails').val(),
                    adminEmail: $('#email-editDetails').val()
                }
                localStorage.removeItem(adminDetails.adminName);
                localStorage.setItem(`${editedAdminDetails.adminName}`, JSON.stringify(editedAdminDetails))                
                location.href = `./user.html?username=${editedAdminDetails.adminName}`
                console.log(localStorage.getItem(editedAdminDetails.adminName))
                console.log(localStorage.getItem(adminDetails.adminName))
             }
        );
        }
    }
);