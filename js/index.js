var itemList = []; // == var itemList = new Array("");

var addBtn = document.getElementById("add"); //btn(#add)에 대한 변수로 지정
addBtn.addEventListener("click",addList); // == onclick 기능


function addList(){
    var item = document.getElementById("item").value; //텍스트 필드 내용 가져옴

    if(item != null){ //item 값이 없지 않으면
        itemList.push(item); //item은 변수기 때문에 ''안에 넣지 않는다.
        document.getElementById("item").value = ""; //#item인 요소 값을 지움
        document.getElementById("item").focus(); //text 필드에 커서를 둠
    }
    showList();//showList() 함수 실행
}

function showList(){
    var list = "<ul>" //목록을 시작하는 태그 <ul> 저장
    for(var i=0; i<itemList.length; i++){ 
        list += "<li>" + itemList[i] + // 각 요소 <li>태그 안에 넣음
        "<span class='close' id=" + i + ">X</span></li>" //[x]버튼의 id값을 배열의 인덱스 값인 i로 지정
    }
    list += "</ul>"

    document.getElementById("itemList").innerHTML = list;


    var remove = document.querySelectorAll(".close"); //삭제버튼 변수로 저장
    for(var i=0; i<remove.length; i++){
        remove[i].addEventListener("click",removeList);
    }

    function removeList(){
        var id = this.getAttribute("id"); //
        //console.log(this) == id가 1인 <span>태그가 나타남
        itemList.splice(id,1);
        showList();
    }
}





