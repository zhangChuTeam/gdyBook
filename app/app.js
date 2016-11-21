angular.module('projectDemo',['ui.router',"angularCSS",
"homePage",
"lohasPage",
"communityPage",
"myPage"])
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home')
})
