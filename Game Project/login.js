var valid_id = "IGA";
var valid_pw = "IGA";

var id = document.getElementById("login");
var pw = document.getElementById("pw");
var submit = document.getElementById("submit");

submit.onclick = function() {
  if (valid_id == id.value)
   if (valid_pw == pw.value)
    window.location.href = "../prg4.html"
}
