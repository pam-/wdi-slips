$('.topics.index').ready(function(){
	// alert('hey')
})

$('.topics.show').ready(function(){
	console.log('Hey')
	$('.delete').on('click', function(){
		var question = $(this).parent() 
		var id = question.data('id');
		console.log(id)
		$.ajax({
			url: '/questions/'+id,
			type: 'DELETE',
			success: function(){
				console.log('gone');
				question.hide();
			}
		})
	})
})