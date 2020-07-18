$("#btn").on("click",function () {
	localStorage.setItem("name",$("#name").val())
	localStorage.setItem("pass",$("#pass").val())
	$("#pass").val("")
	$("#name").val("")

})
$("#btnlog").on("click",function(){
	if(localStorage.getItem("name")===$("#name").val()&& $("#pass").val()===localStorage.getItem("pass")){
		window.open("index2.html")
	}else{
		alert("wrong")
	}
})