import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';

const Products = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>جميع المنتجات</h1>
      
      {/* شبكة متجاوبة (Grid) لعرض المنتجات */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;