$('.questions.slips').ready(function(){
	console.log('in .questions.slips')
	$.ajax({
		url: '/students',
		type: 'GET',
		success: function(result_array){
			console.log(result_array)
		}
	})
})