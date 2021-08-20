
window.onload = function(){ 

document.getElementById("title").innerHTML ="hello,javascript";
    
    var btn = document.getElementById("btnSubmit")
    btn.onclick = function(){
        var id = document.myform.userid.value;
        if (!id){
            alert("아이디를 입력하세요");
            return;
        } else {
            alert("입력한 값은 " + id +" 입니다.");
            }
        }

};