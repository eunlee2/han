
     var week5 = document.getElementById("week5");
     var week1_child = week1.childNodes;
     var week2_child = week2.childNodes;
     var week3_child = week3.childNodes;
      
     //사용 예시
     week1_child[start].innerText = dates;
     var date = new Date();
    var today = document.getElementById("today"); //html 파일에 있는 id를 선언
    today.innerText = date.getFullYear() + '년 ' + (date.getMonth()+1) + '월 ' + date.getDate() + '일';
 
    //현재의 월 구하기, 특정 날짜의 요일 구별하기(함수)
function DayLabel(todays_date) {
    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var today = new Date(todays_date).getDay();
    var todayLabel = week[today];
 
    return todayLabel;
}   

 
