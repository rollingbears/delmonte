
$(function(){
		
				$(".searchii").on("click",function(){
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
		
				$("#quick_btn").on("click", function(){
				$("#quick_menu:not(:animated)").slideToggle("slow");
			});
			
			var defaultTop=parseInt($("#quick_btn").css("top"));
				
				$(window).on("scroll",function(){
				var scv=$(window).scrollTop();
	
				$("#quick_btn").stop().animate({top:scv+defaultTop+"px"},1000);
			});
			
			
				var mySlider=$(".cuponwrap ul").bxSlider({
				mode:"horizontal",//수평방향으로 이동합니다
				speed:500,// 이동속도(500:0.5초)
				pager:false,//페이징표시제어숨김
				moveSlides:1,//이동슬라이드수
				slideWidth:372,//각슬라이드폭
				minSlides:3,//최소노출슬라이드수
				maxSlides:3,//최대노출슬라이드수
				slideMargin:20,//슬라이드간격
				auto:true,//자동슬라이드여부
				autoHover:true,//마우스오버시자동정지
				controls:false//이전 다음버튼을 숨긴다
			
			});
			
			$(".prev_btn").on("click",function(){
				mySlider.goToPrevSlide();
				return false;
			}),	
			$(".next_btn").on("click",function(){
			mySlider.goToNextSlide();
			
			return false;
			

	
			});
				
			var list_zone = document.getElementById("recipe_inner_list");
	//아이디 inner_list 요소잡아와 변수 list_zone에 할당해
	var list_a = list_zone.getElementsByTagName("a");
	//변수 list_zone의 작은그림 에이태그요소잡아와 변수 list_a에 할당해

	for (
		var i = 0; i < list_a.length; i++) {

		//처음인덱스번호 i변수 저장
		//작은그림 전체개수 10보다 작으면 할당클릭수행문 계속 증가 반복해
		list_a[i].onclick = function () { //a인덱스번호 클릭할때

			var ph = document.getElementById("recipe_video");
			//변수 피에이치에 큰그림 포토의 처음자식 할당하고

			ph.src = this.href;
			//포토메인그림을 인덱스차례에 해당자식의 연동 큰그림으로 바꿔
			ph.load();
			ph.play();
			return false;
			//<a>클릭했을때 링크가 되지않도록
		}
	}
	
	$(".item").mouseenter(function(){
		$(".item").removeClass('on');
		$(this).addClass('on');
		
		
	});


			
			
			
			
			
			
});

