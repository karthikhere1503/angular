(function(){
 	var app = angular.module('myApp',[]);
  console.log(JSON.stringify(app));
  app.controller("PlanDataController",function($scope){
 	$scope.isreport = true;
	$scope.isInputRequired = true;
	$scope.isBackButton = true;
	$scope.min = 0;
	$scope.max=99;
	$scope.isDisplay = false;
	$scope.validateDt = function(startDt, endDt){
		if(new Date(endDt)<=new Date(startDt)){
			$scope.notify = "End Date should be greater than Start Date";
			console.log($scope.endDate);
			$scope.isreport = true;
			return false;
		} else {
			$scope.notify = "";
			($scope.startDate && $scope.endDate)?$scope.isreport = false: "";
		}
		
	};
	$scope.genReport = function(){
		$scope.notify = "";
		$scope.isgraphValue = false;
		$scope.report_startdt = $scope.startDate;
		$scope.report_enddt = $scope.endDate;
		if($scope.graphValue<=100 && $scope.graphValue >0){
			$scope.isInputRequired = false;
			$scope.isgraphValue= true;
			$scope.isBackButton = false;
			($scope.isgraphValue && $scope.name)?$scope.isDisplay= true: $scope.notify = "Name or Value is missing";
		}else{
			$scope.notify = "Value : 1 - 100";
		}
		
	}
	$scope.dispInputData = function(){
		location.reload();	
	}
 });
})();