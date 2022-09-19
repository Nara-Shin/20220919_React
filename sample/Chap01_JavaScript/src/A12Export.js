// export가 붙으면 내부에서 사용할 변수가 아닌 다른 JS 파일에서 불려와 사용할 변수, 함수가 된다
export let nickname = '놀부';
export const arr = [10, 20];
export const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

const user = { name: '흥부', age: 30 };
let num = 10;
export { user, num }