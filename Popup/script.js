$(document).ready(function () {
  var toggle = false;
  $(".btn").click(function () {
    if (toggle == false) {
      $(".pop_box").addClass("show");
      console.log("hii");
      toggle = true;
    } else if (toggle == true) {
      console.log("hii");
      $(".pop_box").removeClass("show");
      toggle = false;
    }
  });
});
