var m = angular.module('myApp', [])
m.controller('RegCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.save = function () {
        var pass = $(':password').map(function () {
            return $(this).val()
        })

        if (pass[0] == pass[1]) {
            $('#password-error').text('')
            $http.post('/user/register', $scope.reg).then(function (res) {
                console.log(res.data.message)
                if (res.data.code == 'registered') {
                    $('#username>i').css('display', 'none')
                    $('<i></i>').addClass('icon-remove-sign').text(' ' + res.data.message).appendTo('#username')
                    $('#username>input').on('input', function () {
                        $('#username>i').css('display', 'inline')
                        if ($('#username>i').text() != '') {
                            $('#username>i:last').remove()
                        }
                    })
                } else {
                    $window.location.href = 'sign.html'
                }
            })
        }
        else {
            $('#password-error').text('输入密码不一致！')
        }
    }
}])