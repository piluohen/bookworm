angular.module('myApp').controller('Header', ['$scope', '$window', '$http',
    function ($scope, $window, $http) {
        var username = $.cookie('username')
        if (username) {
            $('#my>i').text('花径不曾缘客扫，蓬门今始为君开')
            $('#my>span#sign').text(username).click(function () {
                $window.location.href = 'user.html'
            })
            $('#my>span#register').text('退出登录').click(function () {
                $http.get('/user/signout', null).success(function (res) {
                    if (res.code == 'success') {
                        $window.location.href = 'index.html'
                    }
                })
            })
            $('#my>span#shopbar').click(function(){
                $window.location.href = 'shop.html'
            })
            $('#my>span#bookracks').click(function(){
                $window.location.href = 'bookrack.html'
            })
            $('#my>span#indents').click(function(){
                $window.location.href = 'indent.html'
            })
            $('#my>span#users').click(function(){
                $window.location.href = 'user.html'
            })
        }
        else {
            $('#my>span#sign').text('请登录').click(function () {
                $window.location.href = 'sign.html'
            })
            $('#my>span#register').text('免费注册').click(function () {
                $window.location.href = 'register.html'
            })
            $('#my>span#shopbar,#my>span#bookracks,#my>span#indents,#my>span#users').click(function(){
                $window.location.href = 'sign.html'
            })
        }
    }
])