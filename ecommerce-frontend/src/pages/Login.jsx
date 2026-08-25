import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('يرجى ملء جميع الحقول المطلوبة.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (formData.email.includes('admin')) {
        alert('تم تسجيل الدخول بنجاح كأدمن!');
        navigate('/admin');
      } else {
        alert('تم تسجيل الدخول بنجاح كعميل!');
        navigate('/profile');
      }
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '30px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary-color)', textAlign: 'center' }}>تسجيل الدخول</h1>

      {error && (
        <div style={{ padding: '10px', backgroundColor: '#fee2e2', color: 'var(--error-color)', borderRadius: '5px', marginBottom: '15px', fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>البريد الإلكتروني:</label>
          <input 
            type="email5" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@battech.com"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>كلمة المرور:</label>
          <div style={{ position: 'relative' }}>
            <input 
              type={showPassword ? 'text' : 'password'} 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              style={{ width: '100%', padding: '10px', paddingLeft: '60px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}
            >
              {showPassword ? 'إخفاء' : 'إظهار'}
            </button>
          </div>
        </div>

        <button 
          type="submit"
          disabled={loading}
          style={{ padding: '12px', backgroundColor: loading ? '#ccc' : 'var(--secondary-color)', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '10px' }}
        >
          {loading ? 'جاري التحقق...' : 'تسجيل الدخول'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: 'var(--muted-text-color)' }}>
        ليس لديك حساب؟ <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>إنشاء حساب جديد</Link>
      </p>
    </div>
  );
};

export default Login;