# راهنمای Deploy در Render

## تنظیمات Render

برای deploy کردن این پروژه در Render، تنظیمات زیر را اعمال کنید:

### Build Command

```
bun install && bun run build
```

### Start Command

```
bun run start
```

### Publish Directory

```
.next
```

**⚠️ مهم:** Publish Directory باید `.next` باشد، نه `bun dev start`!

### Environment Variables

- `NODE_ENV`: `production`

## نکات مهم

1. **Publish Directory**: باید `.next` باشد (پوشه‌ای که Next.js بعد از build ایجاد می‌کند)
2. **Build Command**: `bun install && bun run build`
3. **Start Command**: `bun run start` (نه `bun dev start`)

## بررسی

بعد از تنظیمات، build باید موفق باشد و پروژه در Render اجرا شود.
