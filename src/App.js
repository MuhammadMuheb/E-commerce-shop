import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EchoLayout from './layout/EchoLayout';
import Home from './components/Home';
import ShopPage from './components/ShopPage';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Layout */}
        <Route path="/" element={<EchoLayout />}>
          <Route index element={<Home />} />
          <Route path="shoppage" element={<ShopPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
