
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import { getVisibleTodos, getIsFetching } from '../reducers'


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
    const {toggleTodo, todos, isFetching} = this.props;
      if(isFetching && !todos.length) {
        return <p>Loading...</p>
      }
    return (
        <TodoList 
        {...rest}
         onTodoClick = {toggleTodo}
         />
    )
  }
}

  const mapStateToProps = (state, {location}) => {
    const filter = location.pathname.substr(1) || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        filter
    }
  }


  VisibleTodos = withRouter(connect(
     mapStateToProps,
     actions
    )(VisibleTodos));
  export default VisibleTodos;
