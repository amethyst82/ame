angular.module('Sign_Ctrlr', ['ionic'])

.controller('SignInCtrl', function($scope, $state, $rootScope) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $rootScope.user = user;
    $state.go('tabs.chk');
  };
  
});
