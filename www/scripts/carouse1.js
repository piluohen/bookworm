// $(function(){
//     var scrnews=$("#inner")

//     if(scrnews.children().length<5){return false;}
//     var newst=setInterval(scro,3500)
//     // var list=setInterval(li,3500)
//     scrnews.hover(function(){
//         clearInterval(newst)
//         // clearInterval(list)
//     },function(){
//         newst=setInterval(scro,3500)
//         // list=setInterval(li,3500)
//     })
//     function scro(){
//         scrnews.animate({marginTop:-300},1500,function(){
//             $(this).children("img:first").appendTo(this)
//             $(this).css("marginTop",'0')
//             $(this).next().children().attr('current')
//         })
//     }
//     // function li(){
//     //     $('#outer>ul').animate(null,1500,function(){
//     //         $(this).children("li:first").appendTo(this)
//     //         $(this).children().attr('current')
//     //         $(this).css("marginTop",'0')
//     //     })
//     // }
// })

$(function () {
    var xhRight = null;
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
        scrnews.animate({ 'left': '-518px' }, 1500, function () {
            $(this).children("li:first").appendTo(this);
            $(this).css("left", '0');
        });
    }
    $('#carouse>li').hover(function () {
        clearInterval(newst);
    }, function () {
        newst = setInterval(scro, 3500);
    })
    $('#carouse-prev').click(function () {
        scrnews.children("li:first").appendTo(scrnews);
    })
    $('#carouse-next').click(function () {
        scrnews.children("li:last").prependTo(scrnews);
    })
})

function showdiv(Id, divId1, divId2) {
    for (i = 0; i < 5; i++) {
        if (i == Id) {
            $('#'+ (divId1 + i) +'').addClass('now_list');
            $('#'+ (divId2 + i) +'').css('display', 'block')
        }
        else {
            $('#'+ (divId1 + i) +'').removeClass('now_list');
            $('#'+ (divId2 + i) +'').css('display', 'none')
        }
    }
}