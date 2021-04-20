function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 에러 발생용도로 만든 함수
// 에러처리를 할 때는 async await에서 try catch 활용
async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

// 함수부에 async
// promise에 await
// 함수 자체 결과물로 promise를 반환
async function process() {
    console.log('안녕하세요');
    await sleep(1000);
    console.log('반갑습니다!');
    return true;
}

process().then(value => {
    console.log(value);
});