const combineReducers = (reducers) => {
    return (state = {}, action) => {
        Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key], action
                );
                return nextState;
            },
            {}
        )
    };
}


// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     }
// }