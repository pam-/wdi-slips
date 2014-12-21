$(document).ready(function(){
	$('#hamburger').on('click', function(){
		$('nav, body, .wrapper').toggleClass('active');
	});
})