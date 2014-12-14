$('.objectives.slips').ready(function(){
	console.log('in .objectives.slips')
	pairs = []
	var n = 0;
	$.ajax({
		url: '/slips',
		type: 'GET',
		dataType: 'json',
		success: function(result){
			// no questions yet
			store(result.pairs)
		}
	})

	function store(result) {
		for (var i = 0; i < result.length; i++) {
			pairs.push(result[i])		
		};
	}

	$('button').on('click', function(){
		if (pairs.length === 0 ) {
			$('.pairs').html('<h1> No pairs available :( </h1>')
		};		
		if (n === pairs.length - 1) {
			$(this).html('No more pairs!');
		};
		var pair = pairs[n]
		n++
		$('.pairs').html('<h1>' + pair.student + '</h1><p>' + pair.objective.content + '</p>')
	})
})