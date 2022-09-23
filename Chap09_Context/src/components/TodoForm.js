import React, { useCallback, useRef } from 'react'
import { TodoListContextConsumer } from './../modules/TodoListContext';

function TodoForm() {
  const inputFiled = useRef();

  const sendData = useCallback((evt, value) => {
    evt.preventDefault();
    value.action.addTodo(value.state.text);
    value.action.changeText('');
    inputFiled.current.focus();
  }, [])

  return (
    <TodoListContextConsumer>
      {value => (
        <form>
          <div className="input-group">
            <input type="text" className="form-control" ref={inputFiled}
              value={value.state.text} onChange={evt => value.action.changeText(evt.target.value)} />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary mr-1"
                onClick={evt => sendData(evt, value)}>Submit</button>
            </div>
          </div>
        </form>
      )}
    </TodoListContextConsumer>
  )
}
export default TodoForm;
