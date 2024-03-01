function openSwiggyPopup() {
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

    // Open a new window with the Swiggy webpage at the calculated position
    var popupWindow = window.open(swiggyUrl, "SwiggyPopup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);

    // Focus on the new window
    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("Popup window blocked! Please allow popups for this site.");
    }
}