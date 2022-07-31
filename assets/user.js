$(document).ready(
    ()=>{
        $('.emergencey-btn').click(
            ()=>{
                const userLoc = navigator.geolocation.getCurrentPosition(sendEmail)
                function sendEmail(por) {
                    var userLocation = {
                        lat: por.coords.latitude,
                        log: por.coords.longitude,
                        time: moment(por.coords.timestamp).format('MMMM Do YYYY, h:mm:ss a')
                    }
                    console.log(userLocation)
                    Email.send({
                        Host : "smtp.elasticemail.com",
                        Username : "ganapathy1red1@gmail.com",
                        Password : "2348032B8C0C166AA244043E1013E906F67B",
                        To : 'cmdinesh03@gmail.com',
                        From : "ganapathy1red1@gmail.com",
                        Subject : "Test email",
                        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
                    }).then(
                      message => alert(message)
                    );
                    }
            }
        );
    }
);