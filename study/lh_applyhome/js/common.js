

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

    function initAccordion(accordionElem) {
        function handlePanelClick(event) {
            showPanel(event.currentTarget);
        }

        function showPanel(panelHeader) {
            let isActive,
                panel = panelHeader.parentNode,
                panelBody = panelHeader.nextElementSibling,
                expandedPanel = document.querySelector('.panel.on');

            isActive = (expandedPanel && panel.classList.contains('on')) ? true : false;

            if(expandedPanel) {
                expandedPanel.querySelector('.dep-content').style.height = null;
                expandedPanel.classList.remove('on');
            }
            if(panel && !isActive) {
                panelBody.style.height = panelBody.Height + 'px';
                panel.classList.add('on');
            }
        }
        let allPanelElements = document.querySelectorAll('.panel');

        for(let i = 0; i < allPanelElements.length; i++) {
            allPanelElements[i].querySelector('.dep-inner').addEventListener('click', handlePanelClick);
        }
        showPanel(allPanelElements);
    }

    initAccordion(document.getElementsByClassName('accordion'));








})();


