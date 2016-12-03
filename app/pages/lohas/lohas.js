angular.module('lohasPage',["lehuo_2"])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'lohas',
    url:'/lohas',
        css:'app/pages/lohas/lehuo.css',
        templateUrl:'app/pages/lohas/lehuo.html',
        controller:function($css){
        $css.add('app/pages/lohas/lehuo.css')
        }
  })
})
    .controller('ctrl',function($scope,$http){
        $http.get('http://javaapi.izhangchu.com:8084/zcmessage/api/lifeCourseSeries/CourseIndex')
            .success(function(res){
                //console.log(res.data.data);
                $scope.img = res.data.data;
            })
        $http.get('http://ohcou9ti1.bkt.clouddn.com/lohas/lohas.json')
            .success(function(res){
                //console.log(res.data.albums);
                $scope.loc = res.data.albums;
            })
        //-----------------点击头部跳转-----------------------------
        $scope.lohas_cate=function(){
            $(".lohas1").css({
                "margin-left":0,
                "transition":"margin-left 0.5s"
            })
            $(".hua").css({
                "left":parseInt($(".le_health_one").css("margin-right"))+"px",
                "transition": "left 0.5s"
            })
        }
        $scope.lohas_health=function(){
            $(".lohas1").css({
                "margin-left":-parseInt($(".le_cate").width()),
                "transition":"margin-left 0.5s"
            })
            $(".hua").css({
                "left": innerWidth-parseInt($(".le_health_one").css("margin-right"))-parseInt($(".hua").css("width"))+"px",
                "transition": "left 0.5s"
            })
        }
    })


    .controller("lohas_swipe",function() {
        $(".le_cate_head").addClass("on");
        $(".le_health_head").addClass("on");
        $(".le_health_head").on("touchend", function (e) {
            //阻止冒泡事件     return false既阻止冒泡又阻止默认事件，，单击事件实现不了
            e.stopPropagation();
        });
        $(".le_cate_head").on("touchend", function (e) {
            e.stopPropagation();
        });
        $(".lohas1").on("swipeLeft", function () {
            var lohasleft = parseInt($(this).css("margin-left"));
            var wid = parseInt($(".le_cate").width());
            if (lohasleft <= -wid) {
                return;
            }

            $(".lohas1").css({
                "margin-left": lohasleft - wid,
                "transition": "margin-left 1s"
            });
            var hua = parseInt($(".le_health_one").css("margin-right"));
            var w=parseInt($(".hua").css("width"));
            $(".hua").css({
                "left": innerWidth-hua-w+"px",
                "transition": "left 1s"
            })
            //$(".le_cate_head").addClass("on");
        })
        $(".lohas1").on("swipeRight", function () {
            var lohasLeft = parseInt($(this).css("margin-left"));
            var wid = parseInt($(".le_cate").width());
            if (lohasLeft > -wid) {
                return;
            }
            $(".samPic").on("touchend", function () {
                return false;
            });
            $(".lohas1").css({
                "margin-left": lohasLeft + wid,
                "transition": "margin-left 1s"
            });
            var hua = parseInt($(".le_cate_one").css("margin-left"));
            $(".hua").css({
                "left": hua+"px",
                "transition": "left 1s"
            })
        })

    })


