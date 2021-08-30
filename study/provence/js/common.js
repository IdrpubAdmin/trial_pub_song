/** ========================================================= */

// file   : common.js

/* ========================================================== */
/*----------------------------------------------------------- */

// 메뉴 호버시 서브메뉴 드롭다운

document.addEventListener('DOMContentLoaded',  () => {
    const toggleBtns = document.querySelectorAll('.nav-menu>li');
    console.log(toggleBtns)

    toggleBtns.forEach(function(navItem,idx,list){
        console.log(navItem)

        let navItem1d = navItem.querySelector('.nav-menu>li>a');
        let navItem2d = navItem.querySelector('.sub-menu');
        let navItem3d = navItem.querySelector('.sub-menu>li>a');

       // console.log(navItem2d)

        // 1depth에 마우스 오버시 메뉴 노출
        navItem.addEventListener('mouseover', function () {
            navItem2d.classList.add('active');
            navItem1d.classList.add('on');
            
        })
        navItem.addEventListener('mouseout', function () {
            navItem2d.classList.remove('active');
            navItem1d.classList.remove('on');
        })

        // 2depth에 마우스 오버시 폰트컬러 변경
        navItem2d.addEventListener('mouseover', function () {
            navItem3d.classList.add('active_02');
        })
        navItem2d.addEventListener('mouseout', function () {
            navItem3d.classList.remove('active_02');
        })
    });

})


/*----------------------------------------------------------- */
/* ready s -------------------------------------------------- */

/* ready e -------------------------------------------------- */
/*----------------------------------------------------------- */