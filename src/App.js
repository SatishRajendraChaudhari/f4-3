import React from 'react';
import './App.css';
import Home from './Component/pages/Home';
import Cart from './Component/pages/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        

        <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
