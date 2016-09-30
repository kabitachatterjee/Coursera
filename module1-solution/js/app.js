(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.item = '';
  $scope.color = '';
  $scope.message = '';
  $scope.menuCheck = function() {
  var menu = $scope.item.split(',');
 // console.log(menu);
  var count = 0;
  for (var i = 0; i<= menu.length; i++){
  	//console.log(menu[i]);
  	console.log(menu);
  	  if (menu[i] === '') {
  		count = count + 1;
        //console.log(count);
      }
   }
   menu.length = (menu.length - count);
  		//console.log(menu.length);
  		$scope.message ='We do not consider space as an item';
  		
    if (menu.length == 0){
    	$scope.message ='Please enter some data';
      $scope.color = 'red';

    }
    else {

    if ((menu.length <= 3) && (menu.length != 0)){
    	$scope.message = 'Enjoy!';
      $scope.color = '#0fda2a';
    }
    else{
    	$scope.message = 'Too much!';
      $scope.color = '#0fda2a';
    }
  	
  	}
  	
  };

}

})();
