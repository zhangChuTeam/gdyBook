angular.module('myPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'my',
    url:'/my',
    templateUrl:'app/pages/my/my.html'
  })
})
