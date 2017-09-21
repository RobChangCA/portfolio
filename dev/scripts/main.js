const js = {};

    
js.scroll = function(){
	var scroll = new SmoothScroll('a[href*="#"]', {
		// Selectors
		ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
		header: null, // Selector for fixed headers (must be a valid CSS selector)

		// Speed & Easing
		speed: 500, // Integer. How fast to complete the scroll in milliseconds
		offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
		easing: 'easeInOutCubic', // Easing pattern to use
		customEasing: function (time) {}, // Function. Custom easing pattern

		// Callback API
		before: function () {}, // Callback to run before scroll
		after: function () {} // Callback to run after scroll
	});
}
js.menu = function(){
	$('.hamburger').on('click', function(){
		$('.hamburger').hide();
		$('.hamburger__menu').css('display', 'flex');
	});
	$('.hamburger__item').on('click', function(){
		$('.hamburger__menu').hide();
		$('.hamburger').show();
	});
}
js.credit = () =>{
	console.log('Photo by Pam Pamlau');
}

js.init = function(){
	AOS.init();
	js.scroll();
	js.menu(); 
	js.credit();
};




$(function(){
	js.init();
});