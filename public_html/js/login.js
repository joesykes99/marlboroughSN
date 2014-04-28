$(function () {
    $("#login").submit(function () {
        var username = $("#username").value;
        var password = $("#password").value;
        var salt = makeAjaxRequest("http://marsn.web44.net/login/getsalt.php", "POST", "username=" + username);
        var hash = CryptoJS.SHA256(password + salt);
        var success = makeAjaxRequest("http://marsn.web44.net/login/login.php", "POST", "username=" + username + "&password=" + hash);
        if (success != "true") {
            alert("Invalid Username or Password");
        }
        return false;
    });
});

function makeAjaxRequest(url, method, params) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open(method, url, false);
    xmlhttp.send(params);
    return xmlhttp.responseText;
}
