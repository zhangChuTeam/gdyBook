angular.module('myPage',[])
.config(function($stateProvider,$urlRouterProvider){
	
  $stateProvider
  .state({
    name:'my',
    url:'/my',
    css:'app/pages/my/my.css',
    templateUrl:'app/pages/my/my.html',
    controller:function($css){
      $css.add('app/pages/my/my.css')
    }
  })
  .state({
				name: 'like',
				url: '/like',
				css: 'app/pages/my/like/like.css',
				templateUrl: 'app/pages/my/like/like.html',
				controller: function($css) {
					$css.add('app/pages/my/like/like.css')
				}
	})
  .state({
				name: 'message',
				url: '/message',
				css: 'app/pages/my/message/message.css',
				templateUrl: 'app/pages/my/message/message.html',
				controller: function($css) {
					$css.add('app/pages/my/message/message.css')
				}
	})
})
.controller('ctrl2',function($scope){
       $(function(){
			var littleW=document.querySelector(".tabView div");
			var screenW=littleW.offsetWidth;
			var num=$(".tabView div").length;
			var oA=document.querySelectorAll("#box p a");
			var cnt=0;
			oA[0].style.color="#000";
			for(var i=0;i<oA.length;i++){
			    oA[i].index=i;
				oA[i].onclick=function(){
					var thisl=(-this.index)*screenW;
					$(".tabView").css("margin-left",thisl+"px");
					$(".move").css("left",this.index*33+13+"%");
					$(".tabView").css("transition","margin-left .3s linear");
					$(".move").css("transition","left .3s linear");
					resetB();
					this.style.borderBottom="none";
					this.style.color="#000";
					cnt=this.index;
				}
			}
			
			function resetB(){
				for(var i=0;i<oA.length;i++){
					oA[i].style.color="#7c7c7c";
				}
			}
			$(document).on("swipeLeft", function(e){
		    	var lastleft=parseFloat($('.tabView').css("margin-left"));
		    	if(lastleft-screenW<=num*(-1)*screenW){
		    		return;
		    	}
		    	cnt++;
		    	if(cnt>num-1){
		    		cnt=num-1;
		    	}
		    	resetB();
		    	oA[cnt].style.borderBottom="none";
				oA[cnt].style.color="#000";
				$(".tabView").css("margin-left",lastleft-screenW+"px");
				$(".tabView").css("transition","margin-left .3s linear");
				console.log(lastleft/screenW);
				$(".move").css("left",cnt*33+13+"%");
				$(".move").css("transition","left .3s linear");	
			});
			
			$(document).on("swipeRight", function(e){
		    	var lastleft=parseFloat($('.tabView').css("margin-left"));
		    	if(lastleft+screenW>0){
		    		return;
		    	}
		    	cnt--;
		    	if(cnt<0){
		    		cnt=0;
		    	}
		    	resetB();
		    	oA[cnt].style.borderBottom="none";
				oA[cnt].style.color="#000";
		    	console.log(cnt);
				$(".tabView").css("margin-left",lastleft+screenW+"px");
				$(".tabView").css("transition","margin-left .3s linear");
				$(".move").css("left",(cnt)*33+13+"%");
				$(".move").css("transition","left .3s linear");	
			});

		})
})



