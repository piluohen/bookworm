var m = angular.module('Sign',[])
m.controller('SignCtrl', ['$scope','$http', function($scope,$http){
    $http.get('/data/sign.json').success(function(res){
        $scope.data = res
    })
}])

