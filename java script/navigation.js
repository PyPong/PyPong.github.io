jQuery('document').ready(function() {

	var Power;

	if ($(window).width() <= '800') {
		Power = false;
		$('.nav').css('width', '100%');
		$('.nav').css('height', '29px');
		$('.document-nav').css('display', 'none');
	} else if ($(window).width() > '800') {
		Power = true;
	}

	function_1 = function(){
    if (Power == true) {
      if ($(window).width() > '800') {
        $('.nav').css('width', '60px');
        $('.nav').css('height', '40px');
        $('.nav').css('float', 'right');
      } else if ($(window).width() <= '800') {
        $('.nav').css('width', '100%');
        $('.nav').css('height', '29px');
      }

      $('.document-nav').css('display', 'none');
      Power = false;


    } else if (Power == false) {

      if ($(window).width() > '800') {
        $('.nav').css('width', '100%');
        $('.nav').css('height', '40px');
      } else if ($(window).width() <= '800') {
        $('.nav').css('height', '160px');
        $('.nav').css('width', '100%');
      }

      $('.document-nav').css('display', 'block');
      Power = true;
    }
  }

	jQuery('#li-open-nav').click(function_1);
});
