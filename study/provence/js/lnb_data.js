"use strict";

/* LnbNav Methods */
var data = {
    lnb_d1: [
        {
        num: "lnb1_21", txt: "프로방스", url: "", state: "",
        lnb_d2:[
            {num: "lnb2_01", txt: "프로방스 소개", url: "", state: ""},
            {num: "lnb2_02", txt: "단지안내도", url: "", state: ""},
            {num: "lnb2_03", txt: "오시는길", url: "", state: ""}
        ]
        },{
        num: "lnb1_20", txt: "마을동", url: "", state: "",
        lnb_d2:[
            {num: "lnb2_01", txt: "식당&카페", url: "", state: ""},
            {num: "lnb2_02", txt: "패션", url: "", state: ""},
            {num: "lnb2_03", txt: "홈리빙", url: "", state: ""},
            {num: "lnb2_04", txt: "체험", url: "", state: ""}
        ]
        }
    ]
};

//1. htmlTemplate을 가져온후 Handlebars로 compile 한다.
var commentTemplate = document.querySelector("#commentTemplate").innerHTML;
var commentBindTemplate = Handlebars.compile(commentTemplate);

//2. 컴파일한 템플릿에 데이터를 집어넣는다. 이 때 리턴값은 html로 나온다.
var resultHtml = '';
resultHtml += commentBindTemplate(data);

// 3. 리턴받은 html을 target에 innerHTML로 세팅한다.
var commentUl = document.querySelector("#commentUl");
commentUl.innerHTML = resultHtml;


/* // WorksNav
let WorksNav = WorksNav || {};
WorksNav = (function(doc, global) {
	// ELEMENTS INITIALIZE
	let obj = {},
		body = doc.querySelector('body'),
		container = doc.querySelector('#container'),
		gnbD1 = doc.querySelector('.nav-menu'),
		lnbD1 = doc.querySelector('.lnb_d1_wrap');

	function drawLnbNav(){ //handlebars draw
		//reference
		let hndBrWrap=$(".lnb_d1_wrap");
		let hndBrSource=$("#commentTemplate").html();
		let hndBrCompileTemp=Handlebars.compile(hndBrSource);
		hndBrWrap.empty().html(hndBrCompileTemp(lnbInfoData));
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
})(document, window); */