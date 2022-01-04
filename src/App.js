import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { recuperarCarrito } from './features/carrito/carritoSlice';
import Carrito from './pages/Carrito';
import Home from './pages/Home';
import Home2 from './pages/Home2';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(recuperarCarrito())
  },[dispatch])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home2" element={<Home2/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
