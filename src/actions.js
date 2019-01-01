import { v4 } from 'node-uuid'
import * as api from './api'
import { getIsFetching } from './reducers';

export const  addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text 
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter,
})

const receiveTodos = (filter, todos) => ({
    type: 'RECEIVE_TODOS',
    todos,
    filter,
})

export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching, getState()){
        return;
    }
    dispatch(requestTodos(filter));
        return api.fetchTodos(filter).then(res => {
            dispatch(receiveTodos(filter, res))
        }
    );
};

