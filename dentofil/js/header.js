$(document).ready(function() {
  var toggle = 0;
  $(".theline").click(function() {
    if (!toggle) {
      $("header").css('height', '100%');
      toggle = 1;
    } else {
      $("header").css('height', '100px');
      toggle = 0;
    }
  });
});