$(document).ready(function(){
	var num = 0;
	$("#tt").on("tap",function(){
		num++;
		$("#num").html(num);
		$("#tt").attr({ src: "http://v2.freep.cn/110_3tb_140730223440foqv512293.png" });
	})
});
