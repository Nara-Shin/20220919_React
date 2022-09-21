import A01FuncProps from './components/A01FuncProps';
import A02FuncState from './components/A02FuncState';
import A03FuncEvent from './components/A03FuncEvent';
import A04CreateDOM from './components/A04CreateDOM';
import A05Hook from './components/A05Hook';
import A06Hook from './components/A06Hook';

function App() {
  const num = 100;
  const arr = [10, 20];
  const user = { name: '흥부', age: 20 };
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="m-3">
      <h1>Chap04 Function Component</h1>

      <A06Hook></A06Hook><br />
      <A05Hook></A05Hook><br />
      <A04CreateDOM></A04CreateDOM><br />
      <A03FuncEvent></A03FuncEvent><br />
      <A02FuncState></A02FuncState><br />
      <A01FuncProps name="흥부" age={30} num={num} ary={arr} user={user} onAdd={onAdd} isChecked>
        This is App Content
      </A01FuncProps>
    </div>
  );
}

export default App;
