import A01ClassProps from './components/A01ClassProps';
import A02ClassState from './components/A02ClassState';
import A03ClassEvent from './components/A03ClassEvent';
import A04CreateDOM from './components/A04CreateDOM';
import A05LifeCycle from './components/A05LifeCycle';
import A06PureComponent from './components/A06PureComponent';
import A07ShallowEqual from './components/A07ShallowEqual';
import A08HigherOrderComp from './components/A08HigherOrderComp';

function App() {
  const num = 100;
  const arr = [10, 20];
  const user = { name: '흥부', age: 20 };
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="m-3">
      <h1>Chap03 Class Component</h1>

      <A08HigherOrderComp name="놀부"></A08HigherOrderComp><br />
      <A08HigherOrderComp name="향단"></A08HigherOrderComp><br />

      <A07ShallowEqual></A07ShallowEqual><br />
      <A06PureComponent></A06PureComponent><br />
      <A05LifeCycle color="orange" isChecked={true}></A05LifeCycle><br />
      <A04CreateDOM></A04CreateDOM><br />
      <A03ClassEvent></A03ClassEvent><br />
      <A02ClassState></A02ClassState><br />

      <A01ClassProps name="놀부" age={30} num={num} ary={arr} user={user} onAdd={onAdd} isChecked>
        This is App Content.
      </A01ClassProps>
      <A01ClassProps name="홍길동" age={20} num={num} ary={arr} user={user} onAdd={onAdd} isChecked>
        This is 홍길동
      </A01ClassProps>
    </div>
  );
}

export default App;
