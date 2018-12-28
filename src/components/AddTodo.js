import React from 'react'
import {connect} from 'react-redux'

let nextId = 0;
let  addTodo = (text) => {
  return{
    type: 'ADD_TODO',
    id: nextId ++,
    text }
}

let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <input
      ref = {node => input = node}/>
        <button onClick = {() => {dispatch(addTodo(input.value))
              input.value = '';
              }
            }>Add to do
        </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo;