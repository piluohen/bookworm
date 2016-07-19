var m = angular.module('myApp', [])
m.controller('UserCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $http.get('/data/user.json').success(function (res) {
        $scope.data = res
    })
    var username = $.cookie('username')
    $('#name').text(username)
}])