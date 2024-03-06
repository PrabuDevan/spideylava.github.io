document.addEventListener("DOMContentLoaded", function() {
    // Get all the links inside the navigation menu
    var links = document.querySelectorAll(".frame-20-S87 li a");

    // Add click event listeners to all the links
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Remove the "active" class from all links
            links.forEach(function(link) {
                link.classList.remove("active");
            });

            // Add the "active" class to the clicked link
            this.classList.add("active");
        });
    });
});
