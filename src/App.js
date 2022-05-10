import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import AvatarPage from "./pages/AvatarPage";
import Cocktail from "./pages/Cocktail";
import Hr from "./pages/Hr";
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import FoodBank from "./pages/FoodBank";
import Sidebar from "./components/Sidebar";

function App() {
  // let location = useLocation()
  return (
    <BrowserRouter>
      <NavBar />
      <Sidebar />
      <AnimatePresence exitBeforeEnter>
        {/* animatepresence will trigger everytime a direct child is changed, uselocation is to help cause a change in the routes to cause animation to trigger */}
        <Routes>
        {/* <Routes location={location} key={location.pathname}> */}
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/project/avatar' element={<AvatarPage/>} />
          <Route path='/project/cocktail' element={<Cocktail/>} />
          <Route path='/project/hr' element={<Hr/>} />
          <Route path='/project/foodbank' element={<FoodBank/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
