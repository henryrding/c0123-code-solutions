import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />} >
        <Route index element={<Catalog />} />
        <Route path='about' element={<About />} />
        <Route path='details/:productId' element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
