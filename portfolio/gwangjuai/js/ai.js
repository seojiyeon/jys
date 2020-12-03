document.onmousedown=disableclick;
status="Right click is not available.";
    
function disableclick(event){
    if (event.button==2) {
        alert(status);
        return false;
    }
}
// 개발자 도구(F12) 방지
$(function(){
    $(document).bind('keydown',function(e){
        if ( e.keyCode == 123 /* F12 */) {
            e.preventDefault();
            e.returnValue = false;
        }
    });
});

