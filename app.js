$(document).ready(function() {
	$('#submitbutton').click(function() {
		var result = $('#enternumber').val();
		for (var i = 1; i <= result; i++) {
			if (i % 15 === 0) {
				$("#output").append('<li>fizzbuzz</li>');
			}
			else if (i % 3 === 0) {
				$("#output").append('<li>fizz</li>');
			}
			else if (i % 5 === 0) {
				$("#output").append('<li>buzz</li>');
			}
			else {
				$("#output").append('<li>' + i + '</li>');
			}
		};
		$('#enternumber').val('');
	});
});

