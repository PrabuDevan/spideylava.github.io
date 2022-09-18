


// $(function() {
//   $(window).on("scroll", function() {
//       if($(window).scrollTop() > 50) {
//           $(".alk").addClass("active");
//       } else {
//          $(".alk").removeClass("active");
//       }
//   });
// });

window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#5F2314";
    document.getElementById("nav_hover_lines").style.borderBottom = "unset";
    // document.getElementById("navbar").style.borderBottom = "rgba(255, 255, 255, 0.5) solid 1px";
    
// 
  } else {
    document.getElementById("nav_hover_lines").style.borderBottom = "rgba(255, 255, 255, 0.5) solid 1px";
    // document.getElementById("navbar").style.borderBottom = "unset";
    document.getElementById("navbar").style.background = "none";
  }
}

$(".containersss  img").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});