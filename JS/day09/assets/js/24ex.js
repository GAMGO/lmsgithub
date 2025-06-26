//배열 메소드 연습2번
//1. splice - 기존 배열에 새로운 요소를 추가+삭제
let fruits = [
    'banana',
    'mango',
    'orange',
    'apple'
]
fruits.splice(2, 0, 'lemon')
/*
 '2' : 새로운 데이터 들어갈 위치
 '0' : 삭제할 데이터 개수
 그 뒤의 값들 : 추가될 데이터
 banana,mango,lemon,orange,apple
 */

console.log(fruits.toString());
fruits = [
    'banana',
    'mango',
    'orange',
    'apple'
]
fruits.splice(1, 1) //리턴이 없거나 사용안하는 메소드

console.log(fruits.toString());
/*
1 : 추가될 위치 인덱스
1 : 삭제할 데이터 개수
추가할 데이터 값 없음.
banana,orange,apple
*/

//2. slice() : 배열의 특정부분을 자르기하여 새로운 배열을 생성
fruits = [
    'banana',
    'mango',
    'orange',
    'apple'
]
var myfruits = fruits.slice(1, 3) //메소드 결과 리턴이 있다. 리턴이 중요.
console.log(fruits.toString());
console.log(myfruits.toString());
//slice() 입력값이 한 개인 경우
myfruits = fruits.slice(1);
console.log('마지막 인덱스 없이 슬라이스 한 경우 : ',myfruits); // mango,orange,apple
//slice() 입력값이 음수(-)인 경우 - 맨 뒤 -1부터 접근
myfruits = fruits.slice(-3,-1);
console.log('음수로 한 경우 : ',myfruits); // mango,organge
myfruits = fruits.slice(-1);
console.log('마지막 인덱스 없이 슬라이스 한 경우 : ',myfruits); // apple
/*
1: 시작위치 인덱스
3: 마지막 위치 인덱스 (포함X)
자르기한 배열의 개수 = 3-1 =2개
*/


fruits = [ //아래 인덱스를 위한 배열선언
    'banana',
    'mango',
    'orange',
    'apple',
    'Strawberry',
    'watermelon',
    'chamoe',
    'mango'
]
//3. indexOf()
let position = fruits.indexOf("mango");
console.log("망고의 첫번째 위치 " + position);
position = fruits.indexOf("lemon"); // 없는 값 = -1
console.log("레몬의 첫번째 위치 " + position);
//4. lastIndexOf()
let lastPos = fruits.lastIndexOf("mango");
console.log("망고의 마지막 위치 " + lastPos);
//5. includes()
let includeF = fruits.includes("chamoe");
console.log("참외가 배열에 있는가? " + includeF );
includeF = fruits.includes("banana");
console.log("바나나도 있는가? " + includeF );
includeF  = fruits.includes("Strawberry");
console.log("딸기도 같이 있는가? " + includeF );
includeF  = fruits.includes("blueberry");
console.log("블루베리는 있는가? " + includeF );
//6. find() - 인자가 콜백함수 : 참 또느 거짓을 리턴함.
// forEach 처럼 베열 요소를 하나씩 가져와 함수에 전달한다.
const numbers = [1, 4, 9, 16, 25, 29, 39, 45, 52, 66, 77, 80, 99];
console.log('현재 배열에 등록된 숫자 : ',numbers)
let first = numbers.find(myFunction); //함수에 대입한 조건식이 참인 첫번째 값.
function myFunction(value, index, array) { //값, 인덱스, 원본배열
  return value > 18;
}
console.log('18보다 큰 첫번째 값은 : ',first)//25
//7. findIndex()
let index1st = numbers.findIndex(myFunction);
console.log('18보다 큰 첫번째 인덱스는 : ',index1st)//3
//8. findLast()
let lastone = numbers.findLast(myFunction);
console.log('18보다 큰 마지막 값은 : ',lastone)//3
//9. findLastIndex()
let indexFinal = numbers.findLastIndex(myFunction);
console.log('18보다 큰 가장 마지막 인덱스는 : ',indexFinal)//3

//화살표 함수로 변형하기
first = numbers.find(value=> value> 25 && value <30)
console.log('25보다 크고 30보다는 작은 첫번째 값 - ',first,'이다.')