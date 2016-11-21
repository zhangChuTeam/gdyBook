angular.module('communityPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
  	css:"app/pages/community/community.css",
    name:'community',
    url:'/community',
    templateUrl:'app/pages/community/community.html'
  })
})
