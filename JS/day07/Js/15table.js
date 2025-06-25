"use strict"
const time = ['09:00', '11:00', '12:30', '14:00', '16:45'];
const todo = ['수업', '과제', '점심', '주간회의', '자료조사'];
const time2 = ['08:00', '10:00', '11:20', '14:00', '15:00', '17:20'];
const todo2 = ['수업', '회의', '점심', '오후운동', '업무', '친구만나기'];

for (let timeTables of time) {
    const tlist = document.createElement('th');
    const parentUl = document.getElementById('times');
    tlist.textContent = timeTables;
    tlist.classList.add('eleFont');
    tlist.classList.add('tablesets');
    console.log(tlist);
    parentUl.appendChild(tlist);
}
for (let todoTables of todo) {
    const tlist = document.createElement('th');
    const parentUl = document.getElementById('toDo');
    tlist.textContent = todoTables;
    tlist.classList.add('eleFont');
    tlist.classList.add('tablesets');
    console.log(tlist);
    parentUl.appendChild(tlist);
}
