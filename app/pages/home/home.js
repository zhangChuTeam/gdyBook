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
				name: 'new',
				url: '/new',
				css: 'app/pages/home/new/new.css',
				templateUrl: 'app/pages/home/new/new.html',
				controller: function($css) {
					$css.add('app/pages/home/home.css')
				}
			})
			.state({
				name: 'home.part2',
				url: '/part2',
				templateUrl: 'app/pages/home/home.part2/home.part2.html'
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
					var left = parseInt($(".nav span").css("left"))/innerWidth;
					var wid = parseInt($(".wrap>div").width());
					if(lastLeft <= -2*wid){
						return;
					}					
					$(".wrap").css({
						"margin-left":lastLeft - wid,
						"transition":"margin-left 1s"
					});
//					$(".nav span").css({
//						"left":left + 1.902778 + "rem",
//						"transition":"left 1s"
//					})
//					console.log($(".nav span").css("left"))
				})
				$(".wrap").on("swipeRight",function (){
					var lastLeft = parseInt($(this).css("margin-left"));
					var wid = parseInt($(".wrap>div").width());
					if(lastLeft >= 0){
						return;
					}					
					$(".wrap").css({
						"margin-left":lastLeft + wid,
						"transition":"margin-left 1s"
					});
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