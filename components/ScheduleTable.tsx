// components/ScheduleTable.tsx
"use client";

import { motion } from "framer-motion";
import { weeklySailings, weeklyClosing } from "@/data/schedule";

function formatTanggal(idDateISO: string) {
  const d = new Date(idDateISO + "T00:00:00");
  // contoh: "25 Okt 2025"
  const tgl = d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const hari = d.toLocaleDateString("id-ID", { weekday: "long" });
  return { tgl, hari };
}

export default function ScheduleTable() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Jadwal Kapal DLU */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="bg-white/80 backdrop-blur rounded-2xl shadow p-6 border border-green-100"
      >
        <h3 className="font-semibold mb-1">Jadwal Kapal</h3>
        <p className="text-sm text-gray-600 mb-4">
          {weeklySailings[0]?.operator} • {weeklySailings[0]?.route}
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2">Tanggal</th>
              <th className="py-2">Hari</th>
            </tr>
          </thead>
          <tbody>
            {weeklySailings.map((row) => {
              const { tgl, hari } = formatTanggal(row.dateISO);
              return (
                <tr key={row.id} className="border-t">
                  <td className="py-2">{tgl}</td>
                  <td className="py-2 capitalize">{hari}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-3 text-xs text-gray-500">
          *Perbarui <code>dateISO</code> di <code>data/schedule.ts</code> tiap minggu mengikuti jadwal DLU.
        </div>
      </motion.div>

      {/* Jadwal Closing Terima Paket */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="bg-white/80 backdrop-blur rounded-2xl shadow p-6 border border-green-100"
      >
        <h3 className="font-semibold mb-1">Jadwal Closing Terima Paket</h3>
        <p className="text-sm text-gray-600 mb-4">
          {weeklyClosing[0]?.operator} • {weeklyClosing[0]?.route}
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2">Tanggal</th>
              <th className="py-2">Hari</th>
            </tr>
          </thead>
          <tbody>
            {weeklyClosing.map((row) => {
              const { tgl, hari } = formatTanggal(row.dateISO);
              return (
                <tr key={row.id} className="border-t">
                  <td className="py-2">{tgl}</td>
                  <td className="py-2 capitalize">{hari}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-3 text-xs text-gray-500">
          *Sesuaikan tanggal closing sesuai kebijakan internal (mis. H-0). Hanya tampilkan tanggal & hari.
        </div>
      </motion.div>
    </div>
  );
}
