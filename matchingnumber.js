window.onload = function (){
    var arr = [];
    var userArr = [];
    var counter = 0;
    var userNum = document.getElementById("user-num");
    var btnCheck = document.getElementById("btn-check");

    btnCheck.onclick = () => {
        for (var i = 0; i < 6; i++) {
            userArr[i]= userNum.value % 10;
            console.log("user Arr[i]", userArr[i]);
            userNum.value /= 10;
            arr[i] = Math.floor(10 * Math.random()); //Math.floor 정수 변환, Math.random() 1미만의 실수 랜덤 값
            for (var j=0; j < 6; j++) {
                if (arr[i] == userArr[j]) counter += 1;
            }
        }
        alert(counter + "개 맞추셨습니다.");
        userNum.value=null;
    }
};