// data/schedule.ts
export type WeeklySailing = {
  id: string;
  route: string;     // contoh: "Surabaya → Maumere"
  operator: string;  // contoh: "Darma Lautan Utama"
  dateISO: string;   // "YYYY-MM-DD" → ganti tiap minggu sesuai jadwal kapal DLU
};

// GANTI dateISO ke tanggal keberangkatan berikutnya
export const weeklySailings: WeeklySailing[] = [
  {
    id: "dlu-maumere",
    route: "Surabaya → Maumere",
    operator: "Darma Lautan Utama",
    dateISO: "2025-11-21", // <-- UBAH SETIAP MINGGU
  },
];

// (opsional) jika ingin tampilkan "Closing Terima Paket" pakai tanggal yang sama atau Anda bisa bedakan
export const weeklyClosing: WeeklySailing[] = [
  {
    id: "closing-maumere",
    route: "Surabaya → Maumere",
    operator: "Darma Lautan Utama",
    dateISO: "2025-11-20", // <-- UBAH JUGA JIKA PERLU
  },
];
