import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Contact from "./pages/Contact";

function App() {

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
