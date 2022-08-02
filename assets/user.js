$(document).ready(
    ()=>{
        let searchParams = new URLSearchParams(window.location.search)
        var userName = searchParams.get('username')
        const adminEmail = "cmdinesh03@gmail.com"
        const emailApiKey = "CF99C4FBE74E30C60BC8A3A3849CB136A7A72661864C6E3BD615C8AB83E02D9D7757E35225CF47D23E1FD7A8D4A11F91";
        var btnClicked = JSON.parse(localStorage.getItem("btnClicked"));
        
        async function sendingEmail(infos, result){
            // function to send email from user to admin via elaticemail
            // info is a obj with all the information needed & loc consist of the place address that converts from getLocFromApi
            var loc = result;
            const response = await fetch(`https://api.elasticemail.com/v2/email/send?apikey=${emailApiKey}&from=${infos.userDetails.userEmail}&fromName=${infos.userDetails.userName}&to=${adminEmail}&body=${infos.bodyText + " " + loc}&subject=${infos.subject}`)
            let status = response.json();
            console.log(status)
        }
        async function getLocFromApi(infos){
            // function to convert coords of user to readable address 
            const retrived = await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.68b2156c752a365c5c8694ca96ab81b7&lat=${infos.userLocation.lat}&lon=${infos.userLocation.long}&format=json`).then((data) => data.json()).catch((error) => console.log(error))
            var result = retrived.display_name;
            sendingEmail(infos, result)
        }
        function getLocFromNav(por) {
            var userLocation = {
                lat: por.coords.latitude,
                long: por.coords.longitude,
                time: moment(por.coords.timestamp).format('MMMM Do YYYY, h:mm:ss a')
            }
            // localStorage has the sign up details of all users which can be get by the user name
            var userDetails = JSON.parse(localStorage.getItem(userName));
            var infos = {
                userLocation,
                bodyText: `from: ${userDetails.userName}. its urgent I need help. Message send time: ${userLocation.time}. Location:`,
                subject: "emergency Email",
                userDetails
            }
            getLocFromApi(infos);
        }
        
        $('.emergencey-btn').click(
            ()=>{
                const userLoc = navigator.geolocation.getCurrentPosition(getLocFromNav);
                // no of time emergency-btn clicked was stored and can be used at admin side
                btnClicked += 1;
                localStorage.setItem("btnClicked", btnClicked)
            }
        );

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
        $('#editDetails-user').attr("href", `./editDetails.html?username=${userName}`)
        $('#logout-user').click(
            ()=>{
                location.href = '../index.html'
            }
        )
    }
);




// Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "ganapathy1red1@gmail.com",
//     Password : "2348032B8C0C166AA244043E1013E906F67B",
//     To : 'cmdinesh03@gmail.com',
//     From : "ganapathy1red1@gmail.com",
//     Subject : "Test email",
//     Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
// }).then(
//   message => alert(message)

// );