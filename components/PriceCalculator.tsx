"use client";

import { useState } from "react";
import type { Shipping } from "@/data/shipping";
import { shippingList } from "@/data/shipping";

function formatIDR(n: number) {
  return n.toLocaleString("id-ID");
}

export default function PriceCalculator({ mainWA }: { mainWA: string }) {
  const [routeId, setRouteId] = useState(shippingList[0]?.id ?? "");
  const [weight, setWeight] = useState<number>(1);

  const selectedRoute = shippingList.find((s) => s.id === routeId);
  const subtotal = selectedRoute ? selectedRoute.pricePerKg * (weight || 0) : 0;

  const waText = selectedRoute
    ? `Halo kak, saya mau tanya ongkir dan kirim barang.\n\nRute: ${selectedRoute.label}\nBerat: ${weight} kg\nPerkiraan biaya: Rp ${formatIDR(
        subtotal
      )}\n\nMohon info cara lanjut order ya.`
    : "Halo kak, saya mau tanya jastip / kirim barang.";

  const waLink = `https://wa.me/${mainWA}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-green-100 p-6">
      <h2 className="text-lg font-semibold mb-1">Hitung Ongkir</h2>
      <p className="text-sm text-gray-600 mb-4">
        Pilih rute dan estimasi berat barang kamu.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <label className="grid gap-1 text-sm">
          <span>Rute</span>
          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
          >
            {shippingList.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label} — Rp {formatIDR(s.pricePerKg)}/kg
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 text-sm">
          <span>Berat (kg)</span>
          <input
            type="number"
            min={0.5}
            step={0.5}
            className="border rounded-lg px-3 py-2 text-sm"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
          />
        </label>
      </div>

      <div className="flex items-baseline justify-between mb-4">
        <span className="text-sm text-gray-600">Perkiraan biaya</span>
        <span className="text-xl font-semibold text-green-700">
          Rp {formatIDR(subtotal)}
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-3">
        * Belum termasuk biaya tambahan (jika ada). Estimasi untuk berat aktual
        setelah ditimbang di gudang.
      </p>

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-medium"
      >
        Konsultasi & Lanjut via WhatsApp
      </a>
    </div>
  );
}
