angular.module('cobdApp', ['ionic', 'Chk_Ctrlr', 'Sign_Ctrlr', 'Sta_Ctrlr'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'app/login/pages/sign-in.html',
      controller: 'SignInCtrl'
    })
    .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: 'app/login/pages/forgot-password.html'
    })
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'app/main/foot.html',
      controller: 'FootCtrl'
    })
    .state('tabs.chk', {
      url: '/chk',
      views: {
        'tab-chk': {
          templateUrl: 'app/chk/pages/chk.html',
          controller: 'ChkTabCtrl'
        }
      }
    })
    .state('tabs.detail', {
      url: '/detail/:chk_id',
      views: {
        'tab-chk': {
          templateUrl: 'app/chk/pages/detail.html',
          controller: 'ChkDetailCtrl'
        }
      }
    })
    .state('tabs.sta', {
      url: '/sta',
      views: {
        'tab-sta': {
          templateUrl: 'app/sta/pages/sta.html',
          controller: 'StaTabCtrl'
        }
      }
    })

   $urlRouterProvider.otherwise('/sign-in');

})

.controller('FootCtrl', function($scope, $state) {
	console.log('FootCtrl');
	$scope.foot_switch = function(target){
		console.log(target);
		$state.go(target);
		
	}
	
});
