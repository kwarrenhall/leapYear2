$(function(){

// business logic
 $("#submit").click(function(event){
 	event.preventDefault();
   
 	var year = parseFloat($("#year").val());

 	if(Number.isInteger(year)){
 	   alert(year);	
 	} else {
 		alert("wrong!");
 	}
 });


});