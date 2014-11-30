$('.questions.slips').ready(function(){
	console.log('in .questions.slips')
	pairs = []
	var n = 0;
	$.ajax({
		url: '/slips',
		type: 'GET',
		dataType: 'json',
		success: function(result){
			store(result.pairs)
		}
	})

	function store(result) {
		for (var i = 0; i < result.length; i++) {
			pairs.push(result[i])		
		};
	}

	$('button').on('click', function(){
		var pair = pairs[n]
		n++
		$('.pairs').html('<h1>' + pair.student + '</h1><p>' + pair.question.content + '</p>')
	})
})