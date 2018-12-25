import React, { Component } from 'react';
import './App.css';
import store from '../../redux-parts'

class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <div className="App">
        <button onClick = {() => store.dispatch({type: 'INCREMENT'})}>INCREMENT</button>
        <button onClick = {() => store.dispatch({type: 'DECREMENT'})}>DECREMENT</button>
      </div>
    );
  }
}

export default App;
store.subscribe(App.prototype.render);
