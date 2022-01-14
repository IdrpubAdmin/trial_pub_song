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

    /* ------subPage breadcrumb ---------*/

    // first gnb txt
    const sub_title = document.querySelector('.menu>a>.ko').textContent;
    const sub_cast = document.getElementById('sub_cast');

    //second gnb txt
    const title = document.querySelector('.sub_gnb>.page_tit').textContent;
    const cast = document.getElementById('dep_cast');

    sub_cast.innerHTML = sub_title;
    cast.innerHTML = title;

    /*---------// subPage breadcrumb---- */


})()


/* function ChnImg(){

    document.getElementById("imgId").src = "../../../images/subPage/sub-list-2.png";

}; */


/* ready e --------------------------------------------------
/*----------------------------------------------------------- */