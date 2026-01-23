# 📰 Hugo News Theme - قالب أخبار احترافي

تطبيق متكامل **React + Express + Tailwind CSS** لإنشاء موقع أخبار عصري مع قالب Hugo قابل للتصدير.

> **الإصدار:** 1.0.0 | **الحالة:** ✅ جاهز للإنتاج

---

## 🚀 الميزات الرئيسية

### 📱 واجهة مستخدم عصرية
- ✅ تصميم responsive (mobile-first)
- ✅ دعم كامل للعربية (RTL)
- ✅ نمط داكن/فاتح
- ✅ Tailwind CSS v4 + Animation

### 📄 نظام المقالات المتقدم
- ✅ جدول محتويات **sticky** ذكي
  - عرض عادي في البداية
  - تحويل لـ sticky عند scroll
  - فتح/إغلاق عند hover
- ✅ Type scale محسّن للعربية
- ✅ معلومات المؤلف وسيرة ذاتية
- ✅ أزرار مشاركة (Twitter, Facebook, WhatsApp)
- ✅ اقتراحات مقالات ذات صلة
- ✅ استدعاء لـ Action (CTA) - الاشتراك

### 🏷️ نظام التصنيفات
- ✅ أقسام رئيسية (سياسة، اقتصاد، تكنولوجيا، إلخ)
- ✅ علامات مخصصة (tags)
- ✅ صفحات تصنيف ديناميكية

### 🎨 Hugo Theme
- ✅ قالب Hugo قابل للتصدير الكامل
- ✅ دعم Tailwind CSS عبر CDN
- ✅ محسّن للـ SEO
- ✅ صيغ: HTML + CSS + Layouts

---

## 📋 المتطلبات

- **Node.js** >= 18.0.0
- **npm** أو **pnpm**
- **PostgreSQL** (اختياري - للبيانات الفعلية)

---

## 🛠️ البدء السريع

### التثبيت
```bash
git clone https://github.com/Tarek-g/hugo-news-theme.git
cd hugo-news-theme
npm install
```

### التطوير
```bash
# تشغيل الخادم + عميل Vite معاً
npm run dev

# أو تشغيل العميل فقط
npm run dev:client
```

**الرابط:** http://localhost:5000

### الإنتاج
```bash
# بناء المشروع
npm run build

# تشغيل الخادم الإنتاجي
npm start
```

---

## 📁 هيكل المشروع

```
.
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # UI Components
│   │   ├── pages/         # صفحات (home, hugo-docs)
│   │   ├── hooks/         # Custom Hooks
│   │   └── lib/           # Utilities
│   └── index.html
├── server/                 # Express Backend
│   ├── app.ts             # تكوين التطبيق
│   ├── index-dev.ts       # خادم التطوير
│   ├── index-prod.ts      # خادم الإنتاج
│   ├── routes.ts          # المسارات
│   └── storage.ts         # Storage abstraction
├── shared/                 # Code مشترك
│   └── schema.ts          # Drizzle Schema
├── hugo-news-theme/       # قالب Hugo
│   ├── layouts/           # HTML Templates
│   ├── content/           # مثال مقالات
│   └── tailwind.config.js
├── docs/updates/          # 📚 التوثيق والتحديثات
│   ├── FINAL_SUMMARY.md
│   ├── TABLE_OF_CONTENTS_FIX.md
│   ├── EDITOR_GUIDE.md
│   └── ...
├── dist/                  # Build Output
├── vite.config.ts         # Vite Config
└── tsconfig.json          # TypeScript Config
```

---

## 🎯 الأوامر المتاحة

| الأمر | الوصف |
|------|-------|
| `npm run dev` | تشغيل الخادم + Vite معاً |
| `npm run dev:client` | تشغيل عميل Vite فقط |
| `npm run build` | بناء للإنتاج |
| `npm start` | تشغيل الخادم الإنتاجي |
| `npm run check` | التحقق من الأنواع TypeScript |
| `npm run db:push` | مزامنة قاعدة البيانات (Drizzle) |

---

## 🔧 متغيرات البيئة

أنشئ ملف `.env`:

```env
# قاعدة البيانات (اختياري)
DATABASE_URL=postgresql://user:password@localhost:5432/hugo_news

# المنفذ (الافتراضي: 5000)
PORT=5000

# البيئة
NODE_ENV=development
```

---

## 📚 التوثيق

جميع الأدلة والتحديثات متوفرة في مجلد **`docs/updates/`**:

- **[FINAL_SUMMARY.md](docs/updates/FINAL_SUMMARY.md)** - ملخص نهائي شامل
- **[TABLE_OF_CONTENTS_FIX.md](docs/updates/TABLE_OF_CONTENTS_FIX.md)** - شرح جدول المحتويات الذكي
- **[EDITOR_GUIDE.md](docs/updates/EDITOR_GUIDE.md)** - دليل المحرر
- **[QUICK_START.md](docs/updates/QUICK_START.md)** - البدء السريع
- **[IMPROVEMENTS_IMPLEMENTED.md](docs/updates/IMPROVEMENTS_IMPLEMENTED.md)** - قائمة التحسينات
- **[ARTICLE_PAGE_IMPROVEMENTS.md](docs/updates/ARTICLE_PAGE_IMPROVEMENTS.md)** - تحسينات صفحة المقالة
- **[TEST_REPORT.md](docs/updates/TEST_REPORT.md)** - تقرير الاختبار

---

## 🎨 الميزات التصميمية

### نظام الألوان
- **Primary:** أزرق (#3b82f6)
- **Secondary:** رمادي فاتح (#f3f4f6)
- **Dark Mode:** مدعوم كاملاً

### Typography
- **Arabic Typography:** تباعد سطور 2 للقراءة المثالية
- **Type Scale:** 5 مستويات عناوين responsive
- **Font:** السيريف للمحتوى، Sans للواجهة

### Components
- ✅ Breadcrumbs (فتات الخبز)
- ✅ Cards (بطاقات)
- ✅ Buttons (أزرار)
- ✅ Forms (نماذج)
- ✅ Alerts و Toasts

---

## 🧪 الاختبار

### الاختبار اليدوي
تابع [VERIFICATION_CHECKLIST.md](docs/updates/VERIFICATION_CHECKLIST.md) للتحقق من جميع الميزات.

### الاختبار الآلي (مخطط له)
```bash
npm run test
```

---

## 📤 النشر

### على Vercel
```bash
vercel deploy
```

### على Heroku
```bash
heroku create your-app-name
git push heroku main
```

### على Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

---

## 🤝 المساهمة

نرحب بالمساهمات! 

1. اعمل fork للمشروع
2. أنشئ فرع للميزة (`git checkout -b feature/amazing-feature`)
3. اعمل commit (`git commit -m 'Add amazing feature'`)
4. اعمل push للفرع (`git push origin feature/amazing-feature`)
5. افتح Pull Request

---

## 📝 الترخيص

هذا المشروع مرخص تحت **MIT License** - انظر ملف [LICENSE](LICENSE) للتفاصيل.

---

## 👨‍💻 الكاتب

**Tarek** - [GitHub](https://github.com/Tarek-g)

---

## 📞 التواصل والدعم

- 🐛 **الإبلاغ عن مشاكل:** [Issues](https://github.com/Tarek-g/hugo-news-theme/issues)
- 💬 **النقاش:** [Discussions](https://github.com/Tarek-g/hugo-news-theme/discussions)
- 📧 **البريد الإلكتروني:** (أضف بريدك)

---

## 🙏 شكر وتقدير

- [Tailwind CSS](https://tailwindcss.com/) - التصميم
- [React](https://react.dev/) - المكتبة
- [Hugo](https://gohugo.io/) - محرك المواقع الثابتة
- [Radix UI](https://www.radix-ui.com/) - المكونات الأساسية

---

## 🎉 التحديثات الأخيرة

### ✨ v1.0.0 - التحديث الأخير (23 يناير 2025)

**جدول المحتويات الذكي:**
- ✅ عرض عادي في بداية المقالة
- ✅ تحويل ذكي إلى sticky عند scroll
- ✅ فتح على hover بـ animation smooth
- ✅ عنوان مميز بخلفية primary
- ✅ خلفية صلبة (بدون شفافية)

**التحسينات السابقة:**
- ✅ نظام أقسام موحد
- ✅ 9 ميزات جديدة لصفحة المقالة
- ✅ دعم العربية الكامل
- ✅ Hugo theme قابل للتصدير

---

**آخر تحديث:** 23 يناير 2025
