import React from 'react';

const todos = [
    'do some lool',
    'buy somr mac',
    'have lunch',
    'drink milk'
]
const CheckTodoList = function (Component) {
    return function () {
        if (!todos) {
            return null;
        } else if (todos.length < 1) {
            return <h3>No Data</h3>
        } else {
            return <Component {...todos} />
        }
    }
}
const TodoListUI = ({props}) => (
    <div >
        <ul>
            <li>HOC EXAMPLE LIST</li>
            {todos.map((t, i) => <li key={i} > {t}</li>)}
        </ul>
    </div>
)
const TodoList = CheckTodoList(TodoListUI);
export default TodoList;