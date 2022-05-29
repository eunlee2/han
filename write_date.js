week2_child[write2].style.backgroundColor = 'gray'; //CSS 불러오기
function check_today(indexs, weeks, dates){
    if(dates > today_days){
        //인덱스가 오늘의 날짜보다 크다면(미래: 일정 추가 가능)
        weeks[indexs].style.backgroundColor = '#FFEFD5'; //CSS 불러오기
    } else if(dates == today_days){
         //인덱스가 오늘의 날짜와 같다면(현재: 일정 추가 가능)
         weeks[indexs].style.backgroundColor = '#DB7093'; //CSS 불러오기
    } else if(dates < today_days){
        //인덱스가 오늘의 날짜보다 작다면(지나온 날: 일정 추가 불가)
        weeks[indexs].style.backgroundColor = 'gray'; //CSS 불러오기
    }
}
check_today(start, week1_child, dates); //배경 색 채우는 함수
if(week2_child[write2].innerText == 4){ //이렇게 하면 테이블 안에 있는 값이 어떤 값인지 알 수 있음(int던지 String이던지 상관 없음)
    console.log("성공");
}
var td = document.querySelectorAll('td'); //모든 태그에 대해 알림창 설정
 
for(var i=0; i<td.length; i++){
    if(i>=(today_days+null_days-1)){ //여기에서만 실행되도록 정하기 today_days+null_days-1는 현재 날짜 전까지의 인덱스를 표현한 것
        //get_data(i); //해당 인덱스에만 알람 표시하기
        //console.log(get_data(i));
        td[i].ondblclick = function() {
            //test_data = $("#data").text();
           // console.log(get_data(i));
            alert('hum');
        };
    } 
}
function loadJQuery() {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";          
    oScript.src = "http://code.jquery.com/jquery-1.6.2.min.js";    
    document.getElementsByTagName("head")[0].appendChild(oScript);
}
//제이쿼리 사용시 위의 함수를 로드할 것
loadJQuery();
//알림창 설정에 대해 필요한 것들 html에서 가져오기
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
 
var td = document.querySelectorAll('td'); //모든 태그에 대해 알림창 설정
 
for(var i=0; i<td.length; i++){
    if(i>=(today_days+null_days-1)){ //여기에서만 실행되도록 정하기 today_days+null_days-1는 현재 날짜 전까지의 인덱스를 표현한 것
   
        td[i].ondblclick = function() {
            modal.style.display = "block";
        };
    } 
}
 
span.onclick = function(event){
    modal.style.display = "none";
 }
 
 window.onclick = function(event){
     if(event.target == modal){
         modal.style.display = "none";
     }
 }
