import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

const configureStore = () => {
    
    const middlewares = [thunk];
    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(logger)
    }
    
    const store = createStore(rootReducer, applyMiddleware(...middlewares));
    return store;
}


export default configureStore;