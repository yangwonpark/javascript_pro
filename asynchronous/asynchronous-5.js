function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(500)
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3000)
    return '거북이';
}

// 아래처럼 구현하면 프로미스마다 따로 따로 실행됌
// async function process() {
//     const dog = await getDog();
//     console.log(dog);
//     const rabbit = await getRabbit();
//     console.log(rabbit);
//     const turtle = await getTurtle();
//     console.log(turtle);
// }

// Promise.all
// promise들을 배열로 묶어준 후 실행시킨다
// getTurtle의 소요시간이 3초이므로 3초 후 콘솔이 찍힘
// 프로미스 전체 중 하나라도 에러가 발생하면 에러 발생
async function process() {
    // 비구조 할당
    try {
        const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
        console.log(dog);
        console.log(rabbit);
        console.log(turtle);
    } catch(e) {
        console.log(e);
    }
}

// Promise race
// 가장 빨리 끝난 promise 하나만 결과물로 나옴
// 가장 빨리 끝난 promise가 에러일 때만 에러 발생
async function process2() {
    // 비구조 할당
    try {
        const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    
        console.log(first);
    } catch(e) {
        console.log(e);
    }
}


process();
process2();
