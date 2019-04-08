$(document).ready(function(){
	$(function() {
	 $(".main_gallery").owlCarousel({
		nav:true,
		loop:true,
		items: 1, 
		dots: false,
		slideSpeed: 1500,
		autoplay: true,
		autoplayTimeout: 4500,
		margin: 100,
		navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
	 });

	});
	
	$(function() {
	 $(".carousel-two").owlCarousel({
		nav:true,
		loop:true,
		items: 2, 
		dots: false,
		slideSpeed: 1500,
		autoplay: false,
		autoplayTimeout: 4500,
		margin: 0,
		navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
	 });

	});
	
	
	$(function() {
	 $(".carousel-three").owlCarousel({
		nav:true,
		loop:true,
		items: 3, 
		dots: false,
		slideSpeed: 1500,
		autoplay: false,
		autoplayTimeout: 4500,
		margin: 0,
		navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
	 });

	});
	
	
	$(function() {
	 $(".carousel-four").owlCarousel({
		nav:true,
		loop:true,
		items: 4, 
		dots: false,
		slideSpeed: 1500,
		autoplay: false,
		autoplayTimeout: 4500,
		margin: 0,
		navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
	 });

	});
	
	$(function() {
		$("#castom-pagination").pagination({
			items: 100,
			itemsOnPage: 8,
			cssStyle: 'castom-theme',
			pages: 2,
			prevText: 'пред',
			nextText: 'след',
		});
	});
	

	
	
});

