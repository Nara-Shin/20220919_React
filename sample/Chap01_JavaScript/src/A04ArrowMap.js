// 일반 함수. Arrow 함수 형태로 변경 안됨
function fn() {
    console.log('funcion');
}
fn();

const arr = [10, 11, 100, 101, 1000];

// 익명함수(이름이 없는 함수)
let total = 0;
arr.forEach(item => total += total + item);
console.log(total);

// map -> 기존의 배열을 순환해서 새로운 배열을 생성
const mapArr = arr.map(item => item * 2);
console.log(mapArr);

// filter -> 기본 배열에서 일정 조건을 만족하는 값만 새로운 배열에 추가
const filterArr = arr.filter(item => {
    if (item % 2 === 0) return true;        // true에 해당되는 item이 리턴된다.
    else return false;
});
console.log(filterArr);
