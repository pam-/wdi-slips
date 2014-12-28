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
			data: { question: { points: this.points } },
			success: $('.js-points').html(this.points)
		})
	}
}

$('.questions.show').ready(function(){
	// voting up or down
	var questionId = $('.question-body').data('id');
	var questionPoints = parseInt($('.js-points').html());
	var original = new Counter(questionPoints, questionId);
	console.log(original.points)
	$('.js-up').on('click', function(){
		original.addPoints();
	});
	$('.js-down').on('click', function(){
		original.subPoints();
	});

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
		//solution if solution, unsolution if change your mind
	})
})
