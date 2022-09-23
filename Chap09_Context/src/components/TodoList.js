import React from "react";
import TodoListItem from "./TodoListItem";
import { TodoListContextConsumer } from './../modules/TodoListContext';

function Todolist() {
  return (
    <TodoListContextConsumer>
      {value => (
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th>Todo</th>
              <th style={{ width: "10%" }}>Complete</th>
              <th style={{ width: "10%" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {value.state.todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
          </tbody>
        </table>
      )}
    </TodoListContextConsumer>
  );
}
export default Todolist;
