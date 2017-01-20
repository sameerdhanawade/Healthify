
var app=angular.module('Appointment',[]);

app.controller('Doctor_list', ['$scope', function($scope){
	$scope.records=[{
		"Name":"Dr.Rajesh Gajra",
		"Degree":"MD,MBBS",
		"Clinic":"Aarogya Hospital",
		"Time":"9.30 AM - 1.30 PM",
		"Place":"Andheri West",
		"Price":"500"
	},
	{
		"Name":"Dr.Samir Shah",
		"Degree":"MD,MBBS",
		"Clinic":"Hema Hospital",
		"Time":"9.30 AM - 1.30 PM",
		"Place":"Mulund West",
		"Price":"600"
	},
	{
		"Name":"Dr.D.D.Khona",
		"Degree":"MD,DORL,E.N.T",
		"Clinic":"Khona's Hospital",
		"Time":"9.30 AM - 1.30 PM",
		"Place":"Mulund West",
		"Price":"800"

	},
	{
		"Name":"Dr.Agarwal",
		"Degree":"MD,DM",
		"Clinic":"Aditi Hospital",
		"Time":"6.30 AM - 10.30 PM",
		"Place":"Thane West",
		"Price":"1000"

	}
	];

	 $scope.Locations = ['Andheri West', 'Mulund West', 'Thane West'];

	  $scope.selection = [];

  // Toggle selection for a given fruit by name
  $scope.toggleSelection = function toggleSelection(Location) {
    var idx = $scope.records.indexOf(Location);

    // Is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.selection.push(Location);
    }
  };

   $scope.Locatinfilter = function(Location) {
        if ($scope.selection.length > 0) {
            if ($.inArray(Location, $scope.selection) < 0)
                return;
        }
        
        return fruit;
    }

}])