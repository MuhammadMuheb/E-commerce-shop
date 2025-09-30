import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EchoLayout from './layout/EchoLayout';
import Home from './components/Home';
import ShopPage from './components/ShopPage';
import ShoppingCart from './components/ShoppingCart';
import ProductDetailPage from './components/ProductDetailPage';
import YourCart from './components/yourCart'; 
import { CartProvider } from "react-use-cart"; 

function App() {
  return (
    <CartProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<EchoLayout />}>
            <Route path="/*" element={<Home />} />
            <Route path="shoppage" element={<ShopPage />} />
            <Route path="shoppingCart" element={<ShoppingCart />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="yourcart" element={<YourCart />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
