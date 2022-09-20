import A01ClassProps from './components/A01ClassProps';
import A02ClassState from './components/A02ClassState';
import A03ClassEvent from './components/A03ClassEvent';

function App() {
  const num = 100;
  const arr = [10, 20];
  const user = { name: '흥부', age: 20 };
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="m-3">
      <h1>Chap03 Class Component</h1>

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
