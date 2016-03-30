// business logic
function leapyear(year){
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
		return true;
	
	}else{ 
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
 		$("#yeargroup").addClass("has-error")
 	}
 	$("#result").show();
 	$(".year").text(year);
 	if (!result) {
 		$(".not").text("not");
 	}else{
 		$(".not").text("");
 	}
 	
 });
 $("#yeargroup").click(function(){
 	 $(this).removeClass("has-error")
 })



});
