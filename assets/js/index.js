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
document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split('/').pop(); // Get the current page filename
    var navLinks = document.querySelectorAll('.frame-20-S87 li a');

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Add 'active' class to the link corresponding to the current page
        }
    });
});