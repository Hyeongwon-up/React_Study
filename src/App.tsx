import React, {useState} from 'react';
import './App.css';
import TodoListItem from "./ToDo/TodoListItem";
import {AddTodo, Todo, ToggleTodo} from './types';
import TodoList from "./ToDo/TodoList";
import AddTodoForm from "./ToDo/AddTodoForm";


const initialTodos: Array<Todo> = [
    {text: 'todo1123213', complete: true},
    {text: 'todo12312312312', complete: false}
];

function App() {

    const [todos, setTodos] = useState(initialTodos)

    const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }

            return todo;
        });
        setTodos(newTodos);
    };

    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== "" &&
        setTodos([...todos, {text: newTodo, complete: false}])
    }

    return (

        <>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <AddTodoForm addTodo={addTodo}/>
        </>
    );
}

export default App;
