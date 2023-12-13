import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Main from "./pages/Home";
import Counter from "./pages/Counter";
import SandwichP from "./pages/SandwichP";
import Library from "./pages/Library";

function App() {
  return (

    <>
    
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Main />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/sandwich" element={<SandwichP />} />
        <Route path="/library" element={<Library />} />
        </Routes>
      </BrowserRouter>

    
    </>




    // <>
    //   <CounterRTK />
    //   <Sandwich />
    //   <CreateBook />
    //   <BooksPage />
    // </>
  );
}

export default App;
