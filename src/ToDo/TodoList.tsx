import React, { FunctionComponent } from 'react';
import {Todo, ToggleTodo} from '../types';
import TodoListItem from "./TodoListItem";


interface TodoListProps{
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}




const TodoList: FunctionComponent<TodoListProps> = ({todos, toggleTodo}) => {


  return (

      <ul>{todos.map(todo =>{
          return <TodoListItem todo={todo} toggleTodo={toggleTodo} />;
      })}
      </ul>




  );
};

export default TodoList;
