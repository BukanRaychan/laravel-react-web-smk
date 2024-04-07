import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Nav from "./Nav.jsx"
import Home from './Component/Home.jsx';
import ContactUs from './Component/ContactUs.jsx';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
