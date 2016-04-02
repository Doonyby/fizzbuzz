$document.ready(function() {
	$('#submitbutton').click(function() {
		var result = $('#enternumber');
		for (var i = 1; i <= result; i++) {
			if (i % 15 === 0) {
				$("#output").append('fizzbuzz');
			}
			else if (i % 3 === 0) {
				$("#output").append('fizz');
			}
			else if (i % 5 === 0) {
				$("#output").append('buzz');
			}
			else {
				$("#output").append(jim)
			}
		};
	});
})

