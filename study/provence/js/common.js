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

    // subPage first gnb txt
    // const sub_title = document.querySelector('.menu>a>.ko').textContent;
    // const sub_cast = document.getElementById('sub_cast');

    // // subPage second gnb txt
    // const title = document.querySelector('.sub_gnb>.page_tit').textContent;
    // const cast = document.getElementById('dep_cast');

    // sub_cast.innerHTML = sub_title;
    // cast.innerHTML = title;

    /*---------// subPage breadcrumb---- */



    // WorksNav
    let WorksNav = WorksNav || {};
    WorksNav = (function(doc, global) {
        // ELEMENTS INITIALIZE
        let obj = {},
            body = doc.querySelector('body'),
            container = doc.querySelector('#container'),
            gnbD1 = doc.querySelector('.gnb_menu'),
            lnbD1 = doc.querySelector('.lnb_d1_wrap');

        function drawLnbNav(){ //handlebars draw
            //reference
            let hndBrWrap=$(".lnb_d1_wrap");
            let hndBrSource=$("#drawLnbNavTmp").html();
            let hndBrCompileTemp=Handlebars.compile(hndBrSource);
            hndBrWrap.empty().html(hndBrCompileTemp(lnbInfoData));
        }

        // PRIVATE FUNCTIONS
        function initialize(){
            container.classList.add('has_wnd_nav');
            gnbD1.classList.add('has_wnd_nav');
            drawLnbNav(); //from lnb_data_works.js
        }

        obj.checkCurrentLnbNav = function(gnb,lnb1,lnb2) {
            setTimeout(function(){
                Array.prototype.slice.call(gnbD1.querySelectorAll('li')).forEach(function(_el,_idx){
                    let tempTxt1 = _el.querySelector('a').getAttribute('data-menu-id');
                    if(tempTxt1 === gnb){
                        _el.classList.add('on');
                    }
                });
                Array.prototype.slice.call(lnbD1.querySelectorAll('.d1_li')).forEach(function(_el1,_idx1){
                    let tempTxt1 = _el1.querySelector('a').getAttribute('data-menu-id');
                    if(tempTxt1 === lnb1){
                        _el1.classList.add('on');
                    }
                    let lnbD2 = _el1.querySelector('.lnb_d2_wrap');
                    if(lnbD2) {
                        lnbD2.querySelectorAll('.d2_li').forEach(function(_el2,_idx2) {
                            let tempTxt2 = _el2.querySelector('a').getAttribute('data-menu-id');
                            if(tempTxt2 === lnb2 && _el1.classList.contains('on')){
                                _el2.classList.add('on');
                            }
                        });
                    }
                });
            },100);
        }

        return obj;
    })(document, window);


})()



/* ready e --------------------------------------------------
/*----------------------------------------------------------- */