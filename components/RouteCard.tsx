"use client";

import { motion } from "framer-motion";

export default function RouteCard({ label, price }: { label: string; price: number }) {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow p-6 border border-green-100"
    >
      <div className="text-sm text-gray-500">Rute</div>
      <div className="font-semibold">{label}</div>
      <div className="mt-2 text-2xl font-bold text-green-700">
        Rp {price.toLocaleString("id-ID")}/kg
      </div>
    </motion.div>
  );
}
