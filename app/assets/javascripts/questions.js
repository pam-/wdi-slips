function Counter(points){
	this.points = points;

	this.addPoints = function(){
		this.points++;
		return this.points;
	};

	this.subPoints = function(){
		this.points--;
		return this.points;
	}
}

$('.questions.show').ready(function(){
	var original = new Counter(parseInt($('.js-points').html()));
	console.log(original.points)
	$('.js-up').on('click', function(){
		$('.js-points').html(original.addPoints());
	})
	$('.js-down').on('click', function(){
		$('.js-points').html(original.subPoints());
	})
})
