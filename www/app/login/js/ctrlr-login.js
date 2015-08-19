angular.module('Sign_Ctrlr', ['ionic'])

.controller('SignInCtrl', function($scope, $state, $rootScope, $ionicHistory, Restangular) {
  if(!$rootScope.user){
	  $rootScope.user = {
			  username: '',
			  password: '',
			  
	  }
  }
  
  $scope.user = {
	username: '320223999351',
  	password: "MMCLFV",
  }
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    
    if(!user || !user.username || !user.password){
    	alert("登录失败！");
    }else{
    	var loginObject = Restangular.one('v2/login');

        loginObject.tid = user.username;
        loginObject.passwd = user.password;

        loginObject.post().then(
          function success(data) {
            console.log('sigin ', data);
            $rootScope.user = data;
            
            $rootScope.user.approveUser = data.auths[1] == "ROLE_A";
            
            $state.go('tabs.chk');
            
          },
          function failure(error) {
            alert("登录失败");
          });
    	
//    	$rootScope.user = {
//    			name: "包春春",
//    	};
//    	$state.go('tabs.chk');
    	
    }
  };
  
  $scope.$on("$ionicView.enter", function(scopes, states){
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache();
});

  
})

.controller('FootCtrl', function($scope, $state, $rootScope, $ionicHistory) {
	console.log('FootCtrl');
	
	$scope.foot_switch = function(target){
		console.log(target);
		$state.go(target);
		
	}
	
	$scope.signOut = function() {
		console.log('Sign-Out', $rootScope.user);
		$rootScope.user = undefined;
		
		$state.go('signin');
	};
	
});

