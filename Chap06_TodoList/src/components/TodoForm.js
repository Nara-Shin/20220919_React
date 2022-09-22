import React, { memo, useCallback, useRef, useState } from "react";

function TodoForm(props) {
  const { addTodo } = props;

  const inputRef = useRef();
  const [text, setText] = useState('');
  const changeText = useCallback(evt => setText(evt.target.value), []);

  const sendData = evt => {
    evt.preventDefault();
    addTodo(text);
    setText('');
    // console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" value={text} onChange={changeText} ref={inputRef} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  );
}
export default memo(TodoForm);
