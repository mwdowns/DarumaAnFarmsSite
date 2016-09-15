$(document).ready(function() {
	$(".navBox").mouseenter(function() {
		$(this).css("color", "#82b472");
		$(this).animate({
			width: "+=15px"
		});
	});
	$(".navBox").mouseleave(function() {
		$(this).css("color", "white");
		$(this).animate({
			width: "-=15px"
		});
	});
});
