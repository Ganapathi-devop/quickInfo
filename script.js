$(document).ready(function () {
  const adminDetails = {
    adminName: "admin1",
    adminPass: "12admin",
    adminEmail: "cmdinesh03@gmail.com",
  };
  localStorage.setItem(`${adminDetails.adminName}`, JSON.stringify(adminDetails))
  setInterval(preloaderTimeout, 5000);
  function preloaderTimeout() {
    $(".preloader-wrapper").fadeOut(100);
    $(".preloader-wrapper").addClass("invisible");
    $(".login-section").removeClass("d-none");
  }
  $(".login-btn").click(() => {
    var newUserDetails = {
      uname: $("#login-input-uname").val(),
      pass: $("#login-input-pass").val(),
    };
    if (
      newUserDetails.uname === adminDetails.adminName &&
      newUserDetails.pass === adminDetails.adminPass
    ) {
      location.href = "./assets/admin.html";
    } else {
      var existingUsers = JSON.parse(
        localStorage.getItem(newUserDetails.uname)
      );
      if (
        newUserDetails.uname === existingUsers.userName
      ) {
        if (
          newUserDetails.uname === existingUsers.userName &&
          newUserDetails.pass === existingUsers.userPass
        ) {
          location.href = `./assets/user.html?username=${newUserDetails.uname}`;
        } else {
          alert("check for pass");
        }
      } else {
        alert("check for username");
      }
    }
  });
});
