$('.static_pages.home').ready(function(){
	$('button').on('click', function(){
		$.ajax({
			type: 'GET',
			url: '/home',
			dataType: 'json',
			success: function(data){
				console.log(data)
			}
		})
	})
})