# Resim Optimizasyonu Rehberi

Projenizdeki büyük resim dosyalarını optimize etmek için aşağıdaki adımları izleyebilirsiniz:

## Büyük Resim Dosyaları

Projede şu anda aşağıdaki büyük resim dosyaları bulunmaktadır:

- `car-showcase.png` (578 KB)
- `fashion-commerce.png` (791 KB)
- `food-ordering.png` (1.8 MB)

## Optimizasyon Yöntemleri

### 1. WebP Formatına Dönüştürme

WebP formatı, PNG ve JPEG formatlarına göre daha küçük dosya boyutları sağlar. Aşağıdaki araçları kullanabilirsiniz:

- [Squoosh](https://squoosh.app/) - Tarayıcı üzerinden resim optimizasyonu
- [WebP Converter](https://cloudconvert.com/png-to-webp) - PNG'den WebP'ye dönüştürme

### 2. Resimleri Yeniden Boyutlandırma

Eğer resimler gereğinden büyükse, boyutlarını küçültebilirsiniz:

```bash
# ImageMagick kullanarak
magick convert input.png -resize 800x600 output.png
```

### 3. Resim Sıkıştırma

PNG dosyalarını sıkıştırmak için:

```bash
# pngquant kullanarak
pngquant --quality=65-80 input.png -o output.png
```

### 4. Next.js Image Optimizasyonu

Next.js'in built-in Image bileşenini kullanarak resimleri otomatik olarak optimize edebilirsiniz:

```jsx
import Image from "next/image";

// Örnek kullanım
<Image
  src="/projects-img/car-showcase.png"
  width={800}
  height={600}
  alt="Car Showcase Project"
  quality={75}
/>;
```

## Önerilen İş Akışı

1. Resimleri WebP formatına dönüştürün
2. Gerekirse boyutlarını küçültün
3. Optimize edilmiş resimleri `public/projects-img/optimized/` klasörüne kaydedin
4. Kodunuzda optimized versiyonları kullanın

## Araçlar

- [ImageMagick](https://imagemagick.org/index.php) - Komut satırı resim işleme
- [TinyPNG](https://tinypng.com/) - PNG ve JPEG sıkıştırma
- [Squoosh](https://squoosh.app/) - Tarayıcı tabanlı resim optimizasyonu
