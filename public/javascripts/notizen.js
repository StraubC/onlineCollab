$(document).ready(function() {
	$("#notizenTextButton").click(function(){
    	var text = $('#notizenText').val();
    	$("#outputArea").append("<div class = singleOutput id = output1>" + text + "</div>");
    	$('#notizenText').val("");
	});	

	$('#sketchButton').click(function(){
		var image = new Image();
		image.src = $('#colors_sketch')[0].toDataURL("image/png");

		
		$("#outputArea").append(image);

		//$("#outputArea").append("<div class = singleOutput id = output1> <img src=" + image + " /></div>");

	});

});