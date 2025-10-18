"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export default function StatCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      className="bg-white rounded-2xl shadow p-5 border border-green-100"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-green-50 text-green-700 grid place-items-center">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-xl font-semibold">{value}</div>
        </div>
      </div>
    </motion.div>
  );
}
