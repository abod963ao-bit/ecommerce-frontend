import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      {/* هنا سيتم عرض محتوى الصفحات المتغير بناءً على الرابط */}
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '20px', 
        backgroundColor: 'var(--text-color)', 
        color: 'white' 
      }}>
        © 2026 متجر باتمان التقني - جميع الحقوق محفوظة
      </footer>
    </div>
  );
};

export default MainLayout;
