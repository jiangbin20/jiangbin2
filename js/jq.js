$(function($){
$('.nav li').click(function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
})

$('.bd_top li').click(function(){
    $('.bd_top li').removeClass('active');
    $(this).addClass('active')
    $('.bd_bottom>div').removeClass('active');
    $('.bd_bottom>div').eq($(this).index()).addClass('active');
})
})
