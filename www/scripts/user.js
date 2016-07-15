var m = angular.module('myApp',[])
m.controller('UserCtrl',['$scope','$http','$window', function($scope,$http,$window){
    $http.get('/data/index.json').success(function(res){
        $scope.data = res
    })
    $(function(){
        // var i = 0
        // var t = setInterval(move,2000)
        // function move(){
        //     if(i == 5){
        //         i=0
        //     }
        //     var length = '-'+ (i + 1)*300 + 'px'
        //     var length1 = -300*i +'px'
        //     $('#inner').animate({'top':length},1000,function(){
        //         $(this).children().first().appendTo(this)
        //         $(this).css('top',length)
        //         i++
        //     })
        // }
        
        func
    })
}])