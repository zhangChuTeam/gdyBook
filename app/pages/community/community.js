angular.module('communityPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'community',
    url:'/community',
    templateUrl:'app/pages/community/community.html'
  })
})
