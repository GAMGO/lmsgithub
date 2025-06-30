const REST_API_KEY = "e219e42c30d4245eb3b2ce072f6cb332";
const header = {
  method: "GET",
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`,
  },
};
// const searching = document.getElementById('enter');
const query = "트와이스";
const url = `https://dapi.kakao.com/v2/search/vclip?query=${query}`;
// var query;
/*searching.addEventListener('click', () => {
    query = document.getElementById('keywords').value;
})*/
fetch(url, header)
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    showVideo(data.documents, 0, 15);
  })
  .catch((error) => console.error("fetch 실패".error));
function showVideo(docs, pos, count) {
  const ul = document.getElementById("videoContent");
  for (let i = pos; i < pos + count; i++) {
    let videoTypes
      if (docs[i].play_time >= 100) {
        videoTypes = "Videos"
      } else {
        videoTypes = "Shorts";
      }
    const li = document.createElement("li");
    li.innerHTML = `<a href="${docs[i].url}"><img src="${
      docs[i].thumbnail
    }"></a><br/><p>${docs[i].datetime}</p><p>${videoTypes}</p>`;
    ul.appendChild(li);
  }
}
