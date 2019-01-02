import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { withRouter } from 'react-router'
import * as actions from '../actions/actions'
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from './FetchError'


class VisibleTodos extends Component {
  componentDidMount = () => {
    this.fetchData();
   }

   componentDidUpdate = (prevProps) => {
      if(this.props.filter !== prevProps.filter){
      this.fetchData();
     }
   }
  
   fetchData(){
      const { filter, fetchTodos} = this.props;
      fetchTodos(filter);
   }

  render() {
    const {toggleTodo, todos, isFetching, errorMessage} = this.props;
      if(isFetching && !todos.length) {
        return <p>Loading...</p>
      }
      if(errorMessage && !todos.length){
        return <FetchError onRetry = {() => this.fetchData()} message = {errorMessage}/>
      }
    return (
        <TodoList 
          todos = {todos}
          onTodoClick = {toggleTodo}
         />
    )
  }
}

  const mapStateToProps = (state, {location}) => {
    const filter = location.pathname.substr(1) || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        errorMessage: getErrorMessage(state, filter),
        isFetching: getIsFetching(state, filter),
        filter
    }
  }


  VisibleTodos = withRouter(connect(
     mapStateToProps,
     actions
    )(VisibleTodos));
  export default VisibleTodos;
