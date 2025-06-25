let result // 전역변수
result = calc(789, 125, '+');
console.log(result);
console.log(result);

const btn1 = document.getElementById('exeBtn');
btn1.addEventListener('click', function () {
        let n1 = document.getElementById('num1').value;
        let n2 = document.getElementById('num2').value;
        let calop = document.getElementById('op').value;
        let result = calc(Number(n1), Number(n2), calop); //실매개변수(인자) || -,+는 연산을 위해 자동으로 타입이 number로 변경
        document.querySelector('span#result').textContent = result;
        //function calc에 선언된 변수와 메모리 공간 다름.
        //이벤트 리스너 작동 안됨.
    })
function calc(num1, num2, op) {//형식매개변수(인자)
    let result = 0; //결과값 변수 -> {}선언 된 변수는 지역변수
    switch (op) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        case '%':
            result = num1 % num2
            break;
        default:
            console.error('※Invaild element for "op"!※')
            break;
    }return result
}