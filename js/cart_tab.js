
$(function(){
	
				
	$(".searchii").on("click", function(){
		$("#searchbox").toggle("slow");
		$(".loginbox").hide("fast");
	});
				
	$(".serbtn").on("click",function(){
		$("#searchbox").hide("fast");
	});
		
	$(".mypage").on("click",function(){
		$(".loginbox").toggle("slow");
		$("#searchbox").hide("fast");
	});
	
	
	$("#cartnn1").click(function(){
		alert("선택된 상품이 없습니다.");	
			
	});	

	$("#cartnn2").click(function(){
		alert("선택된 상품이 없습니다.");	
			
	});				
	
	
});
