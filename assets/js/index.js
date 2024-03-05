// $(document).ready(function() {
//     $('.frame-20-S87 li a').click(function() {
//         // Remove active class from all links
//         $('.frame-20-S87 li a').removeClass('active');
//         // Add active class to the clicked link
//         $(this).addClass('active');
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("worksLink").addEventListener("click", function() {
        // Remove active class from all navbar links
        var navbarLinks = document.querySelectorAll(".frame-20-S87 li a");
        navbarLinks.forEach(function(link) {
            link.classList.remove("active");
        });
        // Add active class to the clicked navbar link
        this.classList.add("active");
    });
});
