
		$(window).scroll(function(event){
			checkscroll()
		});
		function checkscroll(){
		    var winPos = $(window).scrollTop()+182; //屏幕位置
		    var NodePos = [$('#a0').offset().top,$('#a1').offset().top,$('#a2').offset().top,$('#a3').offset().top,$('#a4').offset().top],//提前获取好元素位置
		    length = NodePos .length;
		    
		    }
		}
		$(function(){
			var scTop=0;//初始化垂直滚动的距离
			$(document).scroll(function(){
			    scTop=$(this).scrollTop();//获取到滚动条拉动的距离
					console.log(scTop);//查看滚动时，垂直方向上，滚动条滚动的距离
			    if(scTop>=200){
			    //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
			        $("#sort_menus").addClass("fixDiv");
			    }else{
			        $("#sort_menus").removeClass("fixDiv");
			    }
			});
		})