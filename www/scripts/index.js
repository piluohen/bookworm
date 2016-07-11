var m = angular.module('MainPage',[])
m.controller('MainCtrl',['$scope','$http',function($scope,$http){
    $http.get('/data/index.json').success(function(res){
        $scope.data = res
    })

}])