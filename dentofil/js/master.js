/**
* @Author: ananayarora
* @Date:   2016-11-02T16:50:25+05:30
* @Last modified by:   ananayarora
* @Last modified time: 2016-11-02T17:34:25+05:30
*/



// Ripple ============================================


(function (window, $) {

  $(function() {


    $('.ripple').on('click', function (event) {
      event.preventDefault();

      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;



      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });

  });

})(window, jQuery);

// DOM Ready =========================
$(document).ready(function(){
    // Video =========================
    $(".video").click(function(){
        $(".watch").hide();
        // alert('hello');
        $("iframe").show();
    });
    var toggle = 0;
    $(".gap").click(function(){
        if (!toggle) {
            $("header").css('height','100%');
            toggle = 1;
        } else {
            $("header").css('height','100px');
            toggle = 0;
        }
    });
    new Vivus('big-logo', {duration: 200}, function(){
        $("#big-logo").animate({
            'opacity':0.2
        }, function() {
            $(".midside h1").delay(500).animate({
                'opacity':1
            });
        });
    });
});
