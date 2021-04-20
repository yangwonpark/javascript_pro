// promise 성공 시 resolve, 실패 시 reject

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result');
    }, 1000)
});

myPromise.then(result => {
    console.log(result);
})

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error());
    }, 1000)
});

myPromise2.then(result => {
    console.log(result);
}).catch(e => {
    console.log('reject');
})