import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ color: 'var(--error-color)' }}>المنتج غير موجود</h2>
        <Link to="/products" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>
          العودة إلى قائمة المنتجات
        </Link>
      </div>
    );
  }

  const isOutOfStock = product.stockQuantity === 0;

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <Link to="/products" style={{ display: 'inline-block', marginBottom: '20px', color: 'var(--muted-text-color)', textDecoration: 'none' }}>
        ← العودة للمنتجات
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
        />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <span style={{ color: 'var(--muted-text-color)', fontSize: '0.9rem' }}>{product.category}</span>
          <h1 style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>{product.name}</h1>
          <p style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>{product.description}</p>
          
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
            ${product.price}
          </div>

          <div>
            {isOutOfStock ? (
              <span style={{ color: 'var(--error-color)', fontWeight: 'bold' }}>نفدت الكمية من المخزون</span>
            ) : (
              <span style={{ color: 'var(--success-color)' }}>متوفر في المخزون: {product.stockQuantity} قطعة</span>
            )}
          </div>

          <button 
            disabled={isOutOfStock}
            style={{
              padding: '12px',
              backgroundColor: isOutOfStock ? '#ccc' : 'var(--secondary-color)',
              color: isOutOfStock ? '#666' : '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: isOutOfStock ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              marginTop: 'auto'
            }}
          >
            {isOutOfStock ? 'غير متوفر حالياً' : 'أضف إلى السلة'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;