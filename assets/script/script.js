


$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".alk").addClass("active");
      } else {
         $(".alk").removeClass("active");
      }
  });
});