// 함수 리터럴. 함수 표현식
// onAdd(10, 20);

const onAdd = function (x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
}

const onMin = function (x, y) {
    return `${x} - ${y} = ${x - y}`;
}

onAdd(10, 20);
console.log(onMin(10, 20));
console.log('')


// ES6. 
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const onMulti = (x, y) => {
    return `${x} * ${y} = ${x * y}`;
}
console.log(onMulti(10, 20));

// 매개변수가 1개인 경우는 보통()를 생략하고 사용한다
const onDiv = (x) => {
    return `${x} / 2 = ${x * 2}`;
}
console.log(onDiv(10, 20));

const onDouble = x => {
    return `${x} ** 3 = ${x ** 3}`;     // 2 * 2 * 2
}
console.log(onDouble(2));

// 함수의 {} 내의 구문이 리턴 구문 딱 1줄만 있는 경우는 return과 {}를 생략하고 한 줄에 기술한다
// => 뒤의 구문이 값이면 return, => 뒤의 값이 실행 구문이면 return이 아닌 실행.
const onOne = (x, y) => {
    return `${x} + y = ${x + y}`;
}
console.log(onOne(10, 20));

const onTwo = (x, y) => `${x} + y = ${x + y}`;
console.log(onOne(10, 20));

const onThree = (x, y) => console.log(`${x} + y = ${x + y}`);
onThree(10, 20);

// Arrow 함수는 this가 상위 객체의 this를 따른다(Arrow 함수 자체의 this는 없음)
const user = {
    name: '놀부',
    age: 20,
    info() {
        console.log(`${this.name}님의 나이는 ${this.age}`);
    },
    display: () => {
        console.log(`${this.name}님의 나이는 ${this.age}`);
    }
}
user.info();
user.display();


// 어떠한 함수라도 적용 가능 - 매개변수의 초기값을 설정할 수 있다
const onFour = (x = 1, y = 1) => console.log(`${x} + ${y} = ${x + y}`);
onFour();
onFour(10, 20);
