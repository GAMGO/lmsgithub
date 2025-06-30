const enterDate = document.getElementById('enterDate');
const outDate = document.getElementById('outDate');
const nights = document.getElementById('nights');

enterDate.value = dateInputFmt(new Date()); // 입실날짜 기본값은 오늘
enterDate.min = dateInputFmt(new Date());
nights.addEventListener('change', () => {
    /*
    선택한 숙박일수를 더해서 퇴실 날짜 설정
    1. 퇴실날짜의 초기 값은 입실 날짜로 설정
    2. 1번 날짜 + 숙박일수
    3. 2번 날짜를 input 요소에 출력
    */
    let outResult = new Date(enterDate.value);
    let days = Number(nights.value);
    outResult.setDate(outResult.getDate()+days);
    outDate.value = dateInputFmt(outResult);
});
function dateInputFmt(vdate) {
    const year = vdate.getFullYear();
    const month = (vdate.getMonth() + 1).toString().padStart(2, '0');
    const datee = vdate.getDate().toString().padStart(2, '0');
    return [year, month, datee].join('-');
}