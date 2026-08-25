import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: 'عمان',
    paymentMethod: 'cash'
  });

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('يرجى تعبئة جميع الحقول الإجبارية!');
      return;
    }

    const generatedId = Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderSuccess(true);

    clearCart();
  };

  if (cart.length === 0 && !orderSuccess) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>سلة المشتريات فارغة</h2>
        <p style={{ color: 'var(--muted-text-color)', margin: '15px 0' }}>لا يمكنك الانتقال لإتمام الطلب وسلتك خالية.</p>
        <Link to="/products" style={{ padding: '10px 20px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
          تصفح المنتجات
        </Link>
      </div>
    );
  }

  // شاشة نجاح الطلب
  if (orderSuccess) {
    return (
      <div style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--border-radius)', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: 'var(--success-color)', marginBottom: '15px' }}>تم إتمام طلبك بنجاح!</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>رقم الطلب التجريبي الخاص بك:</p>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '20px' }}>#{orderId}</div>
        <p style={{ color: 'var(--muted-text-color)', marginBottom: '30px' }}>شكراً لتسوقك في متجر باتمان التقني. سيتم شحن طلبك قريباً.</p>
        <button 
          onClick={() => navigate('/products')}
          style={{ padding: '12px 25px', backgroundColor: 'var(--secondary-color)', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          العودة للمنتجات
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>إتمام الطلب (Checkout)</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
        {/* نموذج البيانات */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>الاسم الكامل:</label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
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
              required 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>العنوان:</label>
            <textarea 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
              rows="3"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>المدينة:</label>
            <select 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
              <option value="عمان">عمان</option>
              <option value="الطفيلة">الطفيلة</option>
              <option value="إربد">إربد</option>
              <option value="الزرقاء">الزرقاء</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>طريقة الدفع:</label>
            <select 
              name="paymentMethod" 
              value={formData.paymentMethod} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
              <option value="cash">الدفع عند الاستلام (Cash on Delivery)</option>
              <option value="card">بطاقة ائتمانية (تجريبي)</option>
            </select>
          </div>

          <button 
            type="submit"
            style={{ padding: '12px', backgroundColor: 'var(--secondary-color)', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
          >
            تأكيد الطلب (${totalPrice})
          </button>
        </form>

        {/* ملخص الطلب الجانبي */}
        <div style={{ backgroundColor: '#f9fafb', padding: '15px', borderRadius: '8px', border: '1px solid #eee', height: 'fit-content' }}>
          <h3 style={{ marginBottom: '15px', fontSize: '1.1rem', color: 'var(--primary-color)' }}>ملخص الطلب</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '200px', overflowY: 'auto', marginBottom: '15px' }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #ddd', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <span>المجموع الإجمالي:</span>
            <span style={{ color: 'var(--primary-color)' }}>${totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;