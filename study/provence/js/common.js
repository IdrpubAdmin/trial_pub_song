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

    /*---- tower tab_1 -----*/
    const towerTab = document.querySelector('.floors > ul');

        function select(ulEl, liEl){
            Array.from(ulEl.children).forEach(
                v => v.classList.remove('active')
            )
            if(liEl) liEl.classList.add('active');
        }

        towerTab.addEventListener('click', e => {
            const selected = e.target;
            select(towerTab, selected);
        })

    /* ----//tower tab_1 -----*/

    /*------ tower tab_2 ------*/
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
    /* -----// tower tab_2 -----*/

    /*----- qna page accordion -----*/
    const acc = document.querySelectorAll('.lnb_active');

	for (var i = 0; i < acc.length; i++) {

        acc[i].onclick = function() {
            // 클릭이 일어났을 때 기존에 열려 있던 아코디언을 접는다. (1개의 아코디언만 열리게)
            for (var j = 0 ; j<acc.length; j++){
            // 버튼 다음에 있는 div 콘텐츠 높이를 0으로 만든다. == 아코디언을 접는다.
                if (this!==acc[j]) {
                    acc[j].nextElementSibling.style.maxHeight = null;
                }
            }
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
	}

    /*-----// qna page accordion -----*/

})()





/* ready e --------------------------------------------------
/*----------------------------------------------------------- */