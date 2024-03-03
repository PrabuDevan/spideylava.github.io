var counter = 1;
document.getElementById('radio' + counter).checked = true;
if (document.getElementById('radio' + 1).checked) {
    updateRadio(); // If not checked, manually trigger the updateRadio function
} else {
    document.getElementById('radio' + counter).checked = true;
    updateRadio(); // If not checked, manually trigger the updateRadio function

}


setInterval(updateRadio, 2500);

function updateRadio() {
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter > 2 ){
        counter = 1;
    }
}