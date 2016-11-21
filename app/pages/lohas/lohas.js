angular.module('lohasPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'lohas',
    url:'/lohas',
        css:'app/pages/lohas/lehuo.css',
        templateUrl:'app/pages/lohas/lehuo.html',
        controller:function($css){
          $css.add('app/pages/lohas/lehuo.css')
        }
  })
})
