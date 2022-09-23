import React, { useCallback, useContext, useRef } from 'react'
import TodoListContext from './../modules/TodoListContext';

function TodoForm() {
  const inputFiled = useRef();

  const { state, action } = useContext(TodoListContext);

  const sendData = useCallback(evt => {
    evt.preventDefault();
    console.log(state.text)
    action.addTodo(state.text);
    action.changeText('');
    inputFiled.current.focus();
  }, [state, action])

  return (

    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputFiled}
          value={state.text} onChange={evt => action.changeText(evt.target.value)} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1"
            onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  )
}
export default TodoForm;
