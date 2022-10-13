import './index.css'
import React from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import FAQ from './pages/FAQ';
import NoPage from './components/NoPage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProductView from './components/ProductView';

function App() {
  return (
    <div className="App bg-neutral-900 overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}> 
          <Route path='productview/:id' element={<ProductView />} />
        </Route>
        <Route path="/faq" element={<FAQ/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;