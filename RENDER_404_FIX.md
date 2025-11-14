# 🔧 حل مشکل 404 در Render

## ⚠️ مشکل
سایت deploy شده اما صفحه "Not Found" نشان می‌دهد.

## ✅ راه حل‌های احتمالی

### 1. بررسی Start Command در Render Dashboard

**Start Command باید باشد:**
```
bun run start
```

یا:
```
next start
```

**⚠️ مطمئن شوید که:**
- `bun dev start` نیست
- `npm start` نیست
- فقط `bun run start` یا `next start` باشد

### 2. بررسی Publish Directory

**Publish Directory باید باشد:**
```
.
```
(فقط یک نقطه)

### 3. بررسی Environment Variables

در Render Dashboard:
- `PORT` - Render خودش تنظیم می‌کند (نیازی به تنظیم دستی نیست)
- `NODE_ENV` - می‌تواند `production` باشد (اختیاری)

### 4. بررسی Logs در Render

1. به Render Dashboard بروید
2. Service خود را انتخاب کنید
3. به بخش **Logs** بروید
4. بررسی کنید:
   - آیا `next start` اجرا شده؟
   - آیا خطای خاصی وجود دارد؟
   - آیا پورت درست تنظیم شده؟

### 5. بررسی Build Output

در لاگ‌های build باید ببینید:
```
✓ Compiled successfully
✓ Generating static pages (3/3)
Route (app)
┌ ○ /
└ ○ /_not-found
```

### 6. راه حل: استفاده از server.js (اگر مشکل ادامه داشت)

اگر مشکل ادامه داشت، یک فایل `server.js` در root پروژه ایجاد کنید:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);

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
  }).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
```

و Start Command را تغییر دهید به:
```
node server.js
```

### 7. بررسی Routing

مطمئن شوید که:
- ✅ `src/app/page.tsx` وجود دارد
- ✅ `src/app/layout.tsx` وجود دارد
- ✅ همه import ها درست هستند
- ✅ فایل‌های فونت در `public/fonts/` وجود دارند

### 8. بررسی نهایی

بعد از تغییرات:
1. تغییرات را commit و push کنید
2. در Render یک **Manual Deploy** انجام دهید
3. **Logs** را بررسی کنید
4. سایت را **hard refresh** کنید (Ctrl+Shift+R)

## 💡 نکات مهم

- Next.js در Render باید روی پورتی که Render تعیین می‌کند اجرا شود
- Render خودش `PORT` environment variable را تنظیم می‌کند
- `next start` خودش PORT را از environment variable می‌خواند
- اگر مشکل ادامه داشت، لاگ‌های Render را دقیق بررسی کنید

## 🔍 Debug Steps

1. **بررسی Start Command**: باید `bun run start` باشد
2. **بررسی Logs**: آیا `next start` اجرا شده؟
3. **بررسی Port**: آیا پورت درست تنظیم شده؟
4. **بررسی Build**: آیا build موفق بوده؟
5. **بررسی Routing**: آیا route `/` وجود دارد؟

