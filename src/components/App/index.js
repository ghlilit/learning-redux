import React from 'react';
import './App.css';
import Footer from '../Footer'
import VisibleTodos from '../VisibleTodos';
import AddTodo from '../AddTodo'

const App = ( {location} ) => 
  <div className="App">
      <AddTodo />
      <VisibleTodos filter = {location.pathname.substr(1) || 'all'}/>
    <Footer/>
  </div>

export default App;

