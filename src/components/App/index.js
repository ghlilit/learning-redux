import React, { Component } from 'react';
import './App.css';
import store from '../../store'
import FilterLink from '../FilterLink'
import TodoList from '../TodoList';

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
class App extends Component {
  render() {
    const {todos, visibilityFilter} = this.props;
    let visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter);
    return (
      <div className="App">
      <input
      ref = {node => this.input = node}/>
        <button onClick = {() => {store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextId ++
            });
              this.input.value = '';
          }
          }>Add to do
          </button>
          <ul>
            <TodoList todos = {visibleTodos}
             onTodoClick = {id => {
               store.dispatch({
                 type: 'TOGGLE_TODO',
                 id
               })
             }}/>
          </ul>
          <p>
            Show:
            {' '}
            <FilterLink
              visibilityFilter = {visibilityFilter}
              filter = 'SHOW_ALL'>
                All
            </FilterLink>
                  {' '}
            <FilterLink
              visibilityFilter = {visibilityFilter}
              filter = 'SHOW_ACTIVE'>
                Active
            </FilterLink>
                  {' '}
            <FilterLink
              visibilityFilter = {visibilityFilter}
              filter = 'SHOW_COMPLETED'>
                Completed
            </FilterLink>
          </p>
      </div>
    );
  }
}

export default App;
