import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import AvatarPage from "./pages/AvatarPage";
import Cocktail from "./pages/Cocktail";
import Hr from "./pages/Hr";
import Stripe from "./pages/Stripe";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/project/avatar' element={<AvatarPage/>} />
        <Route path='/project/cocktail' element={<Cocktail/>} />
        <Route path='/project/hr' element={<Hr/>} />
        <Route path='/project/stripe' element={<Stripe/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
