import { createStore } from 'redux'
import rootReducer from './reducers'

const configureStore = () => {

    const addLoggingToDispatch = (store) => {
        const rawDispatch = store.dispatch;
        if(!console.group){
            return rawDispatch;
        }
        return (action) => {
            console.group(action.type)
            console.log('%c prev state', 'color: red', store.getState());
            console.log(action)
            const returnValue = rawDispatch(action);
            console.log('%c next state', 'color: red', store.getState())
            console.groupEnd(action.type)
            console.log(returnValue)
        }
    }

    const store = createStore(rootReducer);

    if(process.env.NODE_ENV !== 'production'){
        store.dispatch = addLoggingToDispatch(store);
    }
    
    return store;
}


export default configureStore;