import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      padding: '15px 30px', 
      backgroundColor: 'var(--primary-color)', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        BATMAN TECH
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* نستخدم Link بدلاً من a لمنع إعادة تحميل الصفحة بالكامل */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>الرئيسية</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>المنتجات</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>السلة</Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>تسجيل الدخول</Link>
        <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>لوحة التحكم</Link>
      </div>
    </nav>
  );
};

export default Navbar;
