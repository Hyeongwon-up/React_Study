import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListItem from "./ToDo/TodoListItem";

function App() {
  return (

      <div>
        <TodoListItem todo={{text:'todo', complete: false}}/>
      </div>
    );
}

export default App;
