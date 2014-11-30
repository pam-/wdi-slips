$('.topics.index').ready(function(){
	// alert('hey')
})

$('.topics.show').ready(function(){
	console.log('Hey')

	$('form').on('submit', function(evt){
		evt.preventDefault();
		var content = $('.question-content').val();
		var topicId = $('.question-content').data('title')
		$('.question-content').val("");
		$.ajax({
			url: '/questions',
			type: 'POST',
			datatype: 'json',
			data: {question: 
				{ content: content,
					topic_id: topicId
				}
			},
			//to be fixed
			success: function(){
				$('.questions').append('<p>' + content + ' ' + '<span class="delete">x</span></p>')
			}
		})
	})
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