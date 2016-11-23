angular.module('homePage', ["ksSwiper"])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'home',
				url: '/home',
				css: 'app/pages/home/home.css',
				templateUrl: 'app/pages/home/home.html',
				controller: 'homeCtrl'
			})
			.state({
				name: "new",
				url: "/new",
				css: "app/pages/home/new/new.css",
				templateUrl: "app/pages/home/new/new.html",
				controller: function($css, $scope, $http) {
					$css.add("app/pages/home/home.css");
					$http.get("app/pages/home/json/new.json")
					.success(function (req){
						$scope.datas = req.data
						$scope.lists = req.data.dishes_list				
					})
				}
			})
			.state({
				name: "more",
				url: "/more",
				css: "app/pages/home/more/more.css",
				templateUrl: "app/pages/home/more/more.html",
				controller: function($css, $scope, $http) {
					$css.add("app/pages/home/home.css");
					$http.get("app/pages/home/json/more.json")
					.success(function (req){
						$scope.datas = req.data.data
						$scope.lists = req.data.dishes_list				
					})
				}
			})
			.state({
				name: "newPeople",
				url: "/newPeople",
				css: "app/pages/home/newPeople/newPeople.css",
				templateUrl: "app/pages/home/newPeople/newPeople.html",
				controller: function($css, $scope, $http) {
					$css.add("app/pages/home/home.css");
				}
			})
			.state({
				name: "food",
				url: "/food",
				css: "app/pages/home/food/food.css",
				templateUrl: "app/pages/home/food/food.html",
				controller: function($css, $scope, $http) {
					$css.add("app/pages/home/home.css");
				}
			})
			.state({
				name: "guess",
				url: "/guess",
				css: "app/pages/home/guess/guess.css",
				templateUrl: "app/pages/home/guess/guess.html",
				controller: function($css, $scope, $http) {
					$css.add("app/pages/home/home.css");
				}
			})
			.state({
				name: "choose",
				url: "/choose",
				css: "app/pages/home/choose/choose.css",
				templateUrl: "app/pages/home/choose/choose.html",
				controller: function($css, $scope, $http) {
					$css.add("app/pages/home/home.css");
				}
			})
			.state({
				name: "search",
				url: "/search",
				css: "app/pages/home/search/search.css",
				templateUrl: "app/pages/home/search/search.html",
				controller: function($css, $scope, $http) {
					$css.add("app/pages/home/home.css");
				}
			})
	})
	.controller('homeCtrl', function($scope, $http) {
		$http.get('app/pages/home/json/swiper.json')
			.success(function(res) {
				$scope.slides = res.slide;
				var params = {
				    slidesPerView: $scope.slidesPerView || 1,
				    slidesPerColumn: $scope.slidesPerColumn || 1,
				    spaceBetween: $scope.spaceBetween || 0,
				    direction: $scope.direction || 'horizontal',
				    loop: $scope.loop || false,
				    initialSlide: $scope.initialSlide || 0,
				    showNavButtons: true
				};
				$scope.recommend = function (){
					$(".wrap").css({
						"margin-left":"0",
						"transition":"margin-left 1s"
					});
					$(".nav span").css({
						"left":"0.333333rem",
						"transition":"left 1s"
					})
				}
				$scope.foodOriginal = function() {
					$(".wrap").css({
						"margin-left":"-100%",
						"transition":"margin-left 1s"
					});
					$(".nav span").css({
						"left":"1.902778rem",
						"transition":"left 1s"
					})
				}
				$scope.sort = function() {
					$(".wrap").css({
						"margin-left":"-200%",
						"transition":"margin-left 1s"
					});
					$(".nav span").css({
						"left":"3.611111rem",
						"transition":"left 1s"
					})
				}
				$(".wrap").on("swipeLeft",function (){
					var lastLeft = parseInt($(this).css("margin-left"));
					var index = Math.abs(lastLeft/parseInt($(this).width())*3) + 1;
					var left = parseInt($(".nav span").css("left"))/innerWidth;
					var wid = parseInt($(".wrap>div").width());
					if(lastLeft <= -2*wid){
						return;
					}			
					$(".plan").on("touchend",function (){
						return false;
					});
					$(".wrap").css({
						"margin-left":lastLeft - wid,
						"transition":"margin-left 1s"
					});
					$(".nav span").css({
						"left":0.333333 + 1.6*index + "rem",
						"transition":"left 1s"
					})
				})
				
				$(".wrap").on("swipeRight",function (){
					var lastLeft = parseInt($(this).css("margin-left"));
					var index = Math.abs(lastLeft/parseInt($(this).width())*3)-1;
					var left = parseInt($(".nav span").css("left"))/innerWidth;
					var wid = parseInt($(".wrap>div").width());
					if(lastLeft >= 0){
						return;
					}					
					$(".wrap").css({
						"margin-left":lastLeft + wid,
						"transition":"margin-left 1s"
					});
					$(".nav span").css({
						"left":0.333333 + 1.6*index + "rem",
						"transition":"left 1s"
					})
				})
			});
		$http.get("app/pages/home/json/stuff.json")
			.success(function(res){
				$scope.normals = res.data[0].normal;
				$scope.seasons = res.data[0].season;
				$scope.stemLeafs = res.data[0].stemLeafs;
				$scope.tuberousRoots = res.data[0].tuberousRoot;
				$scope.melonFruits = res.data[0].melonFruit;
				$scope.beans = res.data[0].beans;
				$scope.mushrooms = res.data[0].mushroom;
			})
		$http.get("app/pages/home/json/sort.json")
			.success(function(res){
				$scope.quicks = res.data[0].quick;
				$scope.easys = res.data[0].easy;
				$scope.meats = res.data[0].meat;
				$scope.plates = res.data[0].plate;
				$scope.seafoods = res.data[0].seafood;
			})
	})