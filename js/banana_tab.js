
$(function(){
	$(".tab_content").hide();
	$(".tab_content").first().show();
	
	
	$("ul.tabs li").click(function(){
		
		$("ul.tabs li").removeClass("active").css("color","#707070");
	
		$(this).addClass("active").css("color","#4e3906");
	
		$(".tab_content").hide();
	
	
	
	var activeTab=$(this).attr("rel");
	
	$("#"+activeTab).show();
	
});
});

