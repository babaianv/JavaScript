import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Sandwich from './components/Sandwich';
import CreateBook from './components/CreateBook';
import BooksPage from './components/BooksPage';

function App() {
  return (
  <>
    <Counter />
    <Sandwich/>
    <CreateBook/>
    <BooksPage/>
  </>
  );
}

export default App;
