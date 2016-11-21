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
				name: 'home.part1',
				url: '/part1',
				css: 'app/pages/home/home.part1/part1.css',
				templateUrl: 'app/pages/home/home.part1/home.part1.html',
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