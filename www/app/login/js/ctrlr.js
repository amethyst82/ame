angular.module('Sign_Ctrlr', ['ionic'])

.controller('SignInCtrl', function($scope, $state) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tabs.chk');
  };
  
});
