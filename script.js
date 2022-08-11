function openNav() {
    document.getElementById("navigation").style.width = "250px";
    // document.getElementById("container").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("navigation").style.width = "0";
    // document.getElementById("container").style.marginRight = "0";
}
function submitMessage() {
    var Message = document.getElementById("msg").value;
    alert("Message Sent")

}
function connectMe() {
    document.getElementById("contactMe").style.width = '500px';

}