angular.module('Chk_Ctrlr', ['ionic'])

.controller('ChkTabCtrl', function($scope) {
  console.log('ChkTabCtrl');
  
  $scope.test = "111";
  
})


.controller('ChkDetailCtrl', function($scope, $stateParams) {
  console.log('ChkDetailCtrl');
  
  $scope.test = $stateParams.chk_id;
  
});