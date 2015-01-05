function Counter(points, idNum){
	this.points = points;

	this.idNum = idNum;

	this.addPoints = function(){
		this.points++;
		this.updatePoints();
	};

	this.subPoints = function(){
		this.points--;
		this.updatePoints();
	}

	this.updatePoints = function(){
		$.ajax({
			type: 'PATCH',
			dataType: 'json',
			url: '/questions/' + this.idNum,
			data: { question: {points: this.points} },
			success: $('.question-points').html(this.points)
		})
	}
}

$('.questions.show').ready(function(){

	// for question...
	var questionId = $('.question-body').data('id');
	var questionPoints = $('.question-points').html();
	var questionCounter = new Counter(questionPoints, questionId)
	$('.question-up').on('click', function(){
		questionCounter.addPoints();
	})
	$('.question-down').on('click', function(){
		questionCounter.subPoints();
	})

	//for answers...
	$('.answer-up').on('click', function(){
		var answerId = $(this).parent().parent().parent().data('id');
		var answerPoints = $(this).siblings().eq(0).html();
		var newPoints = parseInt(answerPoints) + 1;

		$.ajax({
			type: 'PATCH',
			dataType: 'json',
			url: '/questions/' + questionId + '/answers/' + answerId,
			data: { answer: {points: newPoints} },
			success: $(this).siblings().eq(0).html(newPoints)
		})
	})

	//marking answer as solution
	$('.star').on('click', function(){
		var answerId = $(this).parent().data('id');
		$.ajax({
			type: 'PATCH',
			url: '/questions/' + questionId + '/answers/' + answerId,
			dataType: 'json',
			data: { answer: { is_solution: true } },
			success: $('span').addClass('solution')
		})
	})
})


$('.questions.new').ready(function(){

	$('.editable').on('keyup', function(e){
		var sel = getSelected();
		var node = sel.focusNode.parentNode;
		var nodeText = $(node).text();
		var keyShortcut = /[^\S\r\n]{3}/g //matches 3 consecutive spaces, NO new line or return values or tabs => only anything that is not within the brackets
		var notEditable = $(node).is('div') && !$(node).hasClass('editable')

		if (e.keyCode == 13) {
			document.execCommand('formatBlock', false, 'p');
			return false;
		};

		if (nodeText.match(keyShortcut) && ($(node).is('p') || notEditable)) {
			$(node).replaceWith('<code></code>');
		} 
		else if (nodeText.match(keyShortcut) && $(node).is('code')){
			$(node).replaceWith('');
		};

		$('.preview').html($(this).html());
	})

	$('form').on('submit', function(e){
		e.preventDefault();
		// console.log($('.editable').html())
		var post = $('.editable').html().split('</h2>'); 
		var title = post[0].concat('</h2>');
		var content = post[1];
		var user_id = $('input[name="user"]').val();
		var tags = $('input[name="tags"]').val();
		$.ajax({
			type: 'POST',
			url: '/questions',
			dataType: 'json',
			data: { question: { title: title, content: content, user_id: user_id, tags: tags } },
			success: function(data){
				var protocol = location.protocol;
				var slashes = protocol.concat("//");
				var host = $('input[name="full-host"]').val()
				var fullUrl = slashes.concat(host.concat('/questions/' + data.id))
				window.location.href = fullUrl;
				console.log(fullUrl)
			}
		})
	})
	
	function getSelected(){
		if (window.getSelection){
			return window.getSelection();
		} else if (document.getSelection){
			return document.getSelection();
		} else {
			var selection = document.selection && document.selection.createRange();
			if(selection.text){
				return selection.text;
			}
			return false
		}
		return false
	}
})
