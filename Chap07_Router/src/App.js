import { Routes, Route, Link } from 'react-router-dom';
import A01FuncProps from './components/A01FuncProps';
import A02FuncState from './components/A02FuncState';
import A03Currency from './components/A03Currency';
import A04History from './components/A04History';
import A05Param from './components/A05Param';
import A06Arguments from './components/A06Arguments';

function App() {
  const user = { name: 'HungBu', age: 20 };
  const ary = ['a', 'b', 'c'];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="m-3">
      <h1>Chap07 Router</h1>

      {/* 아래 Routes에서 구현한 페이지에 대한 링크를 설정한다. 컴퍼넌트 어디서든지 사용할 수 있다 */}
      <Link to="/">Index</Link> | {' '}
      <Link to="/A02FuncState">A02FuncState</Link> |  {' '}
      <Link to="/A03Currency">A03Currency</Link> |  {' '}
      <Link to="/A04History">A03Currency</Link> |  {' '}
      <Link to="/A05Param/1/NolBu">A05Param 1</Link> |  {' '}
      <Link to="/A05Param/2/HungBu">A05Param 2</Link> |  {' '}

      <Link to="/A06Arguments?id=3&name=향단&address=Seoul#TOP">A06Arguments 3</Link> |  {' '}
      <Link to="/A06Arguments?id=4&name=방자&address=부산#BTN">A06Arguments 3</Link> |  {' '}

      <hr />

      {/* 브라우저 주소창에 매칭되도록 패스와 매칭 컴퍼넌트를 등록한다 */}
      <Routes>
        <Route path="/" element={<A01FuncProps name="흥부" age={30} arr={ary} user={user} onAdd={onAdd} isChecked />}></Route>
        <Route path="/A02FuncState" element={<A02FuncState />}></Route>
        <Route path="/A03Currency" element={<A03Currency />}></Route>
        <Route path="/A04History" element={<A04History />}></Route>

        {/* path를 이용해서 값 전달 "/:변수명" 형태로 기술하면 Link에서 대당 변수명에 패스로 지정한 값이 대입된다 */}
        <Route path="/A05Param/:id/:name" element={<A05Param />}></Route>

        {/* 주소줄을 이용한 데이터 전달. "Link에서 path?변수명=값&변수명=값" 형태로 값을 전달한다 */}
        <Route path="/A06Arguments" element={<A06Arguments />}></Route>
      </Routes>
    </div>
  );
}

export default App;
