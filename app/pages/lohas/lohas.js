angular.module('lohasPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'lohas',
    url:'/lohas',
    templateUrl:'app/pages/lohas/lohas.html'
  })
})
