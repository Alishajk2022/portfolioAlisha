function openNav() {
    document.getElementById("navBar").style.width = "250px";
}

function closeNav() {
    document.getElementById("navBar").style.width = "0";
}
function closeMsg() {
    document.getElementById("message").style.width = "0";
}
function submitMessage() {
    var Message = document.getElementById("msg").value;
    document.getElementById("name").value = "";
    document.getElementById("mailid").value = "";
    document.getElementById("msg").value = "";
    alert("Message Sent")
}
function connectMe() {
    document.getElementById("message").style.width = '250px';

}