$(document).ready(function(){

	$('#solutionModal').on('show.bs.modal', function (event) {
		jQuery.get('xsxfkdoel.html', function(data) {
			$("#confirm").show();
			$("#solucion").hide();
			$("#solucion").html(data);
		});
	});

	$("#confirm").on("click", function(){
		$("#solucion").show();
		$("#confirm").hide();
	});
})



