import React, { useRef, useState } from "react";

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
};

const TodoTemplate = () => {
  const [todoList, setTodoList] = useState(makeTodo());

  // 값을 유지만 할 목적. 화면 갱신 기능은 가지고 있지 않다.
  const cnt = useRef(6);

  // 변경할 변수가 있는 곳에서 정의하고 사용할 컴퍼넌트에 속성으로 전달한다.
  const updateTodo = id => {
    const todos = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      } else {
        return todo;
      }
    });
    setTodoList(todos);
  }
  const deleteTodo = id => {
    const todos = todoList.filter(todo => todo.id !== id);
    setTodoList(todos);
  }
  const addTodo = text => {
    const todo = { id: cnt.current++, text: text, done: false };
    setTodoList(todoList => todoList.concat(todo));
  }

  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
};
export default TodoTemplate;
