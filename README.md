# gbntr.com — Güç Birliği Networking

Vite + React + Tailwind ile yazılmış, build sırasında her sayfası statik HTML'e çevrilen site.

## Komutlar

```bash
npm install        # ilk kurulum
npm run dev        # geliştirme sunucusu (http://localhost:5173)
npm run build      # yayına hazır çıktı -> dist/
npm run preview    # dist/ klasörünü yerelde aç (http://localhost:4173)
```

## Nerede ne var

| Değiştirmek istediğin                          | Dosya                                |
| ---------------------------------------------- | ------------------------------------ |
| Tüm metinler (ana sayfa, hakkımızda, etkinlik) | `src/content.ts`                     |
| Sosyal medya linkleri                          | `src/content.ts` → `social`          |
| Sayfa başlıkları / SEO açıklamaları            | `src/routes.ts`                      |
| Üst menü / footer                              | `src/layouts/Header.tsx`, `Footer.tsx` |
| Sayfa yapıları                                 | `src/pages/*.tsx`                    |
| Renkler, fontlar                               | `src/styles/globals.css`             |
| Görseller, logolar, ikonlar                    | `public/`                            |

**Üyelik:** "Üye Ol" butonları şimdilik sayfa açmaz, "Üyelik başvuruları çok yakında
açılacak" mesajı gösterir (`src/components/MembershipButton.tsx`).

## Yayın

### GitHub Pages (şu anki)

`main` dalına her push'ta `.github/workflows/deploy.yml` siteyi derleyip yayınlar:
https://du0ks.github.io/gbn/

Alan adını GitHub Pages'e bağlamak istersen: `public/CNAME` dosyasına `gbntr.com` yaz ve
push'la (site otomatik olarak kök dizine göre derlenir), GoDaddy DNS'te `A` kayıtlarını
GitHub IP'lerine (185.199.108-111.153), `www` için `CNAME` kaydını `du0ks.github.io`'ya yönlendir.

### Kendi sunucun

```bash
npm ci && npm run build
```

Oluşan **`dist/`** klasörünün içeriğini web sunucusunun köküne koy. Nginx örneği:

```nginx
server {
    server_name gbntr.com www.gbntr.com;
    root /var/www/gbntr.com;
    location / { try_files $uri $uri/ =404; }
    error_page 404 /404.html;
}
```

## Not

`/iletisim` sayfası henüz yok; şimdilik "Bu sayfa henüz hazır değil" sayfasına düşer.
