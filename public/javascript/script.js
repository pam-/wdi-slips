//data modeling
function Slip(question) {
	// this.student = student
	this.question = question
}

function newSlip(){
	// console.log(questions)
	return new Slip(questions[0].cli[0])
	questions[0].cli.splice(0, 1)
}

function start() {
	$('button').on('click', function(){
		slip = newSlip();
		console.log(slip.question)
		console.log(questions[0].cli)
	})
};

$(document).ready(start);