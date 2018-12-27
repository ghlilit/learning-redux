import React from 'react';
import './App.css';
import store from '../../store'
import Footer from '../Footer'
import TodoList from '../TodoList';
import AddTodo from '../AddTodo'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    default: 
      return todos;
  }
}


let nextId = 0;
const App = ({todos, visibilityFilter}) => 
  <div className="App">
    <ul>
      <AddTodo onClick = {text => store.dispatch({
        type: 'ADD_TODO',
        id: nextId ++,
        text,
      })} />
      <TodoList todos = {
        getVisibleTodos(
          todos,
          visibilityFilter)}
        onTodoClick = {id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }}/>
    </ul>
    {/* //<Footer/> */}
  </div>

export default App;
