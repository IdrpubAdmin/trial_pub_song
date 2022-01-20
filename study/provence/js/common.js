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



})() /* //---end--- */


/*subPage bg change
function ChangeImg(subBg)
{
    let firstDepth = subBg.substr(0,1);
    let secondDepth = subBg.substr(1,1);
    if( firstDepth == '1' ){
        document.getElementById('here').classList.add('bg_imb1');

    }else if( firstDepth == '2' ) {
        document.getElementById('here').classList.add('bg_imb2');
        if( secondDepth == '1'){
            location.href = "../../page/provence/introduce.html";
        } else {
            location.href = "../../page/village/cafe.html";
        }

    }else if( firstDepth == '3' ) {
        document.getElementById('here').classList.add('bg_imb3');
        if( secondDepth == '1'){
            location.href = "../../page/provence/introduce.html";
        } else {
            location.href = "../../page/tower/tower.html";
        }
    }
} */


/* ready e --------------------------------------------------
/*----------------------------------------------------------- */