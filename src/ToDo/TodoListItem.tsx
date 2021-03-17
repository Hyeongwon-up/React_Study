import React, { FunctionComponent } from 'react';
import {Todo, ToggleTodo} from '../types';
import  "./TodoListItem.css"


interface  TodoListItemProps {
    todo:  Todo;
    toggleTodo: ToggleTodo;

}
const TodoListItem: FunctionComponent<TodoListItemProps> = ({todo,toggleTodo}) => {

  return (
      <>
          <li>
              <label className={todo.complete ? "complete": undefined}>
                  <input type = "checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
                  {todo.text}
              </label>

          </li>
      </>

  );
};

export default TodoListItem;
