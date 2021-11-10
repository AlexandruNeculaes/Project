function myFunction() {

    event.preventDefault();

    var fname = document.getElementById("fname").value;

    var mail = document.getElementById("email").value;

    alert(fname+", thank you for your details. We will be in touch via "+mail+" shortly.");

    var x=document.getElementById("form");

    x.style.display = "none";

}