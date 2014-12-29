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
