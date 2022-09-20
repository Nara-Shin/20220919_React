import 'bootstrap/dist/css/bootstrap.min.css'

// 함수의 첫 글자가 반드시 대문자로 시작해야 한다.
/*
function App() {
  return <h3>Hello World 1</h3>
}

const elem = <h3>Hello World 02</h3>
function App() {
  return elem
}

// JSX에서 리턴되는 값은 단일 요소만 허용한다. 따라서 Root 요소로 묶을 필요가 있음.
// 단독 태그도 반드시 종료 태그가 있어야 한다  또는 /> 형태로 종료
function App() {
  return <div>
    <h3>Hello World 3</h3>
    <div>This is Contents</div>
    <input type="text" /> 
  </div>
}

const elem = (
  <div>
    <h3>Hello World 4</h3>
    <div>This is Contents</div>
    <input type="text" />
  </div>
)
function App() {
  return elem;
}


function App() {
  return (
    <div>
      <h3>Hello World 3</h3>
      <div>This is Contents</div>
      <input type="text" />
    </div>
  )
}


const nickname = '놀부';
const makeDOM = function () {
  return <div>
    <h5>Function</h5>
    <div>함수로 작성된 문구</div>
  </div>
}

const MakeDOM = function () {
  return <div>
    <h5>Function</h5>
    <div>함수로 작성된 문구</div>
  </div>
}


function App() {
  const age = 30;
  const arr = [10, 20];

  return (
    <div className='m-3'>
      <h3>Hello World 3</h3>
      <div>This is Contents</div>
      <div>
        Name: {nickname}<br />
        Age: {age}<br />
        Array: {arr[0]} / {arr[1]}<br />
        Func: {makeDOM()}<br />
        <MakeDOM></MakeDOM>
      </div>
      <input type="text" className="form-control" />
      <img src="./images/tree.jpg" alt="나무 사진" />
    </div>
  )
}
export default App;
*/

const nickname = '놀부';
const MakeDOM = function () {
  return <div>
    <h5>Function</h5>
    <div>함수로 작성된 문구</div>
  </div>
}

function App() {
  const age = 30;
  const arr = [10, 20];

  return (
    <div className="m-3">
      <h1>Chap02 JSX</h1>
      <div>
        Name: {nickname}<br />
        Age: {age}<br />
        Array: {arr[0]} / {arr[1]}<br />
        <MakeDOM></MakeDOM>
      </div>
      <input type="text" className="form-control" />
      <img src="./images/tree.jpg" alt="나무 사진" />
    </div>
  );
}

export default App;
