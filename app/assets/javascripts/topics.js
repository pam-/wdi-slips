$('.topics.index').ready(function(){
	// console.log('oh ay')
	$('form').on('submit', function(evt){
		evt.preventDefault();
		var list = $('.topics-list')
		var topicName = $('input[type="text"]').val()

		$.ajax({
			url: '/topics',
			type: 'POST',
			data: {
				topic: {title: topicName}
			},
			success: function(){
				list.append('<div><p>' + topicName + '</p></div>')
			}
		})
	})
})

$('.topics.show').ready(function(){
	var topicId = $('.objectives').data('id')
	$('form').on('submit', function(evt){
		evt.preventDefault();
		var content = $('.objective-content').val();
		$('.objective-content').val("");
		$.ajax({
			url: '/topics/' + topicId + '/objectives',
			type: 'POST',
			dataType: 'json',
			data: {objective: 
				{ content: content,
					topic_id: topicId
				}
			},
			//to be fixed
			success: function(data){
				console.log(data)
				$('.objectives').append('<p class="single-objective" data-id="' + data.id + '">' + content + ' ' + '<span class="delete small-button">x</span></p>')
			}
		})
	})
	$('.objectives').delegate('.delete','click', function(){
		var topicId = $('.objectives').data('id')
		var objective = $(this).parent()
		var id = objective.data('id');
		console.log(id)
		$.ajax({
			url: '/topics/' + topicId + '/objectives/' + id,
			type: 'DELETE',
			success: function(){
				// console.log('gone');
				objective.remove();
			}
		})
	})	
})
