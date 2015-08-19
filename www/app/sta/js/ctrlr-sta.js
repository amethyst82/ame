angular.module('Sta_Ctrlr', ['ionic', 'nvd3ChartDirectives', 'ngLodash'])

.controller('StaTabCtrl', function($scope, Restangular, lodash) {
	console.log('StaTabCtrl');
	
	$scope.staScope = $scope;
	
	$scope.staScope.staTitle = "总览";
	$scope.staScope.summaryModal = true;
	
	
	$scope.staScope.telrs = [];
	$scope.staScope.telrSpeed = [];

	
	Restangular.all('v1/fakesta').getList().then(function(data){
		$scope.staScope.speedCompare = [
		                        	    {
		                        	    	key: "speed compare",
		                        	    	values: [],
		                        	    }
		                            ];
		$scope.staScope.workloadCompare = [];
		for(var i=0; i<data.length; i++){
		  $scope.staScope.speedCompare[0].values.push([
		                                               data[i].telrName,
		                                               data[i].avg,
		                                               ]);
		  
		  var staWorkload = [];
		  var staChkSpeed = [];
		  var workload = 0;
		  
		  for(var n=0; n<data[i].items.length; n++){
			  staWorkload.push([
			            n+1,
			            data[i].items[n].assginItemNum,
			            
			            ]);
			  
			  staChkSpeed.push([
			             n+1,
			             data[i].items[n].chkItemNum,
			                    ]);
			  
			  workload += data[i].items[n].assginItemNum;
			  
		  }
		  
		  $scope.staScope.telrs.push({
			  name: data[i].telrName,
			  sta: [
			        {
			        	key:"workload",
			        	values: staWorkload,
			        	
			        }, {
			        	key:"check speed",
			        	values: staChkSpeed,
			        	
			        },
			        
			        ],
			  
		  });
		  
//		  $scope.staScope.workloadCompare = [
//		       	                          {"name":"Teller_8","workLoad":4},
//		       	                          {"name":"Teller_7","workLoad":1},
//		       	                          {"name":"Teller_6","workLoad":12},
//		       	                          {"name":"Teller_5","workLoad":2},
//		       	                          {"name":"Teller_4","workLoad":3},
//		       	                          {"name":"Teller_3","workLoad":4},
//		       	                          {"name":"Teller_2","workLoad":4},
//		       	                          {"name":"Teller_1","workLoad":2},
//		       	                         ];
		  
		  $scope.staScope.workloadCompare.push({
			  name: data[i].telrName,
			  workLoad: workload,
			  
		  });
		  
		  
		}
		
		$scope.staScope.choosen = $scope.staScope.telrs[0];
		
		console.log("assemble complete");
		  
	  });
	
	
	$scope.staScope.xPieChartFn = function(){
		return function(d){
			return d.name;
		}
	}
	
	$scope.staScope.yPieChartFn = function(){
		return function(d){
			return d.workLoad;
		}
	}
	
	$scope.staScope.xBarChart = function(){
		return function(d){
			return d;
		}
		
	}
	
	$scope.staScope.colorFunction = function(){
		//do nothing
	}
	
	$scope.staScope.showSummary = function(){
		$scope.staScope.summaryModal = true;
		$scope.staTitle = "总览";
		
	}
	
	$scope.staScope.showSpeTelr = function(){
		$scope.staScope.summaryModal = false;
		$scope.staTitle = $scope.staScope.choosen.name;
		
		resovleD3nvBug();
	}
	
	
	var resovleD3nvBug = function(){
		var textElements = document.getElementsByTagName("text");
		for(var i=0; i<textElements.length; i++){
//			console.log(textElements[i].innerHTML);
			
			if("Re-scale y-axis" == textElements[i].innerHTML){
				var removeTargetDOM = textElements[i].parentNode;
				removeTargetDOM.parentNode.removeChild(removeTargetDOM);
				
			}
			
		}
		
		
	}
	
	
});