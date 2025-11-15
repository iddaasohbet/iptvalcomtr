# IPTVal - Deployment Guide

## 🎯 Proje Bilgileri

**Domain:** iptval.com.tr  
**Marka Adı:** IPTVal  
**E-posta:** info@iptval.com.tr  
**Instagram:** @iptval  
**WhatsApp:** +44 7445 508352 (Aynı kaldı)

## 📋 Yapılan Değişiklikler

✅ Tüm "Tulya IPTV" referansları "IPTVal" olarak güncellendi  
✅ Domain URL'leri `tulyaiptv.com` → `iptval.com.tr`  
✅ E-posta adresleri `info@tulyaiptv.com` → `info@iptval.com.tr`  
✅ Instagram kullanıcı adı `@tulyaiptv` → `@iptval`  
✅ Tüm SEO metadata ve açıklamaları güncellendi  
✅ Header, Footer ve tüm sayfalar güncellendi  
✅ İletişim bilgileri (WhatsApp, Tel) aynı kaldı

## 🚀 GitHub ve Vercel Deploy Adımları

### 1. GitHub Repository Oluştur

Yeni bir GitHub hesabı ile:

```bash
cd iptval
git init
git add .
git commit -m "Initial commit - IPTVal IPTV Platform"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/iptval.git
git push -u origin main
```

### 2. Vercel'e Deploy Et

1. [vercel.com](https://vercel.com) hesabınıza giriş yapın
2. "New Project" butonuna tıklayın
3. GitHub repository'yi seçin (iptval)
4. Project ayarları:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** npm run build
   - **Output Directory:** .next
   - **Install Command:** npm install

5. Environment Variables (Gerekirse):
   ```
   NEXT_PUBLIC_SITE_URL=https://www.iptval.com.tr
   ```

6. "Deploy" butonuna tıklayın

### 3. Domain Bağlama

Vercel panelinden:

1. Project → Settings → Domains
2. `iptval.com.tr` ve `www.iptval.com.tr` ekleyin
3. Vercel'in verdiği DNS kayıtlarını domain sağlayıcınızda ayarlayın:
   ```
   A Record: 76.76.21.21
   CNAME: cname.vercel-dns.com
   ```

### 4. SSL Sertifikası

Vercel otomatik olarak SSL sertifikası sağlayacak (Let's Encrypt).

## 🔧 Lokal Test

```bash
cd iptval
npm install
npm run dev
```

Tarayıcıda: http://localhost:3000

## 📝 Google Search Console Güncelleme

Yeni domain için Google Search Console'da:

1. Yeni property ekle: `iptval.com.tr`
2. Ownership verification (HTML tag zaten layout.tsx'te mevcut)
3. Sitemap gönder: `https://www.iptval.com.tr/sitemap.xml`

## 🎨 Ekstra Düzenlemeler (Opsiyonel)

Eğer logo değiştirmek isterseniz:
- `public/og-image.webp` dosyasını güncelleyin
- Boyut: 1200x630px (Open Graph için)

## ⚡ Production Checklist

- [x] Tüm marka referansları güncellendi
- [x] Domain URL'leri değiştirildi
- [x] E-posta adresleri güncellendi
- [x] Instagram handle güncellendi
- [x] WhatsApp numarası korundu
- [x] SEO metadata güncellendi
- [ ] GitHub'a push edildi
- [ ] Vercel'e deploy edildi
- [ ] Domain DNS ayarları yapıldı
- [ ] SSL sertifikası aktif
- [ ] Google Analytics/Search Console ayarlandı

## 📞 İletişim Bilgileri (Son Durum)

- **Website:** iptval.com.tr
- **E-posta:** info@iptval.com.tr
- **WhatsApp:** +44 7445 508352
- **Instagram:** @iptval
- **Telefon:** +44 7445 508352

---

**Not:** Orijinal "Tulya IPTV" sitesi masaüstünde kaldı, bu yeni bir kopya.

