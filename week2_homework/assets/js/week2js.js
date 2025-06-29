const REST_API_KEY = "e219e42c30d4245eb3b2ce072f6cb332";
const header = {
    method: 'GET',
    headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`
    }
}
// const searching = document.getElementById('enter');
const query = '트와이스';
const url = `https://dapi.kakao.com/v2/search/vclip?query=${query}&sort=recency`;
// var query;
var result;
/*searching.addEventListener('click', () => {
    query = document.getElementById('keywords').value;

})*/
fetch(url, header)
    .then(response => {
        return response.json();
    })
    .then(data => {
        result = data;
        showVideo(data.documents, 10, 10);

    })
    .catch(error => console.error('fetch 실패'.error))
function showVideo(docs, pos, count) {
    const ul = document.getElementById('vedioContent')
    for (var i = pos; i < pos + count; i++) {
        const li = document.getElementById('li');
        li.innerHTML = `<video src="${docs[i].thumbnail}" width="400px" height="400px">`;
        ul.appendChild(li);
    }
}


