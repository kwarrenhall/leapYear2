// business logic
function leapyear(year){
	  if (year === 1993) {
      		return false;
 	
 		}
}

$(function(){

// user logic
 $("#submit").click(function(event){
 	event.preventDefault();
   
 	var year = parseFloat($("#year").val());
 	
 	if(Number.isInteger(year)){
 		var result = leapyear(year);
 	 
 	}else {
 		alert("wrong!");
 	}
 	$("#result").text(result);

 	
 	
 });



});
