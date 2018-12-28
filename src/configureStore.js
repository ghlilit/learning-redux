import { createStore } from 'redux'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const configureStore = () => {
    let persistedState = {
        todos: loadState()
    }
    const store = createStore(rootReducer, persistedState);
    
    store.subscribe(throttle(() => {
        saveState(store.getState().todos);
    }), 1000)

    return store;
}


export default configureStore;