const members = [
    {
        name: '김사나',
        age: 22,
        local: "Gyeonggi-do",
        height: 160.9
    },
    {
        name: '박모모',
        age: 24,
        local: "Seoul",
        height: 165
    },
    {
        name: '이다현',
        age: 27,
        local: "Jeju",
        height: 163.7
    }

]
//1) members 배열에 저장된 객체의 name속성값 출력.
console.log(members[0].name);
console.log(members[1].name);
console.log(members[2].name);
for (let nameless of members) {
    console.log("맴버 : "+nameless.name);
}

//2) 객체의 address 속성값이 '서울'인 name속성값 출력
for(let whatlocal of members){
    if(whatlocal.local=='Seoul'){
        console.log("IF문으로 서울지역 맴버 이름:"+whatlocal.name);
    }
}
console.log("지역이 서울인 맴버는 : " + members[1].name);
//3)객체 배열에서 age가 25이상인 name 속성값 출력
for(let whatage of members){
    if(whatage.age >= 25 ){
        console.log("나이 25세 이상 맴버 이름:"+whatage.name);
    }
}
//4) 모든 배열 요소의 모든 속상값 출력
for(let m of members){
    console.log('~~~~~~~~~~~~')
    for(let key in m){
        console.log(m[key]);
    }
}
console.log('----------------------------------------------');
/*)5 배열의 forEach 메소드 - 배열의 요소를 '하나씩 가져다가' 특정한 함수를 실행.
메소드의 인자(입력)는 함수
*/
members.forEach(
 function(items){ // '하나씩 가져온'요소를 item 변수에 저장.
    console.log('............////////////..............');
    console.log(items.local);
 }
)
//위의 코드를 화살표 함수로 변경 가능함.
members.forEach(
 (items)=>{
    console.log('..........................');
    console.log(items.local);
 }
)
//메소드의 입력(인자)인 함수를 먼저 정의하고 함수이름 사용
function print(items){
    console.log('/8/8/8/8/');
    console.log(items.local);
 }members.forEach(item=>print(item))//많이 쓰이는 형식