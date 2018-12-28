import { connect } from 'react-redux'
import TodoList from './TodoList'
import {toggleTodo} from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default: 
        return todos;
    }
  }
  
  const mapStateToProps = (state, ownProps) => {
    return {todos: getVisibleTodos(
        state.todos,
        ownProps.filter)
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
        onTodoClick : id => {
            dispatch(toggleTodo(id))
          }
      }
  }

  const VisibleTodos = connect(mapStateToProps, mapDispatchToProps)(TodoList)
  export default VisibleTodos;