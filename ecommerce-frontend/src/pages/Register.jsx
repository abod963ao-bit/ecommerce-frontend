import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      setError('يرجى ملء جميع الحقول الإجبارية.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('كلمتا المرور غير متطابقتين.');
      return;
    }

    if (!agreeTerms) {
      setError('يجب الموافقة على الشروط والأحكام قبل إتمام التسجيل.');
      return;
    }

    setSuccess(true);
    
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '450px', margin: '30px auto', padding: '30px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary-color)', textAlign: 'center' }}>إنشاء حساب جديد</h1>

      {error && (
        <div style={{ padding: '10px', backgroundColor: '#fee2e2', color: 'var(--error-color)', borderRadius: '5px', marginBottom: '15px', fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      {success && (
        <div style={{ padding: '10px', backgroundColor: '#dcfce7', color: 'var(--success-color)', borderRadius: '5px', marginBottom: '15px', fontSize: '0.9rem', textAlign: 'center' }}>
          تم إنشاء الحساب بنجاح! جاري تحويلك لتسجيل الدخول...
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>الاسم الكامل:</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="عبود..."
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>البريد الإلكتروني:</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@battech.com"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>رقم الهاتف:</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0790000000"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>كلمة المرور:</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>تأكيد كلمة المرور:</label>
          <input 
            type="password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="********"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input 
            type="checkbox" 
            id="terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <label htmlFor="terms" style={{ fontSize: '0.9rem', cursor: 'pointer' }}>أوافق على الشروط والأحكام وسياسة الخصوصية</label>
        </div>

        <button 
          type="submit"
          style={{ padding: '12px', backgroundColor: 'var(--secondary-color)', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
        >
          إنشاء الحساب
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: 'var(--muted-text-color)' }}>
        لديك حساب بالفعل؟ <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>تسجيل الدخول</Link>
      </p>
    </div>
  );
};

export default Register;