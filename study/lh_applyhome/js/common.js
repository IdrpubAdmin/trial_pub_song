

window.addEventListener('DOMContentLoaded', function()
{
    const menu = document.getElementsByClassName("gnb_list");

    function slideDown(){
        menu.style.left ="-280px";
    }

    function slideUp(){
        menu.style.left="0px";
    }

    function handleMouseMove(event){
        let clientX = event.clientX;

    if(clientX >=0 && clientX <=100){
        slideUp();
    }else if (clientX > 290) {
        slideDown();
    }
    }

    function init(){
        document.addEventListener("mousemove", handleMouseMove);
    }

    init();


});



