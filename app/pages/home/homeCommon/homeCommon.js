angular.module("homeCommon",[])
.controller("ctrl",function ($scope, $http){
	$css.add("homeCommon.css");
	$http.get("app/pages/home/json/new.json")
	.success(function (req){
		$scope.datas = req.data
		$scope.lists = req.data.dishes_list				
	})
})
.directive("commonModule",function (){
	return {
		restrict:"E",
		scope:{
			datas:"=",
			lists:"="
		},
		templateUrl:"homeCommon.html"
	}
})
