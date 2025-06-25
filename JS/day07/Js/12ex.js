const members = ['민아', '모모', '나연', '다현', '지효'];
members.push('사나')
for (let m of members) {
    const list = document.createElement('li');//요소 Li 만듦
    const parentUl = document.getElementById('twice2');
    list.textContent = m;
    list.classList.add('blue');
    console.log(list);
    parentUl.appendChild(list);
}//for안에서 선언된 list는 {}안에서만 사용됨. 