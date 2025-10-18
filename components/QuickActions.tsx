"use client";

import { ArrowDownRight, FileText, MessageCircle } from "lucide-react";

export default function QuickActions({ waNumbers }: { waNumbers: string[] }) {
  const firstWA = waNumbers[0];

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="#buat-nota"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white"
      >
        <FileText size={18} /> Buat Nota
      </a>
      {firstWA && (
        <a
          href={`https://wa.me/${firstWA}`}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-green-600 text-green-700 bg-white"
        >
          <MessageCircle size={18} /> WhatsApp Admin
        </a>
      )}
      <a
        href="#rute-ongkir"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border bg-white"
      >
        <ArrowDownRight size={18} /> Lihat Rute
      </a>
    </div>
  );
}
