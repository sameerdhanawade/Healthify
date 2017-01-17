(function(){  

var app=angular.module("Medicines",[]);




app.controller('MyCtrl', function($scope){ 
    $scope.data = 'none';    
    $scope.display = function(){
      var f = document.getElementById('file').files[0],
          r = new FileReader();
      r.onloadend = function(e){        
          var binary = "";
var bytes = new Uint8Array(e.target.result);
var length = bytes.byteLength;

for (var i = 0; i < length; i++) 
{
    binary += String.fromCharCode(bytes[i]);
}

$scope.data = (binary).toString();

          alert($scope.data);
      };
      r.readAsArrayBuffer(f);
    };
})();
	
})();  