$('.questions.new').ready(function(){
	$('form').on('submit', function(evt){
		evt.preventDefault();
		// console.log('saving question')
		var userId = $('#question_user_id').val();
		var title = $('#question_title').val();
		var content = $('#question_content').val();
		var tags = $('#question_tags').val();
		$.ajax({
			url: '/questions',
			type: 'POST',
			dataType: 'json',
			data: {
				question: {
					user_id: userId,
					title: title,
					content: content,
					tags: tags
				}
			},
			success: function(data){
				console.log(data)
				parser(data.content)
			}
		})
	})
})

function parser(input){
	// var replacer = /---/;
	// input.replace(replacer, '<code>')
}


