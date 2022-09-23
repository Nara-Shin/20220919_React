import React from "react";
import "./css/todos.css";
import { TodoListContextConsumer } from './../modules/TodoListContext';

function TodoListItem(props) {
  const { todo } = props;

  return (
    <TodoListContextConsumer>
      {value => (
        <tr>
          <td>{todo.id}</td>
          <td>
            <span className={todo.done ? 'done' : ''}>{todo.text}</span>
          </td>
          <td>
            <button className="btn btn-primary" onClick={() => value.action.updateTodo(todo.id)}>Complete</button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => value.action.deleteTodo(todo.id)}>Delete</button>
          </td>
        </tr>
      )}
    </TodoListContextConsumer>

  );
}
export default React.memo(TodoListItem);
