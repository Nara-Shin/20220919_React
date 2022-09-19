// 변수.
console.log('nickName: ' + nickName + ' typeof: ' + typeof nickName);

var nickName = '놀부';
console.log('nickName: ' + nickName + ' typeof: ' + typeof nickName);

var x = 10;

nickName = 30;
console.log('nickName: ' + nickName + ' typeof: ' + typeof nickName);

// 재선언도 에러는 아님
var nickName = true;
console.log('nickName: ' + nickName + ' typeof: ' + typeof nickName);

// 변수의 { } 범위는 함수만 갖는다
if (nickName) {
  var nickName = '흥부';
  console.log('IF Inner nickName: ' + nickName + ' typeof: ' + typeof nickName);
}

console.log('nickName: ' + nickName + ' typeof: ' + typeof nickName);
console.log('');

// ES6
let age = 20;
console.log('age: ' + age + ' typeof: ' + typeof age);

// 동적 타입 언어의 속성은 var과 같다
age = '향단';
console.log('age: ' + age + ' typeof: ' + typeof age);

// var, let, const 키워드로 선언된 변수를 재 선언할 수 없다.
// let age = 100;
// let nickName = 'ABC';

// 모든 { } 에서 범위를 갖는다
if (age) {
  let age = 100;        // 지역 변수가 된다. if 문이 종료되면 GC 대상이 되서 삭제된다
  console.log('IF Inner age: ' + age + ' typeof: ' + typeof age);
}
console.log('age: ' + age + ' typeof: ' + typeof age);
console.log('');


// const - 상수
const MY_PI = 3.1415;
console.log('MY_PI: ' + MY_PI + ' typeof: ' + typeof MY_PI);

// 값 초기화 이후 값 변경이 안된다
// MY_PI = 100;       // Error

const arr = [10, 20, 30];
arr[0] = 100;
console.log(arr);

// arr = [];      // Error. 새로운 번지수로 arr을 변경

const user = { name: '놀부', age: 40 };
user.name = '흥부';
user['age'] = 30;
console.log(user)

// user = { address: 'Seoul' };     // Error

