// npm i react-router-dom
// npm i react-loader-spinner
import { Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Audio, Bars } from 'react-loader-spinner';

import A01FuncProps from './components/A01FuncProps';
import A02FuncState from './components/A02FuncState';
import A03Currency from './components/A03Currency';
import A04History from './components/A04History';
import A05Param from './components/A05Param';
/*
import A06Arguments from './components/A06Arguments';
import A07Child from './components/A07ChildComponent';
import A08Redirect from './components/A08Redirect';
import NotFoundComponent from './components/NotFoundComponent';
*/
// view를 참조할때 해당 컴퍼넌트를 로드(처음 로드시에는 이 컴퍼넌트는 포함되지 않는다)
const A06Arguments = lazy(() => import('./components/A06Arguments'));
const A07Child = lazy(() => import('./components/A07ChildComponent'));
const A08Redirect = lazy(() => import('./components/A08Redirect'));
const NotFoundComponent = lazy(() => import('./components/NotFoundComponent'));

function App() {
  const user = { name: 'HungBu', age: 20 };
  const ary = ['a', 'b', 'c'];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  const naviStyle = { color: 'orange', fontWeight: 'bold' };

  return (
    <div className="m-3">
      <h1>Chap07 Router</h1>

      {/* 아래 Routes에서 구현한 페이지에 대한 링크를 설정한다. 컴퍼넌트 어디서든지 사용할 수 있다 */}
      <NavLink to="/" style={props => props.isActive ? naviStyle : ''}>Index</NavLink> | {' '}
      <NavLink to="/A01FuncProps" style={props => props.isActive ? naviStyle : undefined}>A01FuncProps</NavLink> |  {' '}
      <NavLink to="/A02FuncState" style={props => props.isActive ? naviStyle : undefined}>A02FuncState</NavLink> |  {' '}
      <NavLink to="/A03Currency" style={props => props.isActive ? naviStyle : undefined}>A03Currency</NavLink> |  {' '}
      <Link to="/A04History">A03Currency</Link> |  {' '}
      <Link to="/A05Param/1/NolBu">A05Param 1</Link> |  {' '}
      <Link to="/A05Param/2/HungBu">A05Param 2</Link> |  {' '}

      <Link to="/A06Arguments?id=3&name=향단&address=Seoul#TOP">A06Arguments 3</Link> |  {' '}
      <Link to="/A06Arguments?id=4&name=방자&address=부산#BTN">A06Arguments 3</Link> |  {' '}

      <Link to="/A07Child">A07Child</Link> |  {' '}
      <Link to="/A08Redirect">A08Redirect</Link> |  {' '}
      <Link to="/ABC">ABC</Link> |  {' '}

      <hr />

      {/* 브라우저 주소창에 매칭되도록 패스와 매칭 컴퍼넌트를 등록한다 */}
      <Routes>
        <Route path="/" element={<Navigate to="/A01FuncProps" replace />}></Route>
        <Route path="/A01FuncProps" element={<A01FuncProps name="흥부" age={30} arr={ary} user={user} onAdd={onAdd} isChecked />}></Route>
        <Route path="/A02FuncState" element={<A02FuncState />}></Route>
        <Route path="/A03Currency" element={<A03Currency />}></Route>
        <Route path="/A04History" element={<A04History />}></Route>

        {/* path를 이용해서 값 전달 "/:변수명" 형태로 기술하면 Link에서 대당 변수명에 패스로 지정한 값이 대입된다 */}
        <Route path="/A05Param/:id/:name" element={<A05Param />}></Route>

        {/* 주소줄을 이용한 데이터 전달. "Link에서 path?변수명=값&변수명=값" 형태로 값을 전달한다 */}
        <Route path="/A06Arguments" element={
          <Suspense fallback={<Audio />}>
            <A06Arguments />
          </Suspense>}>
        </Route>

        <Route path="/A07Child" element={<Suspense fallback={<Bars />}><A07Child /></Suspense>}>
          <Route path="" element={<h5>Chaild One</h5>} />
          <Route path="two" element={(<div>
            <h5>Child Two</h5>
            <div>
              This is Two Content
            </div>
          </div>)} />
          <Route path="/A07Child/three" element={<h5>Chaild Three</h5>} />
        </Route>

        <Route path="/A08Redirect" element={<Suspense fallback={<div>Loading...</div>}><A08Redirect /></Suspense>}></Route>

        {/* 매칭되는 path가 존재하지 않은 경우 표시할 컴퍼넌트  */}
        <Route path="*" element={<Suspense fallback={<div>Loading...</div>}><NotFoundComponent /></Suspense>}></Route>
      </Routes>
    </div>
  );
}

export default App;
