/* 카카오 이미지 검색 Open API */
const REST_API_KEY = 'e219e42c30d4245eb3b2ce072f6cb332';
const header = {
    method: 'GET',
    headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`
    }
};
const searching = document.getElementById('keyWords');
const entry = document.getElementById('enter');
const query = '트와이스';

entry.addEventListener('click',()=>{
    
})
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`;
//요청을 보내는 JS 명령어 (체이닝 변수)

// let result
fetch(url, header) //요청 url 주소로 보내기
    .then(response => {  //요처에 대한 응답 수신 ---> 콜백함수 인자 response에 저장
        console.log(response);
        return response.json(); // 응답의 body(데이터 본문)를 JD객체로 변환
    })
    .then(data => {
        result = data;
        console.log('data : ', data) // 위의 then에서 리턴한 값을 콜백함수 인자 'data'에저장
        console.log('데이터 분해 1 :', data.documents[0]);
        console.log('데이터 분해 1 :', data.documents[0].doc_url);
        console.log('데이터 분해 1 :', data.documents[0].image_url);
        console.log('데이터 분해 1 :', data.documents[0].thumbnail_url);
        printImage(data.documents,10,10); //data값 배열에서 10개의 image를 출력하기
    })
    .catch(error => {    //요청 에러 처리 ---> 에러 정보 콜백함수 인자 error에 저장
        console.error('fetch error : ' + error);
    })
/*
fetch 요청이 응답을 받고 끝날 때까지 기다리지 않고 다음의 console 명령이 실행 됨.(비동기 처리 명령어)
*/
console.log(result);
function printImage(docs, pos, count){
    const ul = document.getElementById('kakaoImg')
    for(let i=pos;i<pos+count;i++){
        console.log(docs[i].image_url);
        const li = document.createElement('li');
        li.innerHTML=`<img src="${docs[i].image_url}" width ="400px" height="400px">`;
        ul.appendChild(li);
        
    }
}