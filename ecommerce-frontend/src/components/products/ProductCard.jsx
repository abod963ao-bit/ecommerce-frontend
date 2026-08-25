import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); 
  const isOutOfStock = product.stockQuantity === 0;

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: 'var(--border-radius)',
      padding: '15px',
      backgroundColor: 'var(--surface-color)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
      />
      
      <h3 style={{ fontSize: '1.1rem', margin: '5px 0' }}>{product.name}</h3>
      <p style={{ color: 'var(--muted-text-color)', fontSize: '0.9rem' }}>{product.category}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-color)' }}>
          ${product.price}
        </span>
        
        {isOutOfStock ? (
          <span style={{ color: 'var(--error-color)', fontWeight: 'bold', fontSize: '0.9rem' }}>
            غير متوفر
          </span>
        ) : (
          <span style={{ color: 'var(--success-color)', fontSize: '0.9rem' }}>
            متوفر: {product.stockQuantity}
          </span>
        )}
      </div>

      <button 
        disabled={isOutOfStock}
        onClick={() => addToCart(product)} // 3. تفعيل الحدث لإضافة المنتج عند النقر
        style={{
          padding: '10px',
          backgroundColor: isOutOfStock ? '#ccc' : 'var(--secondary-color)',
          color: isOutOfStock ? '#666' : '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: isOutOfStock ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          marginTop: '10px'
        }}
      >
        {isOutOfStock ? 'نفدت الكمية' : 'أضف إلى السلة'}
      </button>

      {/* رابط لتفاصيل المنتج */}
      <Link 
        to={`/products/${product.id}`} 
        style={{ textAlign: 'center', textDecoration: 'none', color: 'var(--primary-color)', fontSize: '0.9rem', marginTop: '5px' }}
      >
        عرض التفاصيل
      </Link>
    </div>
  );
};

export default ProductCard;