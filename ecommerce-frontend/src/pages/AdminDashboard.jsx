import { useState } from 'react';
import { products as initialProducts } from '../data/products';

const AdminDashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleProductStatus = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, stockQuantity: p.stockQuantity > 0 ? 0 : 5 } : p));
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>لوحة تحكم الأدمن (Admin Dashboard)</h1>
      
      {/* بطاقات الإحصائيات السريعة */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
        <div style={{ padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
          <h4 style={{ color: 'var(--muted-text-color)', fontSize: '0.9rem' }}>إجمالي المنتجات</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '5px' }}>{products.length}</p>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid var(--secondary-color)' }}>
          <h4 style={{ color: 'var(--muted-text-color)', fontSize: '0.9rem' }}>الطلبات التجريبية</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '5px' }}>5</p>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid var(--success-color)' }}>
          <h4 style={{ color: 'var(--muted-text-color)', fontSize: '0.9rem' }}>إجمالي المبيعات</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '5px' }}>$1,250</p>
        </div>
      </div>

      {/* قسم إدارة المنتجات */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>إدارة المنتجات</h2>
        <input 
          type="text" 
          placeholder="ابحث عن منتج للإدارة..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px 12px', borderRadius: '5px', border: '1px solid #ccc', width: '250px' }}
        />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
              <th style={{ padding: '10px' }}>المنتج</th>
              <th style={{ padding: '10px' }}>التصنيف</th>
              <th style={{ padding: '10px' }}>السعر</th>
              <th style={{ padding: '10px' }}>المخزون</th>
              <th style={{ padding: '10px' }}>الإجراء</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((p) => (
              <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={p.image} alt={p.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                  {p.name}
                </td>
                <td style={{ padding: '10px' }}>{p.category}</td>
                <td style={{ padding: '10px' }}>${p.price}</td>
                <td style={{ padding: '10px' }}>
                  <span style={{ color: p.stockQuantity > 0 ? 'var(--success-color)' : 'var(--error-color)', fontWeight: 'bold' }}>
                    {p.stockQuantity > 0 ? `${p.stockQuantity} متوفر` : 'نفدت الكمية'}
                  </span>
                </td>
                <td style={{ padding: '10px' }}>
                  <button 
                    onClick={() => toggleProductStatus(p.id)}
                    style={{ padding: '6px 12px', backgroundColor: p.stockQuantity > 0 ? 'var(--error-color)' : 'var(--success-color)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    {p.stockQuantity > 0 ? 'تعطيل المنتج' : 'تفعيل المنتج'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;