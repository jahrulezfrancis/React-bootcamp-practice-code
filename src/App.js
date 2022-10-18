import React from 'react';
import './App.css';
import { Products } from './FilterableProductsTable/ProductTable';
import MyCars from './ReactBootCamp/Car';
import { Login } from './ReactBootCamp/Login';
import { TodoList } from './ReactBootCamp/Todo';

function App() {
  return (
    <div className="App">
      <MyCars />
      <Products />
      <Login />
      <TodoList />
    </div>
  );
}

export default App;