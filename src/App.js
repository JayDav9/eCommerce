
import './App.css';
import Checkout from './Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './Products';
import Nav from './Nav';
import {CartProvider} from './CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path = '/' element = {<Products />} />
      <Route path ='/checkout' element = {<Checkout />} />
    </Routes>
    
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
