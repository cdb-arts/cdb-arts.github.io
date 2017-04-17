// JavaScript Document
$(window).on('scroll', function(){
	triggerAnimation();
});
 
function triggerAnimation(){
	if(MQ == 'desktop') {
		//if on desktop screen - animate sections
		window.requestAnimationFrame(animateSection);
	} // .....
}
 
function animateSection () {
	$('.cd-section').each(function(){
		var actualBlock = $(this),
			scale,
			translate,
			opacity;
 
		//evaluate scale/translate values
		//...
 
		scaleBlock(actualBlock.find('.cd-block'), scale, opacity);
		translateBlock(actualBlock.find('.cd-half-block').eq(0), '-'+translate);
		translateBlock(actualBlock.find('.cd-half-block').eq(1), translate);	
	});
}
 
function translateBlock(elem, value) {
	elem.css({
	 	//...
		'transform': 'translateX(' + value + ')',
	});
}
 
function scaleBlock(elem, value, opac) {
	elem.css({
	    //...
		'transform': 'scale(' + value + ')',
		'opacity': opac
	});
}