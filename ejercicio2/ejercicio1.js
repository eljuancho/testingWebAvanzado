$(document).ready(function(){

	$('#solutionModal').on('show.bs.modal', function (event) {
		jQuery.get('xsxfkdoel.html', function(data) {
			$("#btnConfirm").show();
			$("#solucion").hide();
			$("#solucion").html(data);
		});
	});

	$("#btnConfirm").on("click", function(){
		$("#solucion").show();
		$("#btnConfirm").hide();
	});

	$("#btnSiguiente").on("click", function(){
		window.location.href="../ejercicio2"
	});
	
})



