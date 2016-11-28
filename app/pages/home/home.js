angular.module('homePage', ["ksSwiper", "me-lazyload"])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'home',
				url: '/home',
				css: 'app/pages/home/home.css',
				templateUrl: 'app/pages/home/home.html',
				controller: "homeCtrl"
			})
			.state({
				name: "new",
				url: "/new",
				css: "app/pages/home/homeCommon/homeCommon.css",
				templateUrl: "app/pages/home/new/new.html"
			})
			.state({
				name: "meals",
				url: "/meals",
				css: "app/pages/home/homeCommon/homeCommon.css",
				templateUrl: "app/pages/home/meals/meals.html"
			})
			.state({
				name: "easy_meal",
				url: "/easy_meal",
				css: "app/pages/home/homeCommon/homeCommon.css",
				templateUrl: "app/pages/home/easy_meal/easy_meal.html"
			})
			.state({
				name: "more",
				url: "/more",
				css: "app/pages/home/more/more.css",
				templateUrl: "app/pages/home/more/more.html",
				controller: function($css, $scope, $http) {
					$css.add("app/pages/home/home.css");
					$http.get("app/pages/home/json/more.json")
						.success(function(req) {
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
				controller: function($css) {
					$css.add("app/pages/home/home.css");
				}
			})
			.state({
				name: "food",
				url: "/food",
				css: "app/pages/home/food/food.css",
				templateUrl: "app/pages/home/food/food.html",
				controller: function($css) {
					$css.add("app/pages/home/home.css");
				}
			})
			.state({
				name: "guess",
				url: "/guess",
				css: "app/pages/home/guess/guess.css",
				templateUrl: "app/pages/home/guess/guess.html",
				controller: function($css) {
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
					$("#cPage .wrap a").on("click", function() {
						if(this.className != "active") {
							$(this).addClass("active");
						} else {
							$(this).removeClass();
						}
					})
				}
			})
			.state({
				name: "search",
				url: "/search",
				css: "app/pages/home/search/search.css",
				templateUrl: "app/pages/home/search/search.html",
			})
			.state({
				name: "search_result",
				url: "/search_result",
				css: "app/pages/home/search_result/search_result.css",
				templateUrl: "app/pages/home/search_result/search_result.html",
				controller: function($css) {
					$css.add("app/pages/home/home.css");
				}
			})
	})
	.controller('homeCtrl', function($scope, $http) {
		//图片轮播
		$http.get('app/pages/home/json/swiper.json')
			.success(function(res) {
				//轮播图
				$scope.slides = res.slide;
				var params = {
					showNavButtons: true
				};
			});
		//首页切换
		$scope.recommend = function() {
			$(".wrap").css({
				"margin-left": "0",
				"transition": "margin-left 1s"
			});
			$(".nav span").css({
				"left": "0.333333rem",
				"transition": "left 1s"
			})
		}
		$scope.foodOriginal = function() {
			$(".wrap").css({
				"margin-left": "-100%",
				"transition": "margin-left 1s"
			});
			$(".nav span").css({
				"left": "1.902778rem",
				"transition": "left 1s"
			})
		}
		$scope.sort = function() {
				$(".wrap").css({
					"margin-left": "-200%",
					"transition": "margin-left 1s"
				});
				$(".nav span").css({
					"left": "3.611111rem",
					"transition": "left 1s"
				})
			}
			//阻止冒泡
		$(".plan").on("touchend", function() {
			return false;
		});

		//首页滑动
		$(".wrap").on("swipeLeft", function() {
			var lastLeft = parseInt($(this).css("margin-left"));
			var index = Math.abs(lastLeft / parseInt($(this).width()) * 3) + 1;
			var left = parseInt($(".nav span").css("left")) / innerWidth;
			var wid = parseInt($(".wrap>div").width());

			if(lastLeft <= -2 * wid) {
				return;
			}
			$(".wrap").css({
				"margin-left": lastLeft - wid,
				"transition": "margin-left 0.3s"
			});
			$(".nav span").css({
				"left": 0.333333 + 1.6 * index + "rem",
				"transition": "left 0.3s"
			})
		})

		$(".wrap").on("swipeRight", function() {
				var lastLeft = parseInt($(this).css("margin-left"));
				var index = Math.abs(lastLeft / parseInt($(this).width()) * 3) - 1;
				var left = parseInt($(".nav span").css("left")) / innerWidth;
				var wid = parseInt($(".wrap>div").width());
				if(lastLeft >= 0) {
					return;
				}
				$(".wrap").css({
					"margin-left": lastLeft + wid,
					"transition": "margin-left 0.3s"
				});
				$(".nav span").css({
					"left": 0.333333 + 1.6 * index + "rem",
					"transition": "left 0.3s"
				})
			})
			// 食材
		$http.get("app/pages/home/json/stuff.json")
			.success(function(res) {
				$scope.normals = res.data[0].normal;
				$scope.seasons = res.data[0].season;
				$scope.stemLeafs = res.data[0].stemLeafs;
				$scope.tuberousRoots = res.data[0].tuberousRoot;
				$scope.melonFruits = res.data[0].melonFruit;
				$scope.beans = res.data[0].beans;
				$scope.mushrooms = res.data[0].mushroom;
			})
			//分类
		$http.get("app/pages/home/json/sort.json")
			.success(function(res) {
				$scope.quicks = res.data[0].quick;
				$scope.easys = res.data[0].easy;
				$scope.meats = res.data[0].meat;
				$scope.plates = res.data[0].plate;
				$scope.seafoods = res.data[0].seafood;
			})
	})
	//二级页面，今日新品等...
	.controller("newFood", function($scope, $http, $css) {
		$css.add("app/pages/home/home.css");
		$http.get("app/pages/home/json/new.json")
			.success(function(req) {
				$scope.datas = req.data;
				$scope.lists = req.data.dishes_list;
				$scope.relates = req.data.relates;
			})
	})
	.controller("meals", function($scope, $http, $css) {
		$css.add("app/pages/home/home.css");
		$http.get("app/pages/home/json/meals.json")
			.success(function(req) {
				$scope.datas = req.data;
				$scope.lists = req.data.dishes_list;
				$scope.relates = req.data.relates;
			})
	})
	.controller("easy_meal", function($scope, $http, $css) {
		$css.add("app/pages/home/home.css");
		$http.get("app/pages/home/json/easy_meal.json")
			.success(function(req) {
				$scope.datas = req.data;
				$scope.lists = req.data.dishes_list;
				$scope.relates = req.data.relates;
			})
	})

.directive('commonmodule', function() {
		return {
			restrict: 'E',
			templateUrl: "app/pages/home/homeCommon/homeCommon.html"
		}
	})
	//自定义服务，存储搜索结果
	.service("itemsService", function() {
		var selectedItems = [];
		this.set = function(obj) {
			selectedItems.push(obj);
		}
		this.get = function() {
			return selectedItems;
		}
	})

.controller("search", function($css, $scope, $http, itemsService) {
		$css.add("app/pages/home/home.css");
		var oText = document.getElementsByClassName("text")[0];
		var oHistory = document.getElementsByClassName("history")[0];

		function init() {
			if(oText.value == "") {
				$(".cancel").show();
				$(".look").hide();
			}
		}

		$scope.keydown = function(e) {
			var e = e || window.event;
			$(".clearText").show();
			$(".cancel").hide();
			$(".look").show();
			$("#search .list").show();
//			if(e.keyCode == 13 && oText.value != ""){
//				$(".look").click();
//			}
		}

		$scope.keyup = function() {
			init();
		}

		$scope.close = function() {
			oText.value = "";
			$(".clearText").hide();
			init();
		}

		//点击搜索存数据
		$scope.click = function(test) {
				//存搜索数据
				itemsService.set(test);

				//搜索
				var dataArr = [];
				if(oText.value.trim().length == 0) {
					return;
				}
				if(localStorage.data) {
					dataArr = JSON.parse(localStorage.data);
					for(var i in dataArr) {
						if(dataArr[i] == oText.value) {
							return;
						}
					}
					dataArr.push(oText.value);
					localStorage.data = JSON.stringify(dataArr);
				} else {
					dataArr.push(oText.value);
					var arr = JSON.stringify(dataArr);
					localStorage.data = arr;
				}
				oHistory.appendChild(create(oText.value));
				oText.value = "";
				//创建span
				function create(obj) {
					var span = document.createElement("span");
					span.innerHTML = obj;
					return span;
				}
			}
			//清除历史
		$scope.clear = function() {
				localStorage.clear();
				oHistory.innerHTML = "";
			}
			//读取数据	
		if(localStorage.data) {
			$scope.dat = JSON.parse(localStorage.data);
		}
		//搜索结果
		$http.get('app/pages/home/json/search.json')
			.success(function(res) {
				$scope.data = res.datas;
			})
	})

	.controller('search_result', function($scope, $http, itemsService) {
		$scope.test = itemsService.get()[0];
		$http.get('app/pages/home/json/search.json')
			.success(function(res) {
				$scope.data = res.datas;
			})
	})