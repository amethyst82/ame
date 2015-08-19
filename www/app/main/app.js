var dep = [
	'ionic', 
	'ngCordova', 
	'ngLodash', 
	'restangular', 
	'Chk_Ctrlr', 
	'Sign_Ctrlr', 
	'Sta_Ctrlr',
	];

angular.module('cobdApp', dep)

.run(function($ionicPlatform) {
	  $ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar) {
	      StatusBar.styleDefault();
	    }
	  });
	})

.config(function($stateProvider, $ionicConfigProvider, $urlRouterProvider, RestangularProvider, $locationProvider) {
	RestangularProvider.setBaseUrl('http://127.0.0.1:8080/PricingCenter/api/');
	
	RestangularProvider.addResponseInterceptor(
	   function(data, operation, what, url, response, deferred) {
	
		   $locationProvider.authToken = response.headers('authorization');
		   console.log('Authorization Headers: ' + $locationProvider.authToken);
	
		   return data.data;
	   }
	 );
	
	RestangularProvider.setDefaultHeaders({
	  Authorization: $locationProvider.authToken
	 });
	
	RestangularProvider.addFullRequestInterceptor(
	   function (element, operation, route, url, headers, params, httpConfig) {
	    console.log('Intercepting request: ' + $locationProvider.authToken);
	
	 headers['Authorization'] = $locationProvider.authToken;
	   }
	 );
	
	
	$ionicConfigProvider.tabs.position('bottom');
	$ionicConfigProvider.tabs.style('standard');
	$ionicConfigProvider.views.transition('ios');
	$ionicConfigProvider.navBar.alignTitle('center');
	$ionicConfigProvider.form.checkbox("circle");
	$ionicConfigProvider.form.toggle('large');
	$ionicConfigProvider.navBar.positionPrimaryButtons('left');
	$ionicConfigProvider.navBar.positionSecondaryButtons('right');
	$ionicConfigProvider.backButton.icon('ion-ios-arrow-back');

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
      url: '/detail/:item',
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

});
