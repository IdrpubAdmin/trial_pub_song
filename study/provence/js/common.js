/** ========================================================= */

// file   : common.js

/* ========================================================== */
/*----------------------------------------------------------- */

(function() {
    'use strict';

    // 메뉴 호버시 서브메뉴 드롭다운
    document.addEventListener('DOMContentLoaded',  () => {
        const toggleBtns = document.querySelectorAll('.nav-menu>li');

        toggleBtns.forEach(function(navItem,idx,list){

            let navItem1d = navItem.querySelector('.nav-menu>li>a');
            let navItem2d = navItem.querySelector('.sub-menu');

            // 1depth에 마우스 오버시 메뉴 노출
            navItem.addEventListener('mouseover', function () {
                navItem2d.classList.add('active');
                navItem1d.classList.add('on');

            })
            navItem.addEventListener('mouseout', function () {
                navItem2d.classList.remove('active');
                navItem1d.classList.remove('on');
            })
        });

    });

    //subPage breadcrumb
        const title = document.querySelector('.sub_gnb>.page_tit').textContent;
        const cast = document.getElementById('dep_cast');

        cast.innerHTML = title;

})()


/* ready e --------------------------------------------------
/*----------------------------------------------------------- */