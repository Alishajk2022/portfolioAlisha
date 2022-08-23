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
    var Name = document.getElementById("name").value;
    var MailId = document.getElementById("mailid").value;
    var Message = document.getElementById("msg").value;

    if (Name == "" || Name == null) {
        alert("Name must be filled out");
        return false;
    }
    if (MailId == "" || MailId == null) {
        alert("Mail id is to be filled");
        return false;
    }
    if (Message == "" || Message == null) {
        alert("Please add message to continue");
        return false;
    }
    document.getElementById("name").value = "";
    document.getElementById("mailid").value = "";
    document.getElementById("msg").value = "";
    alert("Message Sent")
}

function connectMe() {
    document.getElementById("message").style.width = '250px';

}
function closeSideBar() {
    document.getElementById("menu").style.opacity = 0;


}
function openSideBar() {
    document.getElementById('menu').style.opacity = 100;

}