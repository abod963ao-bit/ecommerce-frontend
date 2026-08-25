import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProtectedRoute from './components/common/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* مسارات عامة */}
          <Route path="/" element={<Home />} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          
          {/* مسارات التسوق */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* مسارات المستخدم والأدمن */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route 
  path="/admin" 
  element={
    <ProtectedRoute requiredRole="admin">
      <AdminDashboard />
    </ProtectedRoute>
  } 
/>
          
          {/* صفحة الخطأ 404 */}
          <Route path="*" element={<div style={{ color: 'var(--error-color)', padding: '20px' }}><h1>404 - الصفحة غير موجودة</h1></div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;