/*
함수 기본 형식
데이터 입력(인자,인수) --> 함수(실행) --> 실행 결과 출력(Return값)

ex)
let ele = members.pop(); --> 입력값 없고, 출력은 ele변수에 저장.
let size = members.push('산하'); --> 입력값 '산하', 출력은 size변수에 저장.
*/

//함수 유형 1. 인자 없음, 리턴 없음.
function add(){
    console.log(100+1000);
}
add()
add()
add()
//함수 유형 2. 인자 없음, 리턴 있음.
function sub(){
    return 1000-100; //함수 실행 결과를 전달.
}let result = sub(); //함수 호출시 결과값 전달받기
console.log('뺄샘', result);
console.log('뺄샘', sub());
//함수 유형 3. 인자 있음, 리턴 없음.
function multi(num1,num2){ // 함수 실행시 사용자가 정한 입력값을 저장하는 변수
    console.log('num1*num2 =',num1*num2);
};
multi(23,56);//함수 실행에 필요한 입력값
multi(111,23);
//함수 유형 4. 인자 있음, 리턴 있음.
function divi(num1,num2){
    return num1/num2;
}result = divi(77,13);
console.log('나누기 = ',result);
console.log('나누기 = ',divi(77,13));
console.log('나누니+소수점정리 = ',result.toFixed(3));