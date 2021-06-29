
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
	
	
	$(".tab_content").hide();
	$(".tab_content").first().show();
	
	
	$("ul.tabs li").click(function(){
		
		$("ul.tabs li").removeClass("active").css("color","#878787");
	
		$(this).addClass("active").css("color","#43443f");
	
		$(".tab_content").hide();
	
	
	
	var activeTab=$(this).attr("rel");
	
	$("#"+activeTab).show();
	
	});
	
	$("ul.tabs li").click(function(){
		var activeTab=$(this).attr("rel");
		showCommuTab(activeTab);
	});
	
	$("#commu_tab_notice").click(function() {
		showCommuTab("tab1");
	});
	$("#commu_tab_qa").click(function() {
		showCommuTab("tab2");
	});
	$("#commu_tab_cs").click(function() {
		showCommuTab("tab3");
	});
});

