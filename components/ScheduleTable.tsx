"use client";

import { motion } from "framer-motion";
import { cutoffSchedule, dispatchSchedule } from "@/data/schedule";

export default function ScheduleTable() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Pengiriman */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="bg-white/80 backdrop-blur rounded-2xl shadow p-6 border border-green-100"
      >
        <h3 className="font-semibold mb-3">Jadwal Pengiriman</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2">Rute</th>
              <th className="py-2">Hari</th>
              <th className="py-2">Jam</th>
            </tr>
          </thead>
          <tbody>
            {dispatchSchedule.map((row) => (
              <tr key={row.id} className="border-t">
                <td className="py-2">{row.route}</td>
                <td className="py-2">{row.days}</td>
                <td className="py-2">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Closing Terima Paket */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="bg-white/80 backdrop-blur rounded-2xl shadow p-6 border border-green-100"
      >
        <h3 className="font-semibold mb-3">Jadwal Closing Terima Paket</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2">Rute</th>
              <th className="py-2">Hari</th>
              <th className="py-2">Jam</th>
            </tr>
          </thead>
          <tbody>
            {cutoffSchedule.map((row) => (
              <tr key={row.id} className="border-t">
                <td className="py-2">{row.route}</td>
                <td className="py-2">{row.days}</td>
                <td className="py-2">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
