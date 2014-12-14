$('.questions.index').ready(function(){
	$('form').on('submit', function(evt){
		evt.preventDefault();
		console.log('submitting attempt')
		var content = $('#question_content').val();
		var tags = $('#question_tags').val();
		$.ajax({
			url: '/questions',
			type: 'POST',
			dataType: 'json',
			data: {
				question: {
					content: content,
					tags: tags
				}
			},
			success: function(data){
				console.log(data)
				$('input[type="text"]').val(" ");
				$('.questions-list').prepend('<p>' + content + '</p>')
			}
		})
	})
})