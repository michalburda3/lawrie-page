$(document).ready(function(){

	$('.counter').counterUp({
    delay: 10,
    time: 1700
	});


	$("#span_toggle_1").click(function(){
		$("#toggle_list_1").slideToggle(450);
	});
	$("#span_toggle_2").click(function(){
		$("#toggle_list_2").slideToggle(450);
	});
	$("#span_toggle_3").click(function(){
		$("#toggle_list_3").slideToggle(450);
	});
	$("#span_toggle_4").click(function(){
		$("#toggle_list_4").slideToggle(450);
	});



	
});    


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

