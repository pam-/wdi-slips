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
	$('form').on('submit', function(evt){
		evt.preventDefault();
		var content = $('.objective-content').val();
		var topicId = $('.objective-content').data('title')
		$('.objective-content').val("");
		$.ajax({
			url: '/objectives',
			type: 'POST',
			datatype: 'json',
			data: {objective: 
				{ content: content,
					topic_id: topicId
				}
			},
			//to be fixed
			success: function(){
				$('.objectives').append('<p>' + content + ' ' + '<span class="delete">x</span></p>')
			}
		})
	})
	$('.delete').on('click', function(){
		var objective = $(this).parent()
		var id = objective.data('id');
		console.log(id)
		$.ajax({
			url: '/objectives/'+id,
			type: 'DELETE',
			success: function(){
				console.log('gone');
				objective.hide();
			}
		})
	})
})