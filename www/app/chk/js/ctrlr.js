angular.module('Chk_Ctrlr', ['ionic'])

.controller('ChkTabCtrl', function($scope, $rootScope) {
  console.log('ChkTabCtrl');
  
  $scope.user = $rootScope.user;
  
})


.controller('ChkDetailCtrl', function($scope, $rootScope, $stateParams) {
  console.log('ChkDetailCtrl');
  
  $scope.user = $rootScope.user;
  $scope.test = $stateParams.chk_id;
  
});