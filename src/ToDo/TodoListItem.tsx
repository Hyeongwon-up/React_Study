import React, { FunctionComponent } from 'react';



interface  TodoListItemProps {
    todo: {
        text?: string;
        complete?: boolean;
    };
}
const TodoListItem: FunctionComponent<TodoListItemProps> = ({todo}) => {

  return (
      <>
          <li>
              <label>
                  <input type = "checkbox" checked={todo.complete}/>
                  {todo.text}
              </label>

          </li>
      </>

  );
};

export default TodoListItem;
