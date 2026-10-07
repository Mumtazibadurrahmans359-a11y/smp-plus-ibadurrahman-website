# GitHub Pages Deployment Guide

## Langkah-Langkah Deploy ke GitHub Pages

### 1. Konfigurasi Repository

1. Buka repository di GitHub: https://github.com/Mumtazibadurrahmans359-a11y/smp-plus-ibadurrahman-website
2. Klik **Settings** → **Pages**
3. Di bagian "Source", pilih:
   - Branch: `main`
   - Folder: `/ (root)`
4. Klik **Save**

### 2. Verifikasi Deployment

- GitHub akan membuat workflow otomatis
- Website akan accessible di: `https://mumtazibadurrahmans359-a11y.github.io/smp-plus-ibadurrahman-website/`
- Tunggu 1-2 menit hingga deploy selesai

### 3. Setup Custom Domain (Opsional)

Jika ingin menggunakan domain sendiri (contoh: `smpplusibadurrahman.sch.id`):

1. Beli domain di registrar (GoDaddy, Namecheap, dll)
2. Di GitHub Repository → **Settings** → **Pages**
3. Di bagian "Custom domain", masukkan domain Anda
4. Configure DNS records di registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
           185.199.109.153
           185.199.110.153
           185.199.111.153
   ```
5. Atau gunakan CNAME untuk subdomain:
   ```
   Type: CNAME
   Name: www
   Value: mumtazibadurrahmans359-a11y.github.io
   ```

### 4. Enable HTTPS

- GitHub Pages automatically enables HTTPS
- Cek opsi "Enforce HTTPS" di Settings → Pages
- Website akan aman dengan SSL certificate gratis

---

## Alternatif Hosting

### Netlify (Rekomendasi)
- Lebih cepat dan fitur lengkap
- Free tier dengan deployment unlimited
- Custom domain gratis

**Steps:**
1. Buka https://netlify.com
2. Login dengan GitHub
3. Pilih repository ini
4. Build settings:
   - Build command: (kosongkan)
   - Publish directory: `.` (root)
5. Deploy
6. Setup custom domain di Netlify settings

### Vercel
- Performa sangat cepat
- Analytics dan monitoring included
- Gratis dengan custom domain

**Steps:**
1. Buka https://vercel.com
2. Import repository
3. Deploy otomatis

---

## Post-Deployment Checklist

- [ ] Website accessible di public URL
- [ ] HTTPS enabled dan certificate valid
- [ ] Semua halaman bisa dibuka (Beranda, Profil, Program, Berita, Kontak)
- [ ] Form kontak berfungsi (perlu backend untuk email)
- [ ] Mobile responsive berfungsi baik
- [ ] SEO metadata ter-update
- [ ] Analytics configured (optional)
- [ ] Custom domain working (jika ada)

---

## Maintenance

### Update Content
1. Edit file HTML di local atau GitHub editor
2. Push ke repository
3. GitHub Pages auto-deploy dalam beberapa menit

### Backup
- Repository GitHub adalah backup cloud Anda
- Semua perubahan tercatat di git history

### Performance Optimization
- Compress images sebelum upload
- Gunakan CDN untuk assets (sudah tersedia di kode)
- Monitor dengan Google PageSpeed Insights

---

## Troubleshooting

**Website tidak muncul:**
- Tunggu 2-3 menit setelah push
- Check GitHub Actions untuk error
- Verify branch settings di Pages

**Custom domain tidak bekerja:**
- Verify DNS records
- Tunggu propagasi DNS (24 jam)
- Test dengan nslookup di terminal

**HTTPS error:**
- Biasanya resolve otomatis dalam 24 jam
- Check GitHub Pages settings

---

## Next Steps

1. **Backend untuk Form Kontak** (Optional)
   - Gunakan Formspree atau Basin untuk email
   - Atau setup Node.js/Python backend

2. **Blog/News Management**
   - Pertimbangkan CMS seperti Strapi atau Headless CMS
   - Atau gunakan GitHub untuk manage konten

3. **Analytics**
   - Setup Google Analytics
   - Monitor traffic dan user behavior

4. **SEO Enhancement**
   - Submit sitemap ke Google Search Console
   - Setup robots.txt
   - Create structured data (schema.org)

---

**Pertanyaan?** Hubungi tim support atau cek dokumentasi GitHub Pages official.
