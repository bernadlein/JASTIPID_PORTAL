"use client";

import { motion } from "framer-motion";

export default function AdminCard({
  name,
  role,
  phone,
  photo,
}: {
  name: string;
  role: string;
  phone: string;
  photo?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative rounded-2xl shadow overflow-hidden group border border-green-100"
    >
      <img
        src={photo || `https://i.pravatar.cc/600?u=${encodeURIComponent(name)}`}
        alt={name}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm text-white/80">{role}</div>
        <a
          href={`https://wa.me/${phone}`}
          className="inline-block mt-2 text-sm underline decoration-dotted"
          target="_blank"
        >
          WhatsApp
        </a>
      </div>
      <div className="absolute -inset-px rounded-2xl pointer-events-none ring-1 ring-green-500/10" />
    </motion.div>
  );
}
