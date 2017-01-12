
	(function(){  


var app = angular.module("Dashboard", []);

app.controller('nav', function($scope) {
    $scope.SearchDoc=function(){
    	 $location.path("SearchDoctor.html");
    }
});

})();  