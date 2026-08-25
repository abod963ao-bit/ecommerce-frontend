import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: 'عبود السيبراني',
    email: 'abboud@battech.com',
    phone: '0791234567',
    role: 'customer' // أو admin
  });

  const [orders] = useState([
    { id: 101, date: '2026-08-20', total: 120, status: 'تم التسليم' },
    { id: 102, date: '2026-08-22', total: 85, status: 'قيد الشحن' },
    { id: 103, date: '2026-08-23', total: 299, status: 'قيد المعالجة' },
    { id: 104, date: '2026-08-24', total: 50, status: 'ملغي' },
    { id: 105, date: '2026-08-25', total: 95, status: 'قيد المعالجة' }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setSuccessMsg('تم تحديث البيانات الشخصية بنجاح!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleLogout = () => {
    if (window.confirm('هل أنت متأكد من رغبتك في تسجيل الخروج؟')) {
      alert('تم تسجيل الخروج بنجاح.');
      navigate('/login');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>حساب المستخدم (Profile)</h1>

      {successMsg && (
        <div style={{ padding: '10px', backgroundColor: '#dcfce7', color: 'var(--success-color)', borderRadius: '5px', marginBottom: '15px' }}>
          {successMsg}
        </div>
      )}

      {/* معلومات الملف الشخصي */}
      <div style={{ backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px', marginBottom: '30px', border: '1px solid #eee' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ margin: 0, color: 'var(--text-color)' }}>البيانات الشخصية</h3>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            style={{ padding: '6px 12px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}
          >
            {isEditing ? 'إلغاء' : 'تعديل البيانات'}
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '4px' }}>الاسم الكامل:</label>
              <input type="text" name="fullName" value={user.fullName} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '4px' }}>رقم الهاتف:</label>
              <input type="tel" name="phone" value={user.phone} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <button type="submit" style={{ padding: '10px', backgroundColor: 'var(--secondary-color)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>حفظ التغييرات</button>
          </form>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.95rem' }}>
            <p><strong>الاسم:</strong> {user.fullName}</p>
            <p><strong>البريد الإلكتروني:</strong> {user.email}</p>
            <p><strong>رقم الهاتف:</strong> {user.phone}</p>
            <p><strong>نوع الحساب:</strong> <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>{user.role}</span></p>
          </div>
        )}
      </div>

      {/* قسم الطلبات السابقة */}
      <h2 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--primary-color)' }}>سجل الطلبات السابقة</h2>
      <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
              <th style={{ padding: '10px' }}>رقم الطلب</th>
              <th style={{ padding: '10px' }}>التاريخ</th>
              <th style={{ padding: '10px' }}>المبلغ الإجمالي</th>
              <th style={{ padding: '10px' }}>حالة الطلب</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>#{order.id}</td>
                <td style={{ padding: '10px' }}>{order.date}</td>
                <td style={{ padding: '10px' }}>${order.total}</td>
                <td style={{ padding: '10px', fontWeight: 'bold', color: order.status === 'تم التسليم' ? 'var(--success-color)' : 'var(--secondary-color)' }}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* زر تسجيل الخروج مع تأكيد */}
      <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'left' }}>
        <button 
          onClick={handleLogout}
          style={{ padding: '10px 20px', backgroundColor: 'var(--error-color)', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default Profile;