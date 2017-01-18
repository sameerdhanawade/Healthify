var app=angular.module('Profile',[]);

app.controller('Add', ['$scope', function($scope){
	$scope.Address="786,Buckingham Palace,Old Trafford,North London.";
	$scope.Age="24";
	$scope.Email="Sameer@CR7.com";
	$scope.Gender="Male";
	$scope.DOB="17/04/1993";
	$scope.BloodGroup=["A+ve","A-ve","B+ve","B-ve","O+ve","AB+ve","O-ve"];
	$scope.Occupation="Software Engineer";
}])
app.controller('add1',['$scope',function  ($scope) {
	$scope.Height="5.6ft";
	$scope.weight="70kgs";
	$scope.BMI="24.5";
	$scope.Allergies="Pain Killers";
	$scope.Mediclaim=["Yes","No"];
	$scope.Mediclaim_ID="NBHC02758";
}])
