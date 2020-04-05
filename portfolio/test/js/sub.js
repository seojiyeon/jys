$(document).ready(function(){
    $('.conference_list .list a').on('click',function(){
        $('div.detial_cnt').removeClass('on');
        $('.conference_list .list > li').removeClass('on');
        $(this).parents('li').addClass('on');
        var listIdx = $(this).parents('li').index();
        var dtc = $('div.detial_cnt');
        $('div.detial_cnt').eq(listIdx).addClass('on');
    });
})
