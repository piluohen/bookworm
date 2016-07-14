var m = angular.module('Sign',[])
m.controller('SignCtrl', ['$scope','$http','$window', function($scope,$http,$window){
    $http.get('/data/sign.json').success(function(res){
        $scope.data = res
    })

    $scope.save = function(){
        $http.post('/user/signin', $scope.sign).then(function(res){
            console.log(res.data)
            // $('#my>span:first').text($scope.sign.username)
            // $('#my>span:eq(1)').text('退出登录').on('click',function(){
            //     $('#my>span:first').text('请登录')
            //     $(this).text('免费注册').remove
            // })
            $window.location.href = 'index.html'
        })
    }
    
    $(function(){
        $('#right').css('color','orange')
        $('#right').click(function(){
            var n = $('#outer>input').val()
            if(n<=0 && n>= -1){
                $('#left').css('color','orange')
                $('#right').css('color','orange')

                var lengthstr=(n-1) *880+"px";
                $("#inner").animate({'left':lengthstr},1500);
                $('#outer>input').val(n-1)
            }
            if(n<0){
                $('#right').css('color','#666')
            }
        })
        $('#left').click(function(){
            var n = parseInt($('#outer>input').val())
            if(n>= -2 && n<0){
                $('#left').css('color','orange')
                $('#right').css('color','orange')

                var lengthstr=(n+1)*880+"px";
                $("#inner").animate({'left':lengthstr},1500);
                $('#outer>input').val(n+1)
            }
            if(n>=-1){
                $('#left').css('color','#666')
            }
        })
    })
}])

