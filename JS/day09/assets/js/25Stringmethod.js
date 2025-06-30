console.log("노드JS 테스트");
//문자열은 문자의 모임을 뜻한다.
var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log('text 문자열의 길이:', text.length);
text = "ABCDEFG HIJKLMN OPQRSTU VWXYZ";
console.log('text 문자열의 길이:', text.length);
let result = text.at(5); //F
console.log('text.at(5)는', result);
console.log('text[5]는', text[5]);
text[5] = '★';
//문자열 안에 문자 값을 변경하거나 설정히는 것은 불가능. -> 문자열은 불변값이기 떄문.
console.log(text);
line();
// slice() 메소드 - 특정 부분을 자르기하여 새로운 문자열 리턴
text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log('let part = text.slice(7,13) = ', part);
part = text.slice(-12); // 마지막 값 생략(끝까지)
console.log('text.slice(-12) = ', part);
part = text.slice(-12, -6);
console.log('text.slice(-12,-6) = ', part);
//subString() : slice()와 동일하나 음수값은 사용 할 수 없다.
// toLowerCase()- 소문자 변환, toUpperCase() - 대문자 변환
console.log('소문자 : ', text.toLowerCase());
console.log('대문자 : ', text.toUpperCase());
line();
//concat() : 문자열 합치기 
var text01 = "Hello";
console.log('1번 문자열 : ', text01)
var text02 = "World";
console.log('2번 문자열 : ', text02)
var text03 = text01.concat("😍", text02);
console.log('합친 문자열 - ', text03)
line();
//trim
text01 = "        Hello world         \n";
console.log("trim():",text01.trim(),"길이 :",text01.trim().length);
console.log("trimStart():\n",text01.trimStart(),"길이 :",text01.trimStart().length);
console.log("trimEnd():\n",text01.trimEnd(),"길이 :",text01.trimEnd().length);
//padded
text = "5";
let padded = text.padEnd(4,"0");
console.log("padEnd(4,'0') = ",padded);
padded = text.padStart(4,"0");
console.log("padStart(4,'0') = ",padded);
line();
let num = 5 // Number type은 toString()으로 문자열 변환 필수.
padded = num.toString().padStart(4,"0");
console.log("with num + padStart(4,'0') = ",padded);
//stringSearch
line();
//indexOf(), lastIndexOf() - 2번쨰 입력값(인자)
text = "Please locate where locate occurs!";
let index = text.indexOf('locate',15);
console.log('text.indexOf("locate",15) = ',index);
index = text.lastIndexOf('locate',26);
console.log('text.lastIndexOf("locate",26) = ',index);
line();
//includes()
text = "Hello world, welcome to the universe.";
console.log(text,'해당 문자열[문장]에')
var includer = text.includes("world");
console.log('"World"가 포함되어 있는가? =>',includer);

function line(){
    console.log('---------------------------------------------------------');
}line();