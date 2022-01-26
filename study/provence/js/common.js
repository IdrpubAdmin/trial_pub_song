/** ========================================================= */

// file   : common.js

/* ========================================================== */
/*----------------------------------------------------------- */

(function() {
/*     'use strict'; */

    /*------- menu hover dropdown -------*/
    document.addEventListener('DOMContentLoaded',  () => {
        const toggleBtns = document.querySelectorAll('.nav-menu>li');

        toggleBtns.forEach(function(navItem,idx,list){

            let navItem1d = navItem.querySelector('.nav-menu>li>a');
            let navItem2d = navItem.querySelector('.sub-menu');

            // 1depth mouse hover show
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
    /*-------// menu hover dropdown -------*/

    /*------ tower tab ------*/
    const tabMenu = document.querySelectorAll('.content .tower_tab > li > a'),
    tabContent = document.querySelectorAll('.content .tab_off');

    for(i=0; i<tabMenu.length; i++){
        tabMenu[i].addEventListener('click',function(e){
            e.preventDefault();
            for(x=0; x<tabMenu.length; x++){
                tabMenu[x].classList.remove('on');
            }
            this.classList.add('on');
            const target = this.getAttribute('href');

            for(y=0; y<tabContent.length; y++){
                tabContent[y].style.display = 'none';
            }
            document.querySelector(target).style.display='flex';
        });
    }
    /* -----// tower tab -----*/
})()





/* ready e --------------------------------------------------
/*----------------------------------------------------------- */