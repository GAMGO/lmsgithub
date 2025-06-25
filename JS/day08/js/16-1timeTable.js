"use strict"
// 오늘 시간표
const time = ['09:00', '11:00', '12:30', '14:00', '16:45'];
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사'];
// 내일 시간표
const time2 = ['08:00', '10:00', '11:20', '14:00', '15:00', '17:20'];
const todo2 = ['수업', '회의', '점심', '오후운동', '업무', '친구만나기'];
//버튼 불러오기
const today = document.getElementById('today');
const tom = document.getElementById('tomorrow');
//각 표의 아이디 불러오기
const timeTr = document.getElementById('times');
const todoTr = document.getElementById('toDo');
function timelines(timeArr, todoArr, titles) {
    timeTr.innerHTML = '<th class="titleTr tablesets">TIME</th>';
    todoTr.innerHTML = '<th class="titleTr tablesets">TODO</th>';
    for (let t of timeArr) {
        const td = document.createElement('td');
        td.textContent = t;
        td.classList.add('eleFont');
        td.classList.add('tablesets');
        timeTr.appendChild(td);
    }
    for (let t of todoArr) {
        const td = document.createElement('td');
        td.textContent = t;
        td.classList.add('eleFont');
        td.classList.add('tablesets');
        todoTr.appendChild(td);
    }
};
//내일 시간표 불러오면 해당 표 안에 데이터를 순서대로 넣게끔 반복주기
tom.addEventListener('click', function () {
    timelines(time2,todo2,'내일');
});
today.addEventListener('click', function () {
    timelines(time,todo,'오늘');
});

//현재 시간표 넣어놓고 띄우기
const timeTB = document.querySelectorAll('tr#times td');// tr 태그 중 id가 times인데 클래스가 td인것을 모두 고른다
const todoTB = document.querySelectorAll('tr#toDo td');// tr 태그 중 id가 toDo인데 클래스가 td인것을 모두 고른다

for (let i = 0; i < time.length; i++) {
    timeTB[i].textContent = time[i];
    todoTB[i].textContent = todo[i];
    timeTB[i].classList.add('eleFont');
    timeTB[i].classList.add('tablesets');
    todoTB[i].classList.add('eleFont');
    todoTB[i].classList.add('tablesets');
}
