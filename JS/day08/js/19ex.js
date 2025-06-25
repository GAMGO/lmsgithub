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
//메소드의 입력(인자)인 함수를 먼저 정의하고 함수이름 사용
function printRow(items) { //하나씩 가져온 요소를 TableRow요소를 만들기
    const tr = document.createElement('tr');
    for (let key in items) {
        const td = document.createElement('td');
        td.textContent = items[key];
        tr.appendChild(td);
        td.classList.add('tablesets')
    }
    return tr;
}
//DOMContentLoaded 이벤트 : DOM 자료구조를 만들어서 메모리에 저장한 후에 발생.
// 화면의 구성 요소들이 만들어진 후에 실행.
document.addEventListener('DOMContentLoaded',()=>{
const root = document.getElementById('root');
const table = document.createElement('table');
table.classList.add('centerset')
table.classList.add('titleTr')
table.innerHTML = `
 <tr>
 <th>이름</th>
 <th>나이</th>
 <th>거주지</th>
 <th>키</th>
 </tr>
 `
root.appendChild(table)
members.forEach(item => {
    const trResult = printRow(item)
    // console.log(trResualt);
    table.appendChild(trResult)
    printRow(item)
});
})

