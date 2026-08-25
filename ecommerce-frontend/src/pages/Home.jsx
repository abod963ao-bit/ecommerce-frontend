import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingBottom: '40px' }}>
      
      {/* 1. Hero Section */}
      <section style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        padding: '60px 20px',
        borderRadius: 'var(--border-radius)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>أهلاً بك في متجر باتمان التقني</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', color: '#cbd5e1', margin: 0 }}>
          وجهتك الأولى لأحدث الأجهزة التقنية، الإكسسوارات، وقطع الأجهزة بأفضل الأسعار وأعلى جودة.
        </p>
        <Link 
          to="/products"
          style={{
            padding: '12px 30px',
            backgroundColor: 'var(--secondary-color)',
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            marginTop: '10px'
          }}
        >
          تسوق المنتجات الآن
        </Link>
      </section>

      {/* 2. قسم التصنيفات السريعة */}
      <section>
        <h2 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>التصنيفات الرئيسية</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
          {categories.map((cat, index) => (
            <Link 
              key={index}
              to="/products"
              style={{
                padding: '20px',
                backgroundColor: 'var(--surface-color)',
                border: '1px solid #e5e7eb',
                borderRadius: 'var(--border-radius)',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'var(--text-color)',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s'
              }}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* 3. المنتجات المميزة */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: 'var(--primary-color)', margin: 0 }}>منتجات مميزة</h2>
          <Link to="/products" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: 'bold' }}>
            عرض الكل ←
          </Link>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;