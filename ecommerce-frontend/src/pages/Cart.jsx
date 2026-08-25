import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>سلة المشتريات فارغة</h2>
        <p style={{ color: 'var(--muted-text-color)', margin: '15px 0' }}>لم تقم بإضافة أي منتج إلى السلة بعد.</p>
        <Link 
          to="/products" 
          style={{ 
            display: 'inline-block', 
            padding: '10px 20px', 
            backgroundColor: 'var(--primary-color)', 
            color: 'white', 
            borderRadius: '5px', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          تصفح المنتجات الآن
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>سلة المشتريات</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '5px' }} />
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--text-color)' }}>{item.name}</h3>
                <p style={{ color: 'var(--muted-text-color)', fontSize: '0.9rem' }}>السعر: ${item.price}</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* أزرار التحكم بالكمية */}
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1, item.stockQuantity)}
                style={{ padding: '5px 10px', backgroundColor: '#ddd', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                -
              </button>
              <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1, item.stockQuantity)}
                style={{ padding: '5px 10px', backgroundColor: '#ddd', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                +
              </button>

              {/* زر الحذف */}
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ padding: '5px 10px', backgroundColor: 'var(--error-color)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '15px' }}
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ملخص السلة */}
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #eee', paddingTop: '20px' }}>
        <button 
          onClick={clearCart}
          style={{ padding: '10px 15px', backgroundColor: 'transparent', color: 'var(--error-color)', border: '1px solid var(--error-color)', borderRadius: '5px', cursor: 'pointer' }}
        >
          إفراغ السلة
        </button>

        <div style={{ textAlign: 'left' }}>
          <h3 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}>المجموع الكلي: ${totalPrice}</h3>
          <Link 
            to="/checkout"
            style={{ 
              display: 'inline-block', 
              padding: '12px 25px', 
              backgroundColor: 'var(--secondary-color)', 
              color: 'white', 
              borderRadius: '5px', 
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            إتمام الطلب
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;