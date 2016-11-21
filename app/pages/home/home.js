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
					$css.add('app/pages/home/home.css');
				}
			})
			.state({
				name: 'home.part2',
				url: '/part2',
				templateUrl: 'app/pages/home/home.part2/home.part2.html'
			})
	})
	.controller('homeCtrl', function($scope, $http) {
		$http.get('app/pages/home/swiper.json')
		.success(function(res) {
			$scope.slides = res.slide;
//				var params = {
//					slidesPerView: $scope.slidesPerView || 1,
//					slidesPerColumn: $scope.slidesPerColumn || 1,
//					spaceBetween: $scope.spaceBetween || 0,
//					direction: $scope.direction || 'horizontal',
//					loop: $scope.loop || false,
//					initialSlide: $scope.initialSlide || 0,
//					showNavButtons: false
//				};
		})
		
	})