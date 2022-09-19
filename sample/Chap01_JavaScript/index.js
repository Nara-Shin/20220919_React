import { nickname, arr, onAdd, user, num as cnt } from './src/A12Export'
// default로 Export 된 경우는 import 할때 임의의 이름으로 사용할 수 있다.
import minFunc from './src/A12Default'
import min, { x } from './src/A12Combine';
import $ from 'jquery';

console.log(nickname);
console.log(arr[0]);
console.log(onAdd(10, 20));
console.log(user.name, user.age);
console.log(cnt);
minFunc(20, 2);
console.log('');
min(10, 20);
console.log(x);

const app = document.getElementById('app');

const div = document.createElement('div');
const text = document.createTextNode(`${user.name} / ${user.age}`);
div.appendChild(text);    // <div>흥부 / 20</div>
app.appendChild(div);

