$(document).ready(function(){
    $('.conference_list .list a').on('click',function(){
        $('div.detial_cnt').removeClass('on');
        $('.conference_list .list > li').removeClass('on');
        $(this).parents('li').addClass('on');
        var listIdx = $(this).parents('li').index();
        var dtc = $('div.detial_cnt');
        $('div.detial_cnt').eq(listIdx).addClass('on');
    });
    
    // F12 버튼 방지
    $(document).ready(function(){
        $(document).bind('keydown',function(e){
            if ( e.keyCode == 123 /* F12 */) {
                e.preventDefault();
                e.returnValue = false;
            }
        });
    });
    
    // 우측 클릭 방지
    document.onmousedown=disableclick;
    
    function disableclick(event){
        if (event.button==2) {
            alert(status);
            return false;
        }
    }
})
