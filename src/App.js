
import Home from './components/pages/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/layouts/navbar/Navbar'
import Itemdetail from './components/pages/itemDetail/Itemdetail';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';
import CartContextProvider from  './context/CartContext';



function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:name" element={<Home/>}/>
            <Route path="/itemDetail/:id" element={<Itemdetail/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;
