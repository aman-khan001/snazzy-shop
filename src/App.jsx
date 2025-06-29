import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// http://localhost:5173/

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<h1>About Us Page</h1>} />
        <Route path="/contact" element={<h1>Contact Us Page</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App