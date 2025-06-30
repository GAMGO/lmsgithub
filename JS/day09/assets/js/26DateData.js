/*
 html없이 nodeJs로만 실행할 예정
new Date() => Date 클래스를 이용해서 새로운(new) 날짜 뎅터를 만듭니다.
기본값은 오늘 날짜.
표준시간 활용도는 ISO>UTC
*/
const today = new Date();
console.log(`현재 날짜와 시간 : ${today}`); //``,${} -> 문자열 템플릿.
//Lcoale : 현지 (국가와 언어)
line();
console.log(`현재 날짜와 시간 : ${today.toLocaleString()}`);
console.log(`현재 날짜와 시간 : ${today.toLocaleDateString()}`);
console.log(`현재 날짜와 시간 : ${today.toLocaleTimeString()}`);
//표준시()
console.log(`현재 낳짜와 시간(표준시) : ${today.toISOString()}`);
console.log(`현재 낳짜와 시간(표준시) : ${today.toUTCString()}`);
line();
console.log(today.toString())
/*
모든 객체에 기본 메소드 toString();
날짜는 기본적으로 정수값 형식 - 1970년 1월 1일 0시 기준으로 얼마나 지났는지를 ms 단위로 저장.
*/
line();
console.log(`정수값 new Date() : ${today.getTime()}`); //1750985921877
var todayLong = (2025 - 1970) * 365 * 24 * 60 * 60 * 1000;
console.log(`정수값 new Date() 대략값 : ${todayLong}`);
var timeGaps = today - todayLong;
console.log(`timeGaps :`, timeGaps, '\n + todayLong :', todayLong, '\n = today :', today.getTime());
//년도 추출
console.log(`today에서 년도 추출 : ${today.getFullYear()}`)
console.log(`today에서 년도 추출 : ${today.getMonth()}`)
console.log(`today에서 년도 추출 : ${today.getDate()}`)
console.log(`today에서 년도 추출 : ${today.getDay()}`)
line()
let date1 = new Date('2025-12-25');
console.log(date1);
date1 = new Date('2025/12/25');
console.log(date1);
date1 = new Date('2025.12.25');
console.log(date1);
//특정 날짜와 시간 지정
date1 = new Date(2025, 11, 25, 11, 35, 20); //년,월(0~11),일,시,분,초
console.log(`특정 날짜와 시간 지정 : ${date1}`);
let date2 = new Date('2025-06-27T18:30:00');
console.log(`date2의 날짜 : ${date2}`);
date2 = new Date('2025-06-27T18:30:00Z');
console.log(`date2의 표준 날짜시간 : ${date2}`);
line()
//'en-US','ja-JP','fr-FR','en-GB'
console.log(`참고 : locale 정보 : ${navigator.languages} (언어-국가)`)
line()
var date3 = new Date('2025-06-27T18:30:00');
console.log(`참고 프랑스: ${date3.toLocaleString('fr-FR')}`);
console.log(`참고 독일: ${date3.toLocaleString('de-DE')}`);
console.log(`참고 영국: ${date3.toLocaleString('en-GB')}`);
console.log(`참고 미국: ${date3.toLocaleString('en-US')}`);
console.log(`참고 일본: ${date3.toLocaleString('ja-JP')}`);
console.log(`참고 한국: ${date3.toLocaleString('kr-KR')}`);
line();
/*
지정된 로케일 정보로 출력 형식이 달라진다.
날짜를 이용한 계산
*/
date1 = new Date();
date2 = new Date('2025-12-25');
let diff = date2 - date1;
console.log(`${diff.toLocaleString()}ms`); //milisenconds 단위로 나옴 (15631875486). => 수동으로 변환해줘야함.ㅋㅋ
let oneday = 24 * 60 * 60 * 1000;
diff /= oneday; //diff = diff/oneday;
console.log(`날짜 뺄셈 : ${diff} 일`);
//소수점 : 반올림,내리므올림 -> math.round(),math.floor(),math.ceil()
console.log(`날짜 뺄셈 : ${Math.ceil(diff)} 일`);
/*
날짜 변경하기 : 년,월,일 단위로 더하기 또는 빼기
ex? 오늘로 부터 3년 후 무슨 요일인가? 알고 싶을때
*/
line()
let someday = new Date();
someday.setFullYear(someday.getFullYear()+3)
console.log(`3년 후 : ${someday.toLocaleString()}`);
calldate();
someday.setMonth(someday.getMonth()+3)
console.log(`3달 후 : ${someday.toLocaleString()}`);
calldate();
someday.setDate(someday.getDate()+181)
console.log(`181일 후 : ${someday.toLocaleString()}`);
line()
console.log('dateInputFmt(new Date()):',dateInputFmt(new Date()));
/*
inpt type ="date" 입력요소는 형식이 'yyyy-mm-dd'(자리수 중요)
값을 설정할 때에는 별도 코드 만들기
*/


//function Group
function dateInputFmt(vdate){
    const year = vdate.getFullYear();
    const month = (vdate.getMonth()+1).toString().padStart(2,'0');
    const datee = vdate.getDate().toString().padStart(2,'0');
    return[year,month,datee].join('-');
}
// return(year,month,datee).join('-');
function calldate(){
    someday = new Date();
}
function line() {
    console.log('---------------------------------------------------------');
} line();