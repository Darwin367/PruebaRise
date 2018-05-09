var app = angular
      .module("AppHome", [])
      .controller("HomeController", HomeController);


HomeController.$inject = ["$scope", "$http","$timeout","jsonFactorie"];

function HomeController($scope,$http,$timeout,jsonFactorie){

  var ctrl = this;
  ctrl.acutalProduct = {};
  ctrl.complementLook = [];
  ctrl.recommendedProducts = [];

  ctrl.init = function() {
  	angular.forEach(jsonFactorie.getProducts(),function(value,key){
  		if(key == 0){
  			ctrl.acutalProduct = value;
  		}

  		if(value.type == "complementLook"){
  			ctrl.complementLook.push(value); 
  		}else if(value.type == "recommended"){
  			ctrl.recommendedProducts.push(value);
  		}
  	});
  };
  
  $timeout(ctrl.init);
}