/*
위의 2개의 배열을 객체 배열로 1개로 변경.
*/
const schedule = [
    {
        time: '09:00',
        todo: '수업'
    },
    {
        time: '10:20',
        todo: '회의'
    },
    {
        time: '11:30',
        todo: '점심식사'
    },
    {
        time: '14:00',
        todo: '자료조사'
    },
    {
        time: '15:50',
        todo: '운동'
    },
    {
        time: '16:50',
        todo: '과제'
    },
    {
        time: '18:00',
        todo: '저녁식사'
    }
]
//비어있는 베열에 새로운 요소를 추가 : push()메소드 활용
function printRow(items) { //하나씩 가져온 요소를 TableRow요소를 만들기
    const tr = document.createElement('tr');
    for (let key in items) {
        const td = document.createElement('td');
        td.textContent = items[key];
        tr.appendChild(td);
        td.classList.add('tablesets')
        td.classList.add('centerset')

    }
    return tr;
}
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const table = document.createElement('table');
    function initHtml() {
        table.innerHTML = `
        <tr>
        <th class="titleTr tablesets">TIME</th>
        <th class="titleTr tablesets">TODO</th>
        </tr>
        `
          schedule.forEach(items => {
            const trResult = printRow(items)
            // console.log(trResualt);
            table.appendChild(trResult);
            printRow(items);
        });
    }
    initHtml();
    root.appendChild(table)

    //'DomContentLoaded'이벤트 사용할 때에는 모든 이벤트 리스너를
    //'DomContentLoaded'이벤트 안에 작성합니다.
    const objadd = document.getElementById('newBtn');
    objadd.addEventListener('click', () => {
        const addTime = document.getElementById('newTime').value;
        const addTodo = document.getElementById('newTodo').value;
        const newItem = { time: addTime, todo: addTodo };
        // const newTr = printRow(newItem);
        schedule.push(newItem);
        //스케쥴 배여릉ㄹ time 속성 순서로 정렬
        schedule.sort((a, b) => a.time.localeCompare(b.time));
        //정렬된 schedule 배열로 table 다시만들기 -> 숙제로 해보기
        initHtml();
        console.log(schedule)
        //a,b눈 2개의 객체. 2개의 객체 time속성비교.
    })
})