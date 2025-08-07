import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Products from './pages/Products';
import './App.css'
import Wishlist from './pages/Wishlist';
import OrderSummary from './pages/OrderSummary';



const App = () => {
  

  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={
            <Products />
        } />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />
        <Route path='/wishlist' element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        } ></Route>
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } />
        <Route path="/order-success" element={
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        } />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="*" element={<h1 className='text-center py-5 my-5'>404 Not Found</h1>} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App