$(document).ready(function() {
	$('.display').click(function(e){
		$(this).effect('shake');
		e.stopPropagation();
	});
}); 
