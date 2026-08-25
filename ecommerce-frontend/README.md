# متجر باتمان التقني (BATTECHNO E-Commerce Frontend)

مشروع تدريبي متقدم لتصميم وتطوير واجهة متجر إلكتروني متجاوبة باستخدام React و Vite و React Router، كجزء من متطلبات التدريب الميداني في شركة باتمان للتكنولوجيا (BATTECHNO).

الأدوات والمكتبات المستخدمة
* **React & Vite**: لبناء وتطوير واجهة المستخدم بسرعة فائقة.
* **React Router (v6)**: للتنقل الديناميكي بين المسارات وإدارة صفحات الخطأ 404.
* **Context API & LocalStorage**: لإدارة سلة المشتريات ومزامنتها محلياً.
* **CSS Modules / Custom Styles**: لتصميم نظام متجاوب (Responsive Design) يدعم Desktop, Tablet, Mobile.

متطلبات التشغيل
تأكد من تثبيت [Node.js](https://nodejs.org/) على جهازك.

أوامر التثبيت والتشغيل
1. استنساخ المستودع أو فتح مجلد المشروع:
   ```bash
   cd ecommerce-frontend

2.  تثبيت الحزم والاعتماديات:

npm install

3. تشغيل بيئة التطوير المحلية:
npm run dev

4. بناء المشروع للإنتاج (Production Build):
npm run build

# بنية المشروع الرئيسية
src/components/: المكونات القابلة لإعادة الاستخدام (Navbar, Footer, ProductCard, ProtectedRoute).

src/pages/: صفحات المتجر (Home, Products, ProductDetails, Cart, Checkout, Login, Register, Profile, AdminDashboard).

src/context/: إدارة الحالة المشتركة (CartContext).

src/data/: البيانات التجريبية الثابتة (Mock Data).

الحسابات التجريبية (Mock Accounts)
حساب الأدمن: يحمل صلاحية الوصول للوحة التحكم (/admin).

حساب العميل (Customer): مخصص للتسوق وتصفح الملف الشخصي والطلبات.

ملاحظة هامة: هذا المشروع يعتمد حالياً على بيانات تجريبية (Mock Data) ومحاكاة محلية، وسيتم ربطه بالـ Backend الفعلي (REST API & Neon Database) في المهمة القادمة.