jQuery('document').ready(function() {

	var Power = true;

	function_1 = function(){
    if (Power == true) {

      $('.document-nav').css('display', 'none');
      Power = false;

      if ($(window).width() >= '800') {
        $('.nav').css('width', '60px');
        $('.nav').css('height', '40px');
        $('.nav').css('position', 'relative');
        $('.nav').css('float', 'right');
      } else if ($(window).width() < '800') {
        $('.nav').css('width', '100%');
        $('.nav').css('height', '29px');
      }

    } else if (Power == false) {

      $('.document-nav').css('display', 'block');
      Power = true;

      if ($(window).width() >= '800') {
        $('.nav').css('width', '100%');
        $('.nav').css('position', 'fixed');
        $('.nav').css('height', '40px');
      } else if ($(window).width() < '800') {
        $('.nav').css('height', '160px');
        $('.nav').css('width', '100%');
        $('.nav').css('position', 'fixed');
      }


    }
  }

	jQuery('#li-open-nav').click(function_1);
});
