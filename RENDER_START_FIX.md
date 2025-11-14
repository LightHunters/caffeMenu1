# 🔧 حل مشکل 404 در Render

## ⚠️ مشکل

سایت deploy شده اما صفحه "Not Found" نشان می‌دهد.

## ✅ راه حل

### 1. بررسی Start Command در Render

در تنظیمات Render، **Start Command** باید باشد:

```
bun run start
```

یا مستقیماً:

```
next start
```

### 2. بررسی Environment Variables

در Render Dashboard، بخش **Environment** را بررسی کنید:

- `PORT` - Render خودش این را تنظیم می‌کند (نیازی به تنظیم دستی نیست)
- `NODE_ENV` - می‌تواند `production` باشد (اختیاری)

### 3. بررسی Logs در Render

1. به Render Dashboard بروید
2. Service خود را انتخاب کنید
3. به بخش **Logs** بروید
4. بررسی کنید که آیا خطای خاصی وجود دارد

### 4. بررسی Build Output

در لاگ‌های build باید ببینید:

```
✓ Compiled successfully
✓ Generating static pages (3/3)
Route (app)
┌ ○ /
└ ○ /_not-found
```

### 5. راه حل‌های احتمالی

#### گزینه 1: استفاده از server.js (اگر مشکل ادامه داشت)

اگر مشکل ادامه داشت، می‌توانید یک `server.js` ایجاد کنید:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
```

و Start Command را تغییر دهید به:

```
node server.js
```

#### گزینه 2: بررسی Routing

مطمئن شوید که:

- فایل `src/app/page.tsx` وجود دارد
- فایل `src/app/layout.tsx` وجود دارد
- همه import ها درست هستند

### 6. بررسی نهایی

بعد از تغییرات:

1. تغییرات را commit و push کنید
2. در Render یک Manual Deploy انجام دهید
3. لاگ‌ها را بررسی کنید
4. سایت را refresh کنید

## 💡 نکات مهم

- Next.js در Render باید روی پورت که Render تعیین می‌کند اجرا شود
- Render خودش `PORT` environment variable را تنظیم می‌کند
- `next start` خودش PORT را از environment variable می‌خواند
- اگر مشکل ادامه داشت، لاگ‌های Render را بررسی کنید
