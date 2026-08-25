import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
 
const userRole = localStorage.getItem('userRole') || 'customer';
  
  if (requiredRole === 'admin' && userRole !== 'admin') {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ color: 'var(--error-color)' }}>403 - غير مسموح بالدخول (Unauthorized)</h2>
        <p style={{ color: 'var(--muted-text-color)', margin: '15px 0' }}>عذراً، هذا المسار مخصص لمدراء النظام (Admins) فقط.</p>
        <a href="/" style={{ color: 'var(--primary-color)', textDecoration: 'underline', fontWeight: 'bold' }}>
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
