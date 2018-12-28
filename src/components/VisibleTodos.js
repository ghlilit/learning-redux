import { connect } from 'react-redux'
import TodoList from './TodoList'

const toggleTodo = (id) => {
    return{
        type: 'TOGGLE_TODO',
        id
    }
}

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
  
  const mapStateToProps = (state) => {
    return {todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter)
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