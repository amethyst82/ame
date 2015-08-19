angular.module('Chk_Ctrlr', ['ionic'])

.controller('ChkTabCtrl', function($scope, $rootScope, $state, Restangular) {
  console.log('ChkTabCtrl');
  
  $scope.user = $rootScope.user;
  
//  1."approveUser",取值为"true或fale"代表当前用户是否为审批柜员
//  2.“trlNumber”,柜员号
//  3.“approved”,取值为“true或false”代表查看的是已审批或未审批的列表
  var param = {
		  approveUser: $scope.user.approveUser,
		  trlNumber: $scope.user.id,
		  approved: false,
		  
  };
  
  $scope.items = [];
  
  Restangular.all('v1/fakedatalist').getList(param).then(function(data){
	  $scope.items = data;
	  
  });
  	
  $scope.show_detail = function(item){
	  $state.go('tabs.detail', {item: JSON.stringify(item)});
	  
  }
  
})


.controller('ChkDetailCtrl', function($scope, $rootScope, $stateParams, $state) {
  console.log('ChkDetailCtrl');
  
  $scope.user = $rootScope.user;
  $scope.item = JSON.parse($stateParams.item);
  
  $scope.back2list = function(){
	  $state.go('tabs.chk');
	  
  }
  
});