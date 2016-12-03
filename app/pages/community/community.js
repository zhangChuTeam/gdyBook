angular.module('communityPage',[])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state({
  	css:"app/pages/community/community.css",
    name:'community',
    url:'/community',
    templateUrl:'app/pages/community/community.html'
  })
  .state({
  	name:'comment',
  	url:'/comment',
  	templateUrl:'app/pages/community/comment/comment.html',
  	controller:function($css){
  			$css.add("app/pages/community/comment/comment.css")
  	}
  })
})
.controller("shequ_swipe",function(){
		$(".shequ").on("swipeLeft",function (){
					var shequLeft = parseInt($(this).css("margin-left"));
					var wid = parseInt($(".guanzhu").width());
					if(shequLeft <= -2*wid){
						return;
					}	
					$(".DD").on("touchend",function (){
							return false;
 					});
					$(".shequ").css({
						"margin-left":shequLeft - wid,
						"transition":"margin-left 1s"
					});
//				'	 oleft = parseInt($(".move").css("left"));'
					 oleft = parseInt(parseInt($(".move").css("left"))/innerWidth/10);
					 console.log(oleft);
					 if(parseInt(oleft)<=186){
							 $(".move").css({
								 "left":oleft+70,
								 "transition" : "left 1s"
							 })
					 }else{
									return
					 }
		})
				$(".shequ").on("swipeRight",function (){
					var lastLeft = parseInt($(this).css("margin-left"));
					var wid = parseInt($(".guanzhu").width());
					var marLeft = lastLeft + wid;
					if(lastLeft >= 0){
						return;
					}			
					$(".DD").on("touchend",function (){
							return false;
 					});
					$(".shequ").css({
						"margin-left":lastLeft + wid,
						"transition":"margin-left 1s"
					});
					oleft = parseInt(parseInt($(".move").css("left"))/innerWidth/10);
					console.log(oleft);
//					if(oleft>96){
//							 $(".move").css({
//								 "left":(oleft-1.45)+"rem",
//								 "transition" : "left 1s"
//							 })
//					 }else{
//									return
//					 }
				})
})
.controller("ctrlcommu",function($scope,$http){
		$http.get("app/pages/community/focus.json")
		.success(function(res){
				var jsonStr = JSON.stringify(res.focus)
				if(!localStorage.getItem("comment")){
							localStorage.setItem("comment",jsonStr);
			}
			//console.log(localStorage.getItem("comment"))
		})
		
})
.controller("ctrl_commu",function($scope){
			$scope.obj=JSON.parse(localStorage.getItem("comment"));
			$scope.click=function(){
						$("#inputbox").css("z-index",10);
						$("footer").css("z-index",0);
				}
//图片懒加载
//			$(function(){
//  		$("img").lazyload({
//  			placeholder:"app/common/img/community/04.png",
//  			threshold : 200,
//  			effect : "fadeIn",
//  			event : "click",
//  			failurelimit: 10 
//				});
//			});
				$scope.morehot = function(e){
							var e = e || window.event;
							var ele = e.target;
				      localStorage.setItem("imgsrc",$(ele).siblings("dt").find("img").attr("src"))
				      imgsrc=$(ele).siblings("dt").find("img").attr("src");
				}
			  $scope.imgsrc=localStorage.getItem("imgsrc");
				$scope.click_send = function(){
					$("#inputbox").css("z-index",0);
						$("footer").css("z-index",10);
						$scope.obj=JSON.parse(localStorage.getItem("comment"));
					  for(ob in $scope.obj){
					  			 elem = $scope.obj[ob]
						//获取识别标题
					        var shibie =$scope.imgsrc ;
					        if(elem.img==shibie){
								//创建一个新的空对象
							        var newobj = {};
							  			newobj.com_headimg="app/common/img/community/09.png";
							    		newobj.com_name="***";
							   			newobj.com_cont=$("#neirong").val();
					   			//把这个新的会话对象加到会话数组
											//elem.comment.push(newobj);
											elem.comment.unshift(newobj);
											elem.nums.cont_num=parseInt(elem.nums.cont_num)+1;
									//重新把这个更新过的obj存到localStorage
											var obj_str = JSON.stringify($scope.obj);
											localStorage.setItem("comment",obj_str);
											$scope.commu();
									}
					 }
			}
			$scope.commu=function communicate(){
					var comobj = JSON.parse(localStorage.getItem("comment"));
	     	  for( j in comobj){
           var shibie = $scope.imgsrc
           console.log(shibie);
           var k = comobj[j];
							if(k.img==shibie){
								console.log(k.img);
											$scope.ele = k;
											$scope.conm=k.comment;
											$scope.nums=k.nums
							} 
				  }
	 	  }
		  $scope.commu();
//		  $scope.goodclick = function(e){
//		  	
//					e = e||window.event;
//					ele = e.target;
////					$(ele).siblings("dt").find("img").attr("src");
//					//console.log($(ele).nextSibling.html());
//					console.log(ele.parenNode.parentNode);
//					var src2 = $(ele).parent.parent.siblings("dt").find("img").attr("src");
//					console.log(src2);
//					var comobj = JSON.parse(localStorage.getItem("comment"));
//					for( j in comobj){
//        var shibie = src2
//       	var k = comobj[j];
//							if(k.img==shibie){
//								 comobj[j].nums.good_num = parseInt(comobj[j].nums.good_num)+1;
//								 var obj_str = JSON.stringify(comobj);
//								 localStorage.setItem("comment",obj_str);
//								 $scope.commu();
//							} 
//				  }
//					var htm = parseInt($(ele).siblings("span").html());
//					$scope.nums.good_num = $(ele).siblings("span").html(htm+1);
//					
		})
		  	
		
		

