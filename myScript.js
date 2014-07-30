$(document).ready(function(){
	var num = 0;
	$("#tt").on("tap",function(){
		num++;
		$("#num").html(num);
		$("#tt").attr({ src: "image/sad.png" });
		$("#tt").attr({ src: "image/smile.png" });
	})
});
