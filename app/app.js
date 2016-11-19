angular.module('projectDemo',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home')
  $stateProvider
  .state({
  	name:'home',
  	url:'/home',
  	templateUrl:'app/pages/home/home.html'
  })
  .state({
  	name:'lohas',
  	url:'/lohas',
  	templateUrl:'app/pages/lohas/lohas.html'
  })
  .state({
  	name:'community',
  	url:'/community',
  	templateUrl:'app/pages/community/community.html'
  })
  .state({
  	name:'my',
  	url:'/my',
  	templateUrl:'app/pages/my/my.html'
  })
})
