import { createAction, handleActions } from 'redux-actions';

const TODOLIST_ADDTODO = 'TODOLIST/ADDTODO';
const TODOLIST_UPDATETODO = 'TODOLIST/UPDATETODO';
const TODOLIST_DELETETODO = 'TODOLIST/DELETETODO';
const TODOLIST_CHANGETEXT = 'TODOLIST/CHANGETEXT';

const makeTodo = () => {
    const todos = [];
    for (var i = 1; i <= 5; i++) {
        todos.push({ id: i, text: `${i}번째 할 일 `, done: false })
    }
    return todos;
};

let cnt = 6;

// Action
/*
export const updateTodoAction = id => ({ type: TODOLIST_UPDATETODO, payload: id });
export const deleteTodoAction = id => ({ type: TODOLIST_DELETETODO, payload: id });
export const addTodoAction = text => {
    const todo = { id: cnt++, text, done: false };
    return { type: TODOLIST_ADDTODO, payload: todo }
}
export const changeTextAction = text => ({ type: TODOLIST_CHANGETEXT, payload: text });

const todoListR = (state = init, action) => {
    switch (action.type) {
        case TODOLIST_UPDATETODO:
            const updateTodos = state.todoList.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
            return { ...state, todoList: updateTodos };
        case TODOLIST_DELETETODO:
            const deleteTodos = state.todoList.filter(todo => todo.id !== action.payload);
            return { ...state, todoList: deleteTodos };
        case TODOLIST_ADDTODO:
            return { ...state, todoList: state.todoList.concat(action.payload) }
        case TODOLIST_CHANGETEXT:
            return { ...state, text: action.payload }
        default:
            return state;
    }
}
*/

export const updateTodoAction = createAction(TODOLIST_UPDATETODO, id => id);
export const deleteTodoAction = createAction(TODOLIST_DELETETODO, id => id);
export const addTodoAction = createAction(TODOLIST_ADDTODO, text => {
    const todo = { id: cnt++, text, done: false };
    return todo;
})
export const changeTextAction = createAction(TODOLIST_CHANGETEXT, text => text);

const init = {
    todoList: makeTodo(),
    text: ''
}

const todoListR = handleActions({
    [TODOLIST_UPDATETODO]: (state, action) => {
        const updateTodos = state.todoList.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
        return { ...state, todoList: updateTodos };
    },
    [TODOLIST_DELETETODO]: (state, action) => {
        const deleteTodos = state.todoList.filter(todo => todo.id !== action.payload);
        return { ...state, todoList: deleteTodos };
    },
    [TODOLIST_ADDTODO]: (state, action) => ({ ...state, todoList: state.todoList.concat(action.payload) }),
    [TODOLIST_CHANGETEXT]: (state, action) => ({ ...state, text: action.payload }),
}, init)

export default todoListR;