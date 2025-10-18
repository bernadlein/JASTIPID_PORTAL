"use client";

import { ArrowDownRight, FileText, MessageCircle } from "lucide-react";

export default function QuickActions({
  waNumbers,
  toLogin = false,
}: {
  waNumbers: string[];
  toLogin?: boolean; // jika true, tombol utama ke /login
}) {
  const firstWA = waNumbers[0];
  const primaryHref = toLogin ? "/login" : "#buat-nota";
  const primaryLabel = toLogin ? "Login Admin" : "Buat Nota";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={primaryHref}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white hover:bg-white/30"
      >
        <FileText size={18} /> {primaryLabel}
      </a>
      {firstWA && (
        <a
          href={`https://wa.me/${firstWA}`}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-green-700 border border-green-200"
        >
          <MessageCircle size={18} /> WhatsApp Admin
        </a>
      )}
      <a
        href="#rute-ongkir"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-700 border"
      >
        <ArrowDownRight size={18} /> Lihat Rute
      </a>
    </div>
  );
}
