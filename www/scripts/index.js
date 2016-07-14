var m = angular.module('myApp',[])
m.controller('MainCtrl',['$scope','$http','$window',function($scope,$http,$window){
    $http.get('/data/index.json').success(function(res){
        $scope.data = res
    })
    var username = $.cookie('username')
    if(username){
        $('#my>i').text('花径不曾缘客扫，蓬门今始为君开')
        $('#sign').text(username).click(function(){
            $window.location.href = 'user.html'
        })
        $('#register').text('退出登录').click(function(){
            $http.get('/user/signout', null).success(function(res){
                if(res.code == 'success'){
                    $window.location.href = 'index.html'
                }
            })
        })
    }
    else{
        $('#sign').text('请登录').click(function(){
            $window.location.href = 'sign.html'
        })
        $('#register').text('免费注册').click(function(){
            $window.location.href = 'register.html'
        })
    }
}])