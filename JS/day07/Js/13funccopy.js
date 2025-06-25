//1.
add()
add()
add()
//2.
let result = sub(); 
console.log('뺄샘', result);
console.log('뺄샘', sub());
//3.
multi(23,56);
multi(111,23);
//4.
result = divi(77,13);
console.log('나누기 = ',result);
console.log('나누기 = ',divi(77,13));
console.log('나누니+소수점정리 = ',result.toFixed(3));


//함수 정의 - Function키워드를 사용했을 때 함수 호이스팅(끌어올리기) 가능.
function multi(num1,num2){
    console.log('num1*num2 =',num1*num2);
};
function add(){
    console.log(100+1000);
}
function sub(){
    return 1000-100;
}
function divi(num1,num2){
    return num1/num2;
}
