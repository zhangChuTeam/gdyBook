angular.module('myPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'my',
    url:'/my',
    css:'app/pages/my/my.css',
    templateUrl:'app/pages/my/my.html',
    controller:function($css){
      $css.add('app/pages/my/my.css')
    }
  })
})


