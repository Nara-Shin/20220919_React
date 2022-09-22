
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




