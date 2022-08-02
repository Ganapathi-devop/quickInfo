$(document).ready(
    ()=>{ 
        
        var adminDetails = JSON.parse(localStorage.getItem("adminDetails"));
        console.log(adminDetails)
        $('#editDetails-user').attr("href", `./editDetails.html?admin=${adminDetails.adminName}`)
        console.log(localStorage.getItem("btnClicked"));
        console.log(localStorage.length);
        var btnClicked = localStorage.getItem("btnClicked");
        $('#btnClicked').text(btnClicked);
        $('#no-of-user-h1').text(localStorage.length-2);
        // function for three dot btn
        $('.three-dot-btn').click(
            ()=>{
                
                console.log($('.three-dot-menu').hasClass('.d-none'))
                if($('.three-dot-menu').hasClass('d-none')){
                    $('.three-dot-menu').removeClass('d-none');
                }else{
                    $('.three-dot-menu').addClass('d-none');
                }
               
            }
        );
        
        $('#logout-user').click(
            ()=>{
                location.href = '../index.html'
            }
        );
    }
);