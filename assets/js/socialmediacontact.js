function openWhatsAppPopup() {

    var phoneNumber = "+919790963560"; 
    var message = "Hello from my portfolio!"; 
    
    var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    var popupWidth = 1300;
    var popupHeight = 700;

    var leftPosition = (screenWidth - popupWidth) / 2;
    var topPosition = (screenHeight - popupHeight) / 2;

    // Open WhatsApp in a new window
    // var whatsappWindow = window.open(whatsappUrl, "_blank");

    var popupWindow = window.open(whatsappUrl, "WhatsappPopup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);
    var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("Popup window blocked! Please allow popups for this site.");
    }

}

// function openInstaPopup() {

//     var phoneNumber = "+919790963560"; 
//     var message = "Hello from my portfolio!"; 
    
//     var whatsappUrl = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

//     var screenWidth = window.screen.width;
//     var screenHeight = window.screen.height;

//     var popupWidth = 1300;
//     var popupHeight = 700;

//     var leftPosition = (screenWidth - popupWidth) / 2;
//     var topPosition = (screenHeight - popupHeight) / 2;

//     var popupWindow = window.open(whatsappUrl, "WhatsappPopup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);

//     if (popupWindow) {
//         popupWindow.focus();
//     } else {
//         alert("Popup window blocked! Please allow popups for this site.");
//     }
    
// }

function openLinkedInPopup() {

    var linkedinUrl = "http://linkedin.com/in/pandiraja-thennavan-284882212";

    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    var popupWidth = 1300;
    var popupHeight = 700;

    var leftPosition = (screenWidth - popupWidth) / 2;
    var topPosition = (screenHeight - popupHeight) / 2;

    var popupWindow = window.open(linkedinUrl, "LinkedInPopup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);


    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("Popup window blocked! Please allow popups for this site.");
    }
    
}

function openInstapPopup() {

    var instaUrl = "https://www.instagram.com/_pandiraj_/?utm_source=qr&r=nametag";

    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    var popupWidth = 1300;
    var popupHeight = 700;

    var leftPosition = (screenWidth - popupWidth) / 2;
    var topPosition = (screenHeight - popupHeight) / 2;

    var popupWindow = window.open(instaUrl, "InstaPopup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);


    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("Popup window blocked! Please allow popups for this site.");
    }
    
}

function openMailPopup() {

    var mailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=pandiraj2711@gmail.com";

    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    var popupWidth = 1300;
    var popupHeight = 700;

    var leftPosition = (screenWidth - popupWidth) / 2;
    var topPosition = (screenHeight - popupHeight) / 2;

    var popupWindow = window.open(mailUrl, "InstaPopup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);


    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("Popup window blocked! Please allow popups for this site.");
    }
    
}