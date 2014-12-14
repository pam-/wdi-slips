$('.questions.index').ready(function(){
	$('form').on('submit', function(evt){
		evt.preventDefault();
		// console.log('saving question')
		var title = $('#question_title').val();
		var content = $('#question_content').val();
		var tags = $('#question_tags').val();
		$.ajax({
			url: '/questions',
			type: 'POST',
			dataType: 'json',
			data: {
				question: {
					title: title,
					content: content,
					tags: tags
				}
			},
			success: function(data){
				// console.log(data)
				$('input[type="text"]').val(' ');
				$('textarea').val(' ');
				$('.questions-list').prepend('<p><a href="questions/' + data.id + '">' + title + '</a></p>')
			}
		})
	})
})