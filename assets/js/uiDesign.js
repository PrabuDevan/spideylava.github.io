// function openSitePopup() {
//     // URL of the Swiggy webpage
//     var swiggyUrl = "https://www.avairsense.com/";

//     // Calculate the position for the popup window to be centered
//     var screenWidth = window.screen.width;
//     var screenHeight = window.screen.height;

//     // Set the desired width and height for the popup window
//     var popupWidth = 1300;
//     var popupHeight = 700;

//     // Calculate the position to center the popup window
//     var leftPosition = (screenWidth - popupWidth) / 2;
//     var topPosition = (screenHeight - popupHeight) / 2;

//     // Open a new window with the Swiggy webpage at the calculated position
//     var popupWindow = window.open(swiggyUrl, "SwiggyPopup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);

//     // Focus on the new window
//     if (popupWindow) {
//         popupWindow.focus();
//     } else {
//         alert("Popup window blocked! Please allow popups for this site.");
//     }
// }

function openSitePopup() {
    // URL of the Swiggy webpage
    var swiggyUrl = "https://www.avairsense.com/";

    // Calculate the position for the popup window to be centered
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    // Set the desired width and height for the popup window
    var popupWidth = 1300;
    var popupHeight = 700;

    // Calculate the position to center the popup window
    var leftPosition = (screenWidth - popupWidth) / 2;
    var topPosition = (screenHeight - popupHeight) / 2;

    // Additional options for styling
    var additionalOptions = ",status=1,toolbar=0,menubar=0,location=0";

    // Open a new window with the Swiggy webpage at the calculated position
    var popupWindow = window.open(swiggyUrl, "SwiggyPopup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition + additionalOptions);

    // Focus on the new window
    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("Popup window blocked! Please allow popups for this site.");
    }

    // Apply CSS styles for rounded corners
    if (popupWindow) {
        popupWindow.document.body.style.borderRadius = "30px"; // Adjust the radius as needed
        popupWindow.document.body.style.overflow = "hidden"; // Optional: to prevent content overflow
    }
}

function showPopup() {
    document.getElementById("popup").style.display = "block";
    // document.getElementById("overlay").style.display = "block";
}

// Function to hide the popup
function hidePopup() {
    document.getElementById("popup").style.display = "none";
    // document.getElementById("overlay").style.display = "none";
}