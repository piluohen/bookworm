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
