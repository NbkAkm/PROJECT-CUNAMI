import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import './App.css';
import WhatsApp from './pages/WhatsApp/WhatsApp';
import Delivery from './pages/Delivery/Delivery';
import Call from './pages/Call/Call';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/whats-app" element={<WhatsApp/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/call" element={<Call/>} />
        </Routes>
      
    </div>
  );
}

export default App;
