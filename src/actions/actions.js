import * as api from '../api'
import { normalize } from 'normalizr'
import * as schema from './schema'
import { getIsFetching } from '../reducers';

export const  addTodo = (text) => (dispatch) => {
    return api.addTodo(text).then(response => 
        dispatch({
        type: 'ADD_TODO_SUCCESS',
        response: normalize(response, schema.todo)
        }) 
    )
}


export const toggleTodo = id => dispatch => 
    api.toggleTodo(id).then((res => dispatch({
        type: 'TOGGLE_TODO_SUCCESS',
        response: normalize(res, schema.todo)
        })
    ))

export const fetchTodos = (filter) => (dispatch, getState) => {
    if  (getIsFetching(getState(), filter)){
        return Promise.resolve();
    }
    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter,
    });
        return api.fetchTodos(filter).then(
            response => {
                dispatch({
                    type: 'FETCH_TODOS_SUCCESS',
                    response: normalize(response, schema.arrayOfTodos),
                    filter,
                })
            },
            error => {
                dispatch({
                    type: 'FETCH_TODOS_FAILURE',
                    filter,
                    message: error.message || 'Something went wrong'
                })
            }
    );
};
