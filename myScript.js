$(document).ready(function(){
	var num = 0;
	
	$("#tt").on("vmousedown",function(){
		num++;
		$("#num").html(num);
		$("#tt").attr({ src: "image/sad.png" });
	})
	
	$("#tt").on("vmouseup",function(){
		num++;
		$("#num").html(num);
		$("#tt").attr({ src: "image/smile.png" });
	})
});
