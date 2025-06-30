/* 카카오 이미지 검색 Open API */
const REST_API_KEY = 'e219e42c30d4245eb3b2ce072f6cb332';
const header = {
    method: 'GET',
    headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`
    }
};
const query = '트와이스';
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`;
//비동기 함수의 처리를 기다려야 하는 경우를 테스트. result,result2 변수가 fetch 실행 결과를 받기 위한 예시.
let result;
async function loadData() {
    await fetch(url, header) //Promise()기반 await 포함한 경우 async 키워드 표시필수
        .then(response => {
            console.log('responce 수신완료', response.status)
            return response.json();
        })
        .then(data => {
            result = data;
        }).catch(error => console.error('fetch 실패', error))
} 
//fetch가 비동기 함수이므호 awat로 실행완료까지 대기.
//await,then을 같이 쓰는 건 비추천.
loadData().then(()=>{
console.log('result : ',result)
console.log('result : ',result.documents[0].image_url)})

let result2
async function loadData2() {
    try {
        const response = await fetch(url,header);
        const data = await response.json();
        console.log(data);
        result2 = data
    } catch (error) {
        console.error('오류:', error);
    }
}
loadData2().then(()=>{;

console.log('result2 : ',result2)
console.log('result2 : ',result2.documents[0].image_url)})


