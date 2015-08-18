angular.module('Sta_Ctrlr', ['ionic', 'nvd3ChartDirectives'])

.controller('StaTabCtrl', function($scope) {
	console.log('StaTabCtrl');
	$scope.staScope = $scope;
	
	$scope.staScope.telr = [
		{
			name:"telr_1",
			sta:[
				{
					key:"workload",
					values:[
						[1, 2],
						[2, 5],
						[3, 3],
						[4, 12],
						[5, 7],
						[6, 6],
						[7, 0],
					],
				},{
					key:"check speed",
					values:[
						[1, 3],
						[2, 5],
						[3, 2],
						[4, 15],
						[5, 9],
						[6, 13],
						[7, 3],
					],
				}
			]
			
		},
		{
			name:"telr_2",
			sta:[
				{
					key:"workload",
					values:[
						[1, 5],
						[2, 5],
						[3, 5],
						[4, 5],
						[5, 7],
						[6, 6],
						[7, 0],
					],
				},{
					key:"check speed",
					values:[
						[1, 3],
						[2, 5],
						[3, 2],
						[4, 15],
						[5, 9],
						[6, 13],
						[7, 3],
					],
				}
			]
			
		},
	];
	
	$scope.staScope.choosen = $scope.staScope.telr[0];
	$scope.staScope.choosen1 = $scope.staScope.telr[0];
	$scope.staScope.choosen2 = $scope.staScope.telr[1];
	
	$scope.staScope.displayDetail = false;
	
	$scope.staScope.hiddenChart = function(){
		$scope.staScope.displayDetail = false;
	}
	
	$scope.staScope.whichIChosen = function(){
		$scope.staScope.displayDetail = true;
		
		/*
		console.log("now chosen", JSON.stringify($scope.staScope.choosen));

		document.getElementById("lineCanvas").innerHTML = '';
		document.getElementById("lineCanvas").innerHTML = 	'<nvd3-cumulative-line-chart '+
															'	data="staScope.choosen.sta" '+
															'	id="exampleId" '+
															'	width="500" '+
															'	height="350" '+
															'	showXAxis="true" '+
															'	showYAxis="true" '+
															'	showLegend="true" '+
															'	yAxisTickFormat="yAxisTickFormatFunction()" '+
															'	xAxisTickFormat="xAxisTickFormatFunction()" '+
															'	margin="{left:70,top:70,bottom:70,right:125}"> '+
															'	<svg></svg> '+
															'</nvd3-cumulative-line-chart>';
															
		*/
	}
	
			
	
	
	
	
	
	
	
	
});