import React from "react";
import "./App.css";
import CounterRTK from "./components/counter/CounterRTK";
import Sandwich from "./components/sandwich/Sandwich";
import CreateBook from '../src/components/books/CreateBook';
import BooksPage from '../src/components/books/BooksPage';

function App() {
  return (
    <>
      <CounterRTK />
      <Sandwich />
      <CreateBook/>
    <BooksPage/>
    </>
  );
}

export default App;
