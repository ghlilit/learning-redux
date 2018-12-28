import React from 'react'

const Todo = ({text, completed, onChange}) => {
    return (
      <ul>
          <input type = "radio" 
          onClick = {onChange}
          checked = {completed && true}
          />
          {text}
        </ul>
    )
  }
  

const TodoList = ({todos = [], onTodoClick}) => {
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