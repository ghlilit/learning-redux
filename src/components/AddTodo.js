import React from 'react'

const AddTodo = ({onClick}) => {
  let input;
  return (
    <div>
      <input
      ref = {node => input = node}/>
        <button onClick = {() => {
              onClick(input.value)
              input.value = '';
            }
          }>Add to do
        </button>
    </div>
  )
}

export default AddTodo;