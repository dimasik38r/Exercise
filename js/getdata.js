$(document).ready(function(){
	$("#get-data-form").submit(function(e){
		var content = tinymce.get("texteditor").getContent();
		$("#container").html(content);
		return false;
	});
});