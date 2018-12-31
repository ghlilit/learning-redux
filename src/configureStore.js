import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise';
import logger from 'redux-logger'
import rootReducer from './reducers'

const configureStore = () => {

    const middlewares = [promise];
    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(logger)
    }
    
    const store = createStore(rootReducer, applyMiddleware(...middlewares));
    return store;
}


export default configureStore;