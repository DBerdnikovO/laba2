var textbox = document.getElementById("input_box")
var label = document.getElementById("label")


textbox.addEventListener("keydown", function() {
    label.style.display = "none"
}, false);

function checkInp()
{
    var x=document.forms["myForm"]["age"].value;
    var regex=/^[0-9]+$/;
    if (!x.match(regex))
    {
        alert("Must input numbers");
        return false;
    }
}

function showAlert(id) {
    if (confirm("Are you sure you want to delete the worker?")) {
        hideRow(id);
    }
}
function valueSender()
{
    var a=document.getElementById("myInput").value;
    localStorage.setItem("myValue", a);
    window.location.href="createNewEmployee.html";
}

function hideRow(id) {
    var row = document.getElementById(id);
    row.style.display = 'none';
}
