# Jastip ID

Website Jastip ID siap deploy ke Vercel.

## Fitur
- Landing page: harga ongkir (5 rute), alamat pemesanan & format nama, alamat pengambilan, kartu CEO + link WhatsApp.
- Login admin (password via ENV) -> Dashboard Admin.
- Buat Nota: pilih rute, isi nama/jumlah/berat -> auto total (berat x harga/kg), cetak/salin/bagikan WA.

## Jalankan Lokal
```bash
npm install
cp .env.example .env.local
# edit ADMIN_PASSWORD
npm run dev
# buka http://localhost:3000
```

## Deploy ke Vercel
1. Push project ini ke repo GitHub kamu.
2. Vercel > Add New Project > pilih repo.
3. Project Settings > Environment Variables:
   - `ADMIN_PASSWORD` = password admin kamu
4. Deploy. Admin login di `/login`, dashboard di `/dashboard`.

## Kustomisasi
- Harga ongkir: `data/shipping.ts`
- CEO & nomor WA: `data/staff.ts` (format nomor: 62xxxxxxxxxx)
- Alamat & format nama: `data/addresses.ts`
- Warna brand: komponen & tombol sudah menggunakan `bg-green-600` dsb (Tailwind).
