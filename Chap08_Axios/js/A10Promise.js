
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while (Date.now() < wakeUp) { }
};

function normalFunc() {
    console.log('start');

    sleep(2000);            // 시간이 걸리는 작업...

    console.log('end');
}
// normalFunc();

/*
let result = 0;
function one(ms) {
    console.log('1. Start');

    setTimeout(() => {
        result = 100;
        console.log('3. Result: ' + result);
    }, ms);

    console.log('2. End')
}
one(2000);
console.log(result);
*/

/*
let result = 0;
function two(ms) {
    console.log('1. Start');

    setTimeout(() => {
        result = 1000;
        console.log('3. Result: ' + result);

        setTimeout(() => {
            result = 2000;
            console.log('4. Result: ' + result);
        }, result);

    }, ms);

    console.log('2. End')
}
two(2000);
console.log(result);
*/

let result = 0;

function promiseOne(ms) {
    console.log('1. String');
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {

            if (ms < 2000) {
                reject('에러입니다.')
            }

            result = 1000;
            console.log('3. Result: ' + result);

            // 성공 시 실행할 함수
            resolve(result);
        }, ms)
    });
    console.log('2. END')

    return promise;
}

// const x = promiseOne(2000)
// x.then()

// ES2015
/*
promiseOne(2000)
    // resolve 함수에 전달할 함수를 기술
    .then(data => {
        console.log(data);

        // 다른 시간 걸리는 작업을 호출
        return promiseOne(result + 2000);
    })
    .then(data => {
        console.log('2 두번째 시간 걸리는 작업 결과')
        console.log(data);
    })
    .catch(err => console.error(err));

*/


// ES2017
// 비 동기를 동기화 해서 처리 => async / awiat
// 함수 기반으로 실행할 필요가 있다
async function callPromise() {
    try {
        console.log('3 callPromise Start')
        const one = await promiseOne(2000);
        console.log(one);

        const two = await promiseOne(3000);
        console.log(two)
        console.log('4. callPromise End')
    } catch (err) {
        console.error(err)
    }
}
callPromise();

console.log('----------------- END ------------------')