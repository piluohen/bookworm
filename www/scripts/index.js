var m = angular.module('myApp',[])
m.controller('MainCtrl',['$scope','$http','$window',function($scope,$http,$window){
    $http.get('/data/index.json').success(function(res){
        $scope.data = res
    })
    $http.get('/data/sign.json').success(function(res){
        $scope.data1 = res
    })
    $('#nav-title>span').click(function(){
        $(this).addClass('checked').siblings().removeClass('checked')
    })
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()>100){
                $('#title').addClass('fixed')
            }else{
                $('#title').removeClass('fixed')
            }
        })
    })
}])

m.controller('Taobao',['$scope','$http',function($scope,$http){
    $http.get('/data/taobao.json').success(function(res){
        $scope.data = res
    })
    $('#main-middle>#div-title>a').click(function(){
        $(this).addClass('clicked').siblings().removeClass('clicked')
    })
}])

m.controller('Left', ['$scope', function ($scope) {
    $(function () {
        var scrnews = $("#carouse");

        if (scrnews.children().length < 3) { return false; }

        var newst = setInterval(scro, 3500);
        $('#middle-carouse').hover(function () {
            $(this).children('span').css('display', 'block')
        }, function () {
            $(this).children('span').css('display', 'none')
        })
        scrnews.hover(function () {
            clearInterval(newst);
        }, function () {
            newst = setInterval(scro, 3500);
        })
        function scro() {
            scrnews.animate({ 'left': '-520px' }, 500, function () {
                $(this).children("li:first").appendTo(this);
                $(this).css("left", '0');
            });
        }
        $('#carouse>li').hover(function () {
            clearInterval(newst);
        }, function () {
            newst = setInterval(scro, 3500);
        })
        $('#carouse-next').click(function () {
            scrnews.children("li:last").appendTo(scrnews);
            scrnews.css('left','-520px')
            scrnews.animate({'left':0},500)
        })
        $('#carouse-prev').click(function () {
            scro()
        })
    })
}])

function showdiv(Id, divId1, divId2) {
    for (i = 0; i < 5; i++) {
        if (i == Id) {
            $('#' + (divId1 + i) + '').addClass('now_list');
            $('#' + (divId2 + i) + '').css('display', 'block')
        }
        else {
            $('#' + (divId1 + i) + '').removeClass('now_list');
            $('#' + (divId2 + i) + '').css('display', 'none')
        }
    }
}