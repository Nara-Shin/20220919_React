
console.log([10, 11, 100]);
console.log(...[10, 11, 100]);      // arr[0], arr[1], arr[2]

console.log('NolBu');
console.log(...'NolBu');
console.log('');

// ...rest는 나머지 매개변수를 의미(실질적인 배열). 이전의 argumensts(유사 배열)라는 내부 변수와 비슷 
function spreadFun(a, b, c, d, e, ...rest) {
    console.log(`a => ${a}`);
    console.log(`b => ${b}`);
    console.log(`c => ${c}`);
    console.log(`d => ${d}`);
    console.log(`e => ${e}`);
    console.log(`rest => ${rest} / ${rest.length}`);
}

spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
console.log('')


// 배열 합치기.
const aryOne = [10, 20, 30];
const aryTwo = [1, 2, 3, ...aryOne];
console.log(aryTwo);
console.log('');


// Object
const objOne = {
    id: 1,
    name: 'NolBu'
};

const objTwo = {
    id: 2,
    address: 'Seoul',
    // 키와 변수명이 동일하면 :뒤를 생략할 수 있다
    // objOne: objOne
    // 동일한 key가 있는 경우 나중에 정의한 값으로 덮어씀
    ...objOne,
}
console.log(objTwo);

const objThree = {
    ...objOne,
    id: 3,
    address: 'InChen',
}
console.log(objThree);
