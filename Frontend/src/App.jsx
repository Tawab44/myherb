//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Vgarden from "./pages/Vgarden";
import Query from "./pages/Query";
import Chatbot from "./components/Chatbot";
import Herbcare from "./pages/Herbcare";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/query" element={<Query />} />
        <Route path="/herbcare" element={<Herbcare />} />
        

        {/* Protected route */}
        <Route
          path="/Vgarden"
          element={
            <ProtectedRoute>
              <Vgarden />
            </ProtectedRoute>
          }
        />
      </Routes>    
 <Chatbot/>     
    </>
  );
}

export default App;


