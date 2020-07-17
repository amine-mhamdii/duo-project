$(function(){
$("#late").hide()
$("#notLate").hide()
$("#btnlate").on("click",function(){
var a = $("#inp11").val();
	if(a>=3){
	$("#late").show()	
	} else {
	$("#late").hide()
	$("#notLate").show()
	}
	
});
$("#drunk").hide()
$("#remember").hide()
$("#btnlate2").on("click",function(){
	var b = $("#inp12").val();
	if(b>=3){
	$("#drunk").show()
	} else{
	$("#drunk").hide()
	$("#remember").show()
}
});
$("#arabic").hide();
$("#awsome").hide();
$("#btnlate3").on("click",function(){
	var c = $("#inp13").val();
	if(c>=3){
	$("#arabic").show()
	} else{
	$("#arabic").hide()
	$("#awsome").show()
	}
});

})
