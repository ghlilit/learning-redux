const deepFreeze = require('deep-freeze');
import expect from 'expect'

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    }
    const stateAfter = [{
        id: 0,
        text: 'Learn Redux',
        completed: false
    }];

    deepFreeze(stateBefore)
    deepFreeze(action)
    
    console.log(todos(stateBefore, action));
    console.log("todos");
    expect(todos(stateBefore, action)).toEqual(stateAfter);
}

const testToggleTodo = () => {
    const stateBefore = [
    {
        id: 0,
        text: 'Learn Redux',
        completed: false
    },
    {
        id: 1,
        text: 'Learn Redux',
        completed: false
    }
];

    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn Redux',
            completed: true
        }
    ];

    deepFreeze(stateBefore)
    deepFreeze(action)
    
    expect(todos(stateBefore, action)).toEqual(stateAfter);
    
}
testAddTodo();
testToggleTodo();
console.log("All tests passed")