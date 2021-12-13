

(function() {
    'use strict';  // 정의되어있지않는 문법을 썼을때 consol창에 에러뜨게해줌, 성능개선효과

    /* --------pc-------- */
    const menu = document.querySelectorAll('.menu');
    const bg = document.querySelector('.gnb_bg');
    const dim = document.querySelector('.dim');

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
    };

    var nav = document.querySelector('.gnb_wrap');
    nav.addEventListener('mouseenter', mouseenter);
    nav.addEventListener('mouseleave', mouseleave);

    function mouseenter() {
        bg.classList.add('active');
        dim.classList.add('_on');
    }

    function mouseleave() {
        bg.classList.remove('active');
        dim.classList.remove('_on');
    }

    /*
    위에처럼 변수화 시켜서 사용할수있다 (중복사용될 이벤트라면)
    var nav = document.querySelector('.gnb_wrap');

    nav.addEventListener('mouseenter', function(){
        bg.classList.add('active');
        dim.classList.add('_on');
    });
    nav.addEventListener('mouseleave', function(){
        bg.classList.remove('active');
        dim.classList.remove('_on');
    });
 */

    /* --------mo-------- */
    const m_nav = document.querySelectorAll('.menu');

    for (var i = 0; i < m_nav.length; i++) {
        m_nav[i].addEventListener('click', function(){
            for(var x = 0; x < m_nav.length; x++){
                m_nav[x].classList.remove('m_on');
            }
            this.classList.add('m_on');
        });
    };

    /* 햄버거메뉴 클릭시  */
    const open_menu = document.querySelector('.m_menu');
    const header = document.querySelector('.header');

    open_menu.addEventListener('click', click);

    function click(){
        open_menu.classList.toggle('open');
        header.classList.toggle('none');
    }

    /* 2dep 메뉴 클릭시 아코디언 */
    const tow_dep = document.querySelectorAll('.lnb_active');
    const gnb_inner = document.querySelector('.gnb_inner');

    for(i =0; i<tow_dep.length; i++){
        tow_dep[i].addEventListener('click', function(e){
            e.preventDefault()
            gnb_inner.classList.toggle('sub_lnb');
        })
    }





})();


