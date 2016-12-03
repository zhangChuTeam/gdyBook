angular.module("lehuo_2",["curriculumPage","workPage"])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state({
                name:"lehuo2",
                url:"/lehuo2",
                templateUrl:"app/pages/lohas/lohas2/lehuo2.html",
                css:"app/pages/lohas/lohas2/lehuo2.css"
            })
    })
    .controller('ctrl2',function($scope,$http){
        $scope.artCon = function(){
            if($("#art").css("display")=="none"){
               $("#art").css({"display":"block"});

                $(".lehuo-jt").css({
                    "-webkit-transform":"rotate(180deg)",
                })

            }else{
                $("#art").css({"display":"none"});
                $(".lehuo-jt").css({
                    "-webkit-transform":"rotate(0)",
                })
            }
        }
        var myVideo = document.getElementsByTagName("video")[0];
        $scope.lehuo2_play = function(){
            $(".lehuo2_stop").css({"display":"none"});
            myVideo.play();
            myVideo.controls="controls";
        }

    })
