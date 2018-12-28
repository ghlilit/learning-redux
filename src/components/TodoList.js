import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  return (
    <ul>
      {todos.map(todo => 
        <Todo 
            key = {todo.id}
            onChange = {() => onTodoClick(todo.id)}
            {...todo}/>
      )}
    </ul>
  )
}


export default TodoList;