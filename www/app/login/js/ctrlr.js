angular.module('Sign_Ctrlr', ['ionic'])

.controller('SignInCtrl', function($scope, $state, $rootScope) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    
    if(!user || !user.username || !user.password){
    	alert("登录失败！");
    }else{
	    $rootScope.user = user;
	    $state.go('tabs.chk');
    }
  };
  
});
