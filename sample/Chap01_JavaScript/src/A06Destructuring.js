const obj = {
    name: 'NolBu',
    age: 30
}

// const name = obj.name;
// const age = obj.age;

// 객체는 정의를 {}로 배열은 [] 형태로 정의한다.
// object의 경우는 선언되는 변수명이 객체의 key 이름과 동일해야 한다. 그렇지 않으면 alias를 사용.
const { name, age } = obj;
console.log(name, age + 100);

// const name = 'ABC';          // 이미 위에서 선언된 변수명 name
const { name: nickname, age: num } = obj;
console.log(nickname, num);

// 객체는 없는 값이 있을 수 있음. 이런 값에 default 값을 지정할 수 있음
const { name: nickname1, age: num1 = 0, address1 = 'Seoul' } = obj;
console.log(nickname1, num1, address1);
console.log('');


const ary = ['A', 'B', 'C'];
// 순차적으로 꺼내는 작업만 가능. Alias도 안됨
const [x, y, z] = ary;
console.log(x, y, z);

const [a, b, c = 0, d = 0] = ary;
console.log(a, b, c, d);

console.log(obj, ary);