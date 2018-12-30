import { v4 } from 'node-uuid'
import * as api from './api'

export const  addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text 
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

const receiveTodos = (filter, todos) => ({
    type: 'RECEIVE_TODOS',
    todos,
    filter
})

export const fetchTodos = (filter) => {
    api.fetchTodos(filter)
    .then(res => receiveTodos(filter, res)
    );
    
}
