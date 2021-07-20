$(document).ready(function(){
		$('#main').on('mousewheel DOMMouseScroll',function(e){
			var E = e.originalEvent;
			var delta = E.wheelDelta;
			console.log(E);
			if (delta < 0) {
				$('#solo_pro').stop().animate({ top:100 },1000);
			}
			if (delta > 0){
				$('#solo_pro').stop().animate({ top:200 },1000);
			}
		});
	
		$('.hotspot-wrap.-wp-01').click(function(){
			$('#popup_box3').show();
		});
		$('.hotspot-wrap.-wp-02').click(function(){
			$('#popup_box2').show();
		});
		$('.hotspot-wrap.-wp-03').click(function(){
			$('#popup_box1').show();
		});
		$('#popup button').click(function(){
			$('#popup > div').hide();
		});

		/*$('#color').on('mousewheel DOMMouseScroll',function(e){
			var E = e.originalEvent;
			var delta = E.wheelDelta;
			if (delta < 0) {
				$('.darkblue_img').stop().animate({ top:440 },800);
				$('.red_img').stop().animate({ top:440 },800);
				$('.lightblue_img').stop().animate({ top:470 },800);
			}
			if (delta > 0){
				$('.darkblue_img').stop().animate({ top:400 },800);
				$('.red_img').stop().animate({ top:400 },800);
				$('.lightblue_img').stop().animate({ top:430 },800);
			}
		});

		$('window').resize(function(){
			if( $('window').width() =< 1024 ){
				$('#color').on('mousewheel DOMMouseScroll',function(e){
				var E = e.originalEvent;
				var delta = E.wheelDelta;
				if (delta < 0) {
					$('.darkblue_img').stop().animate({ top:170 },800);
					$('.red_img').stop().animate({ top:770 },800);
					$('.lightblue_img').stop().animate({ top:1470 },800);
				}
				if (delta > 0){
					$('.darkblue_img').stop().animate({ top:190 },800);
					$('.red_img').stop().animate({ top:790 },800);
					$('.lightblue_img').stop().animate({ top:1490 },800);
				}
			}
		});
		$('window').trigger('resize');*/

		$('#color_btn li').click(function(){
			var i = $(this).index();			
			$('#circle > li > div').fadeOut();
			$('#circle > li > div').eq(i).fadeIn();
		});
		$('.darkblue_btn').click(function(){
			$('#darkblue h2').css('color','white');
			$('#lightblue h2').css('color','#999');
			$('#red h2').css('color','#999');
		});
		$('.red_btn').click(function(){
			$('#red h2').css('color','white');
			$('#darkblue h2').css('color','#999');
			$('#lightblue h2').css('color','#999');
		});
		$('.lightblue_btn').click(function(){
			$('#lightblue h2').css('color','white');
			$('#darkblue h2').css('color','#999');
			$('#red h2').css('color','#999');
		});
	
	//세부정보 슬라이드 버튼 기능
	$(document).ready(function () {
		$('.info_slide_btn').on('click', function () {
		  $('.info_slide_content').slideToggle(500);
		  $(this).find('>img').attr('src', function (index, attr) {
			if (attr.match('up')) {
			  return attr.replace('up', 'down');
			} else {
			  return attr.replace('down', 'up')
			}
		  });
		});
	  });
	});