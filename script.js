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
    document.getElementById("name").value = "";
    document.getElementById("mailid").value = "";
    document.getElementById("msg").value = "";
    // document.getElementById("message").style.width = "0";
    alert("Message Sent")


}
function connectMe() {
    document.getElementById("message").style.width = '250px';

}