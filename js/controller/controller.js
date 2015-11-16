angular
	.module("urlOpener")
	.controller("myCtrl", ["$scope", "$window", function($scope, $window){
		$scope.urlsArr = [];
		$scope.openUrls = function(){
			$scope.urlsArr = [];
			var b = $scope.textArea;
			if(b){
				b.split("\n").forEach(function(url, idx){
					$window.open(url);
					$scope.urlsArr.push(url);
				});
			}
		}
		$scope.concat = function(){
			$scope.urlsArr = [];
			var a = $scope.firstPtrn,
					b = $scope.textArea,
					c = $scope.secondPtrn ? $scope.secondPtrn : "";
			if(a && b){
				b.split("\n").forEach(function(sku, idx){
					var url = a + sku + c;
					$scope.urlsArr.push(url);
					$window.open(url);
				});
			}
		}

	}]);