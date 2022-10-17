var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',['$scope', function($scope){
 
  $scope.removeNinja = function(ninja){
    var removeNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removeNinja, 1)
  };
  $scope.addNinja = function(){
    $scope.ninjas.push({
     name: $scope.newninja.name,
     belt: $scope.newninja.belt,
     rate: parseInt($scope.newninja.rate)
    });
    $scope.newninja.name="";
    $scope.newninja.belt="";
    $scope.newninja.rate="";
   };

  $scope.ninjas= [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50,
      thumb:"yoshi.png"
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 100,
      thumb: "crystal.png"
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 500,
      thumb: "ryu.png"
    },
    {
      name: "Shaun",
      belt: "black",
      rate: 1000,
      thumb: "shaun.png"
    }

  ];

}]);