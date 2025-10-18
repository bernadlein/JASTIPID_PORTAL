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
  const printRef = useRef<HTMLDivElement>(null);

  const teksNota = useMemo(() => {
    return (
      `Nota Pengambilan Jastip\n` +
      `Tujuan: ${tujuan}\n` +
      `Nama: ${nama}\n` +
      `Jumlah Barang: ${jumlah}\n` +
      `Berat: ${berat} kg\n` +
      `Harga/kg: ${formatIDR(hargaPerKg)}\n` +
      `Total Ongkir: ${formatIDR(total)}`
    );
  }, [tujuan, nama, jumlah, berat, hargaPerKg, total]);

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
        <h2 className="text-lg font-semibold">Buat Nota</h2>
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
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white"
          >
            Cetak Nota
          </button>
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-xl border border-green-600 text-green-700"
          >
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

      {/* Print-only area */}
      <div id="print-area" className="hidden print:block">
        <div ref={printRef} className="p-8">
          <h1 className="text-2xl font-bold mb-4">Nota Pengambilan Jastip</h1>
          <div className="space-y-1">
            <p><strong>Tujuan:</strong> {tujuan}</p>
            <p><strong>Nama:</strong> {nama}</p>
            <p><strong>Jumlah Barang:</strong> {jumlah}</p>
            <p><strong>Berat:</strong> {berat} kg</p>
            <p><strong>Harga/kg:</strong> {formatIDR(hargaPerKg)}</p>
            <p className="text-xl mt-4"><strong>Total Ongkir:</strong> {formatIDR(total)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
