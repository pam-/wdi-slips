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
	var questionId = parseInt(window.location.pathname.match(/[^/]+$/))
	var original = new Counter(parseInt($('.js-points').html()), questionId);
	console.log(original.points)
	$('.js-up').on('click', function(){
		original.addPoints();
	})
	$('.js-down').on('click', function(){
		original.subPoints();
	})
})
