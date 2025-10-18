"use client";

import { useMemo, useRef, useState } from "react";
import { formatIDR } from "@/lib/utils";
import type { Shipping } from "@/data/shipping";

export default function NoteForm({
  shippingList,
  sharePhones,
}: {
  shippingList: Shipping[];
  sharePhones: string[];
}) {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState<number>(1);
  const [berat, setBerat] = useState<number>(0);
  const [shipId, setShipId] = useState<string>(shippingList[0]?.id || "");

  const selected = useMemo(
    () => shippingList.find((s) => s.id === shipId) || shippingList[0],
    [shipId, shippingList]
  );
  const hargaPerKg = selected?.pricePerKg || 0;
  const tujuan = selected?.label || "-";

  const total = useMemo(() => (berat || 0) * (hargaPerKg || 0), [berat, hargaPerKg]);

  // Nomor nota & tanggal untuk keperluan cetak
  const notaNo = useMemo(() => "JID-" + Date.now().toString().slice(-8), []);
  const today = useMemo(() => {
    const d = new Date();
    return d.toLocaleString("id-ID", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }, []);

  const printRef = useRef<HTMLDivElement>(null);

  const teksNota = useMemo(() => {
    return (
      `Nota Pengambilan Jastip\\n` +
      `No: ${notaNo}\\n` +
      `Tanggal: ${today}\\n` +
      `Tujuan: ${tujuan}\\n` +
      `Nama: ${nama}\\n` +
      `Jumlah Barang: ${jumlah}\\n` +
      `Berat: ${berat} kg\\n` +
      `Harga/kg: ${formatIDR(hargaPerKg)}\\n` +
      `Total Ongkir: ${formatIDR(total)}`
    );
  }, [notaNo, today, tujuan, nama, jumlah, berat, hargaPerKg, total]);

  function handlePrint() {
    if (!printRef.current) return;
    window.print();
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(teksNota);
    alert("Nota disalin ke clipboard.");
  }

  function handleShareWA(phone?: string) {
    const nomor = phone || sharePhones[0];
    if (!nomor) return alert("Nomor WA belum diset.");
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(teksNota)}`;
    window.open(url, "_blank");
  }

  return (
    <div id="buat-nota" className="grid gap-6">
      <div className="grid gap-4 bg-white p-6 rounded-2xl shadow">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Buat Nota</h2>
          <div className="text-sm text-gray-500">No: {notaNo}</div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="grid gap-1 text-sm">
            <span>Tujuan/Rute</span>
            <select
              className="border rounded-lg px-3 py-2"
              value={shipId}
              onChange={(e) => setShipId(e.target.value)}
            >
              {shippingList.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1 text-sm">
            <span>Harga per kg</span>
            <input
              className="border rounded-lg px-3 py-2 bg-gray-100"
              value={formatIDR(hargaPerKg)}
              readOnly
            />
          </label>

          <label className="grid gap-1 text-sm">
            <span>Nama</span>
            <input
              className="border rounded-lg px-3 py-2"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama pelanggan"
            />
          </label>

          <label className="grid gap-1 text-sm">
            <span>Jumlah Barang</span>
            <input
              type="number"
              min={1}
              className="border rounded-lg px-3 py-2"
              value={jumlah}
              onChange={(e) => setJumlah(parseInt(e.target.value || "0"))}
            />
          </label>

          <label className="grid gap-1 text-sm">
            <span>Berat (kg)</span>
            <input
              type="number"
              step="0.01"
              min={0}
              className="border rounded-lg px-3 py-2"
              value={berat}
              onChange={(e) => setBerat(parseFloat(e.target.value || "0"))}
            />
          </label>
        </div>

        <div className="text-right text-lg font-semibold">
          Total: <span>{formatIDR(total)}</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <button onClick={handlePrint} className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white">
            Cetak Nota
          </button>
          <button onClick={handleCopy} className="px-4 py-2 rounded-xl border border-green-600 text-green-700">
            Salin Nota
          </button>
          {sharePhones.map((p, i) => (
            <button
              key={p}
              onClick={() => handleShareWA(p)}
              className="px-4 py-2 rounded-xl border border-green-600 text-green-700"
              title={`Kirim ke WA ${p}`}
            >
              Bagikan WA {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Print Template (Profesional) ===== */}
      <div id="print-area" className="hidden print:block">
        <div ref={printRef} className="p-10 text-gray-900">
          {/* Header: Logo + identitas */}
          <div className="flex items-center gap-4 border-b pb-4">
            {/* Inline SVG Logo brand hijau */}
            <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#16a34a"/>
                  <stop offset="100%" stopColor="#22c55e"/>
                </linearGradient>
              </defs>
              <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#g)"/>
              <path d="M20 34l8 8 16-20" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <div className="text-2xl font-extrabold leading-tight">Jastip ID</div>
              <div className="text-sm text-gray-600">Jasa Titip & Ekspedisi – Surabaya</div>
            </div>
            <div className="ml-auto text-right">
              <div className="text-sm text-gray-500">No Nota</div>
              <div className="font-semibold">{notaNo}</div>
              <div className="text-sm text-gray-500">Tanggal</div>
              <div className="font-medium">{today}</div>
            </div>
          </div>

          {/* Detail tabel */}
          <div className="mt-6 border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium w-48">Tujuan / Rute</td>
                  <td className="p-3">{tujuan}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Nama Pemesan</td>
                  <td className="p-3">{nama || "-"}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium">Jumlah Barang</td>
                  <td className="p-3">{jumlah}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Berat</td>
                  <td className="p-3">{berat} kg</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium">Harga per kg</td>
                  <td className="p-3">{formatIDR(hargaPerKg)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Total Ongkir</td>
                  <td className="p-3 text-lg font-bold">{formatIDR(total)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer: tanda tangan */}
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <div className="text-sm text-gray-600">Diterima oleh,</div>
              <div className="h-16 border-b w-56 mt-12"></div>
              <div className="text-sm mt-2 text-gray-600">Nama & Tanda Tangan</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Hormat kami,</div>
              <div className="h-16 border-b w-56 ml-auto mt-12"></div>
              <div className="text-sm mt-2 text-gray-600">Jastip ID</div>
            </div>
          </div>

          {/* Catatan kecil */}
          <div className="mt-8 text-xs text-gray-500">
            *Simpan nota ini sebagai bukti pengambilan. Terima kasih telah menggunakan layanan Jastip ID.
          </div>
        </div>
      </div>
    </div>
  );
}
