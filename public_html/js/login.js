$(function () {
    $("#login").submit(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        if (username != null && password != null) {
            $.post("http://marsn.web44.net/getsalt.php", {
                username: username
            }, function (data) {
                //if (salt != "error") {
                //var hash = CryptoJS.SHA256(password + salt);
                //var success = makeAjaxRequest("http://marsn.web44.net/login/login.php", "POST", "username=" + username + "&password=" + hash);
                //if (success != "true") {
                // alert("Invalid Username or Password");
                //}
                //} else {
                //    alert("Database Error");
                //}
                alert(data);
            });
        } else
            alert("You must enter a username and password");
        return false;
    });
});
