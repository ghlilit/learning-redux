import React from 'react';
import './App.css';
import Footer from '../Footer'
import VisibleTodos from '../VisibleTodos';
import AddTodo from '../AddTodo'

const App = () => 
  <div className="App">
      <AddTodo />
      <VisibleTodos />
    <Footer/>
  </div>

export default App;
