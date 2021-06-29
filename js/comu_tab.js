
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
	
	var showCommuTab = function(inTabName) {
		$("ul.tabs li").removeClass("active").css("color","#878787");
		$("#topmenu_" + inTabName).addClass("active").css("color","#43443f");
		$(".tab_content").hide();
		$("#"+inTabName).show();
	}
	
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

	$(".faqwrap .faq_title").click(function() {
		if($(this).next("div").is(":visible")) {
			$(this).next("div").slideUp("fast");
			$(this).find("#arrow").removeClass("arrow-up").addClass("arrow-down");
		} else {
			$(".faqwrap .faq__sub").slideUp("fast");
			$(this).next("div").slideToggle("fast");
			$(this).find("#arrow").removeClass("arrow-down").addClass("arrow-up");
		}
	});
});
