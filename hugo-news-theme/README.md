# 📰 Hugo News Theme - قالب أخبار عربي

قالب Hugo احترافي لبوابة أخبار عربية حديثة مع دعم كامل للغة العربية واتجاه RTL.

![Hugo](https://img.shields.io/badge/Hugo-0.120+-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Arabic](https://img.shields.io/badge/language-Arabic-orange.svg)

## ✨ المميزات

- 🌐 **دعم كامل للغة العربية** مع اتجاه RTL
- 📱 **تصميم متجاوب** يعمل على جميع الأجهزة
- 🎨 **تصميم حديث** باستخدام Tailwind CSS
- 📰 **شريط أخبار متحرك** يعرض آخر 10 مقالات
- 🔥 **نظام المقالات المميزة** (Featured & Sub-Featured)
- 📂 **تصنيفات متعددة**: سياسة، اقتصاد، رياضة، ثقافة، تكنولوجيا
- ✍️ **قسم الآراء** منفصل
- 🏷️ **نظام الوسوم (Tags)**
- ⚡ **أداء عالي** مع Hugo

## 📋 المتطلبات

قبل البدء، تأكد من تثبيت:

- **Hugo Extended** (الإصدار 0.120.0 أو أحدث)
  ```bash
  # macOS
  brew install hugo
  
  # Windows (Chocolatey)
  choco install hugo-extended
  
  # Linux (Snap)
  snap install hugo
  ```

- **Node.js & npm** (لـ Tailwind CSS)
  ```bash
  # تحقق من التثبيت
  node --version
  npm --version
  ```

## 🚀 التثبيت والاستخدام

### الطريقة 1: استخدام الثيم كمشروع مستقل

```bash
# 1. استنساخ المشروع
git clone https://github.com/Tarek-g/hugo-news-theme.git
cd hugo-news-theme

# 2. تثبيت Tailwind CSS
npm install

# 3. تشغيل الخادم المحلي
hugo server

# 4. افتح المتصفح على
# http://localhost:1313
```

### الطريقة 2: استخدام الثيم في مشروع Hugo موجود

```bash
# 1. في مجلد مشروعك
cd your-hugo-project

# 2. إضافة الثيم كـ Git Submodule
git submodule add https://github.com/Tarek-g/hugo-news-theme.git themes/hugo-news-theme

# 3. نسخ الملفات المطلوبة
cp themes/hugo-news-theme/hugo.toml.example hugo.toml
cp themes/hugo-news-theme/package.json .
cp themes/hugo-news-theme/tailwind.config.js .
cp themes/hugo-news-theme/postcss.config.js .

# 4. تحديث hugo.toml
echo 'theme = "hugo-news-theme"' >> hugo.toml

# 5. تثبيت التبعيات
npm install

# 6. تشغيل الخادم
hugo server
```

## 📁 هيكل المشروع

```
hugo-news-theme/
├── archetypes/          # قوالب المحتوى الافتراضية
├── assets/
│   └── css/
│       ├── main.css     # ملف Tailwind الرئيسي
│       └── marquee.css  # أنيميشن شريط الأخبار
├── content/
│   ├── posts/           # المقالات الإخبارية
│   └── opinion/         # مقالات الرأي
├── layouts/
│   ├── _default/
│   │   ├── baseof.html  # القالب الأساسي
│   │   ├── list.html    # صفحة القوائم
│   │   └── single.html  # صفحة المقال الفردي
│   ├── partials/
│   │   ├── head.html    # رأس الصفحة
│   │   ├── header.html  # الهيدر والقائمة
│   │   └── footer.html  # الفوتر
│   └── index.html       # الصفحة الرئيسية
├── static/              # الملفات الثابتة (صور، خطوط)
├── hugo.toml            # ملف الإعدادات
├── package.json         # تبعيات npm
└── tailwind.config.js   # إعدادات Tailwind
```

## ⚙️ الإعدادات

### ملف `hugo.toml`

```toml
baseURL = 'https://your-domain.com/'
languageCode = 'ar'
title = 'Arabic News Portal'
direction = 'rtl'

[params]
  description = "A modern Arabic news portal"
  author = "Your Name"

# تخصيص القائمة الرئيسية
[menus]
  [[menus.main]]
    name = 'الرئيسية'
    url = '/'
    weight = 10
  [[menus.main]]
    name = 'سياسة'
    url = '/categories/politics'
    weight = 20
  # أضف المزيد من القوائم حسب الحاجة
```

## 📝 إنشاء محتوى جديد

### إنشاء مقال إخباري عادي

```bash
hugo new posts/my-news-article.md
```

محتوى الملف:
```markdown
---
title: "عنوان المقال"
date: 2024-12-11T10:00:00+03:00
draft: false
categories: ["politics"]  # politics, economy, sports, culture, technology
category: "سياسة"
author: "اسم الكاتب"
tags: ["وسم1", "وسم2"]
---

محتوى المقال هنا...
```

### إنشاء مقال مميز (Featured)

أضف `featured: true` في Front Matter:

```markdown
---
title: "مقال مميز رئيسي"
date: 2024-12-11T10:00:00+03:00
draft: false
categories: ["politics"]
featured: true
category: "سياسة"
author: "اسم الكاتب"
---

محتوى المقال المميز...
```

### إنشاء مقال مميز فرعي (Sub-Featured)

أضف `sub_featured: true` في Front Matter:

```markdown
---
title: "مقال مميز فرعي"
date: 2024-12-11T10:00:00+03:00
draft: false
categories: ["technology"]
sub_featured: true
category: "تكنولوجيا"
author: "اسم الكاتب"
---

محتوى المقال...
```

### إنشاء مقال رأي

```bash
hugo new opinion/my-opinion.md
```

```markdown
---
title: "عنوان مقال الرأي"
date: 2024-12-11T10:00:00+03:00
draft: false
author: "اسم الكاتب"
---

محتوى مقال الرأي...
```

## 🎨 التخصيص

### تعديل الألوان والتصميم

عدّل ملف `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        // أضف ألوانك المخصصة
      }
    }
  }
}
```

بعد التعديل، قم بإعادة بناء CSS:
```bash
npm run build:css  # إذا أضفت هذا السكريبت
# أو
hugo server  # سيقوم Hugo ببناء CSS تلقائياً
```

### تعديل القائمة الرئيسية

عدّل قسم `[menus]` في `hugo.toml`:

```toml
[[menus.main]]
  name = 'قسم جديد'
  url = '/categories/new-category'
  weight = 80
```

### تعديل شريط الأخبار المتحرك

شريط الأخبار يعرض تلقائياً آخر 10 مقالات. لتعديل العدد، افتح `layouts/partials/header.html` وابحث عن:

```html
{{ range first 10 (where .Site.RegularPages "Section" "posts") }}
```

غيّر الرقم `10` إلى العدد المطلوب.

### تعديل سرعة شريط الأخبار

عدّل ملف `assets/css/marquee.css`:

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;  /* غيّر 30s للتحكم بالسرعة */
}
```

## 🏗️ البناء للإنتاج

```bash
# بناء الموقع
hugo --minify

# الملفات الناتجة ستكون في مجلد public/
```

رفع محتويات مجلد `public/` إلى خادم الويب الخاص بك.

## 🌐 النشر

### GitHub Pages

```bash
# 1. أنشئ repository جديد على GitHub
# 2. في إعدادات الـ repo، فعّل GitHub Pages
# 3. اختر branch: gh-pages

# 4. أضف GitHub Action للنشر التلقائي
# أنشئ ملف .github/workflows/hugo.yml
```

### Netlify

1. اربط repository الخاص بك مع Netlify
2. إعدادات البناء:
   - **Build command**: `hugo --minify`
   - **Publish directory**: `public`
   - **Hugo version**: 0.120.0 (في متغيرات البيئة)

### Vercel

```bash
vercel --prod
```

## 📂 التصنيفات المتاحة

- `politics` - سياسة
- `economy` - اقتصاد
- `sports` - رياضة
- `culture` - ثقافة
- `technology` - تكنولوجيا

لإضافة تصنيف جديد، ما عليك سوى استخدامه في Front Matter للمقال.

## 🔧 استكشاف الأخطاء

### المشكلة: الموقع لا يظهر بشكل صحيح

**الحل**: تأكد من تشغيل `npm install` لتثبيت Tailwind CSS.

### المشكلة: شريط الأخبار لا يتحرك

**الحل**: تأكد من وجود ملف `assets/css/marquee.css` وأنه محمّل في `layouts/partials/head.html`.

### المشكلة: المقالات المميزة لا تظهر

**الحل**: تأكد من إضافة `featured: true` أو `sub_featured: true` في Front Matter للمقال.

### المشكلة: Hugo لا يتعرف على الثيم

**الحل**: تأكد من إضافة `theme = "hugo-news-theme"` في `hugo.toml`.

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 🤝 المساهمة

المساهمات مرحب بها! لا تتردد في:

1. عمل Fork للمشروع
2. إنشاء branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى الـ branch (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## 📞 الدعم

إذا واجهت أي مشاكل أو لديك أسئلة:

- افتح [Issue](https://github.com/Tarek-g/hugo-news-theme/issues) على GitHub
- راسلني عبر البريد الإلكتروني

## 🙏 شكر وتقدير

- [Hugo](https://gohugo.io/) - إطار العمل
- [Tailwind CSS](https://tailwindcss.com/) - إطار عمل CSS
- المجتمع العربي للمطورين

---

صُنع بـ ❤️ للمجتمع العربي
