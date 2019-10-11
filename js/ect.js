
		
	$(document).ready(function(){
    'use strict';
		var $nav_about_me = $("#nav_about_me").offset().top;
		console.log("nav_about_me"+nav_about_me);
		
		$('.port_btn ul > li').click(function() {
			var li_idx = $(this).index();
			if( li_idx === 0){
				$('.port_btn ul > li').removeClass('active');
				$(this).addClass('active');
				$(this).parent().removeClass('on');
				$(this).parent().addClass('on');
				$('.port_content ul li').removeClass('on');
				$('.port_content ul li.pub').addClass('on');
				$('.port_content ul li.pub2').addClass('on');
				$('.port_content ul li.mainten').addClass('on');
				$('.port_content ul li.pub').show();
				$('.port_content ul li.pub2').show();
				$('.port_content ul li.mainten').show();
			}else if(li_idx === 1){
				$('.port_btn ul > li').removeClass('active');
				$(this).addClass('active');
				$(this).parent().removeClass('on');
				$(this).parent().addClass('on');
				$('.port_content ul li.pub').show();
				$('.port_content ul li.pub2').hide();
				$('.port_content ul li.mainten').hide();
				$('.port_content ul li').removeClass('on');
				$('.port_content ul li.pub').addClass('on');
			}else if(li_idx === 2){
				$('.port_btn ul > li').removeClass('active');
				$(this).addClass('active');
				$(this).parent().removeClass('on');
				$(this).parent().addClass('on');
				$('.port_content ul li.pub').hide();
				$('.port_content ul li.pub2').show();
				$('.port_content ul li.mainten').hide();
				$('.port_content ul li').removeClass('on');
				$('.port_content ul li.pub2').addClass('on');
			}else{
				$('.port_btn ul > li').removeClass('active');
				$(this).addClass('active');
				$(this).parent().removeClass('on');
				$(this).parent().addClass('on');
				$('.port_content ul li.pub').hide();
				$('.port_content ul li.pub2').hide();
				$('.port_content ul li.mainten').show();
				$('.port_content ul li').removeClass('on');
				$('.port_content ul li.mainten').addClass('on');
			}

		});
           
			
           	 $(".cdev").circlos();
            
		$('#fullpage').fullpage({
			anchors: ['nav_home','nav_about_skill','nav_portfolio','nav_contact'],
			scrollBar: true,
			verticalCentered: true,
			css3: true,
			navigation: false,
			menu: 'nav ul',
			onLeave: function(anchor, index){
				if(index == 1){
					$('.nav').removeClass('chang');
				}else{
					$('.nav').addClass('chang');
				}
			}
		 });  
           
            var away = false;
            $(document).scroll(function() {
                if ($(document).scrollTop() > 0) {
                    if (!away) {
                        away = true;
                        $(".cdev").circlos();
                        $(".fade_in").fadeIn();
                        $(".portfolio_inner > ul > li").animate(".portfolio_inner > ul > li");
                    }
                } else {
                    away = false;
                    $('#bottom-box').stop().animate({'margin-top': '60px'}, 1500);
                }
            });
	
  
			});
