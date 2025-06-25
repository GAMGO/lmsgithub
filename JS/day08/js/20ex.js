/*
위의 2개의 배열을 객체 배열로 1개로 변경.
*/

const schedule=[
{
    time:'09:00',
    todo:'수업'
},
{
    time:'10:20',
    todo:'회의'
},
{
    time:'11:30',
    todo:'점심식사'
},
{
    time:'14:00',
    todo:'자료조사'
},
{
    time:'15:50',
    todo:'운동'
},
{
    time:'16:50',
    todo:'과제'
},
{
    time:'18:00',
    todo:'저녁식사'
}
]
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
document.addEventListener('DOMContentLoaded',()=>{
const root = document.getElementById('root');
const table = document.createElement('table');
table.innerHTML = `
 <tr>
 <th class="titleTr tablesets">TIME</th>
 <th class="titleTr tablesets">TODO</th>
 </tr>
 `
root.appendChild(table)
schedule.forEach(item => {
    const trResult = printRow(item)
    // console.log(trResualt);
    table.appendChild(trResult)
    printRow(item)
});
})
