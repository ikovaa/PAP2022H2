import './App.css';
import React from 'react';
import Home from './Home';
import Products from './Products';
import FAQ from './FAQ';
import NoPage from './components/NoPage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-neutral-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;