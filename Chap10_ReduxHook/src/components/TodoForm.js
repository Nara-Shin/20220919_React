import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, changeTextAction } from './../modules/todoListR';

function TodoForm(props) {
  const { text } = useSelector(state => state.todoListR);
  const dispatch = useDispatch();

  const inputFiled = useRef();

  const sendData = useCallback(evt => {
    evt.preventDefault();
    dispatch(addTodoAction(text));
    dispatch(changeTextAction(''));
    inputFiled.current.focus();
  }, [dispatch, text]);

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputFiled}
          value={text} onChange={evt => dispatch(changeTextAction(evt.target.value))} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  )
}
export default TodoForm;
