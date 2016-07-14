angular.module('myApp').controller('Header', ['$scope', '$window', '$http',
    function ($scope, $window, $http) {
        var username = $.cookie('username')
        if (username) {
            $('header>#my>span#sign').text(username).click(function () {
                $window.location.href = 'user.html'
            })
            $('header>#my>span#register').text('退出登录').click(function () {
                $http.get('/user/signout', null).success(function (res) {
                    if (res.code == 'success') {
                        $window.location.href = 'index.html'
                    }
                })
            })
        }
        else {
            $('#sign').text('请登录').click(function () {
                $window.location.href = 'sign.html'
            })
            $('#register').text('免费注册').click(function () {
                $window.location.href = 'register.html'
            })
        }
    }
])