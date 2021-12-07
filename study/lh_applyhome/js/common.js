

window.addEventListener('DOMContentLoaded', function()
{
    const menu = document.querySelectorAll('.menu');
    const bg = document.querySelector('.gnb_bg');

    for (var i = 0; i < menu.length; i++) {
        menu[i].addEventListener('mouseenter', function(){
            for(var x = 0; x < menu.length; x++){
                menu[x].classList.remove('on');
            }
            this.classList.add('on');
        });
        menu[i].addEventListener('mouseleave', function(){
            for(var x = 0; x < menu.length; x++){
                menu[x].classList.remove('on');
            }

        });
    }

    var nav = document.querySelector('.gnb_wrap');

    nav.addEventListener('mouseenter', function(){
        bg.style.left = '280px';
        bg.style.zIndex = '1';
        bg.style.display = 'block';
    });
    nav.addEventListener('mouseleave', function(){
        bg.style.left = '0px';
        bg.style.zIndex = '-1';
        bg.style.display = 'none';
    });

});


