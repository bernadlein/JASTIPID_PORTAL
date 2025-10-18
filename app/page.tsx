"use client";

import { motion } from "framer-motion";
import { staff } from "@/data/staff";
import { shippingList } from "@/data/shipping";
import { orderAddress, orderFormats, pickupAddresses } from "@/data/addresses";
import QuickActions from "@/components/QuickActions";
import AdminCard from "@/components/AdminCard";
import RouteCard from "@/components/RouteCard";
import ScheduleTable from "@/components/ScheduleTable";

export default function Home() {
  const waNumbers = staff.map((s) => s.phone);

  return (
    <div className="grid gap-12">
      {/* HERO dengan banner */}
      <section className="relative overflow-hidden rounded-3xl border border-green-100">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/banner.jpg')" }} /* ganti file sesuai asetmu */
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/90 to-emerald-500/80" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 p-8 md:p-12 text-white"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Jastip ID</h1>
          <p className="mt-3 md:mt-4 text-white/90 max-w-2xl">
            Kirim & titip barang antarpulau makin gampang. Cek ongkir, kontak admin, alamat pemesanan hingga
            titik pengambilan — semua di satu tempat.
          </p>
          <div className="mt-6">
            {/* TANPA form nota di landing, tombol utama = Login Admin */}
            <QuickActions waNumbers={waNumbers} toLogin />
          </div>
        </motion.div>

        {/* Ornamen blur */}
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
      </section>

      {/* RUTE & ONGKIR */}
      <section className="grid gap-4" id="rute-ongkir">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="text-lg font-semibold"
        >
          Rute & Ongkir
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shippingList.map((s) => (
            <RouteCard key={s.id} label={s.label} price={s.pricePerKg} />
          ))}
        </div>
      </section>

      {/* JADWAL PENGIRIMAN & CUTOFF */}
      <section className="grid gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="text-lg font-semibold"
        >
          Jadwal Pengiriman & Closing Terima Paket
        </motion.h2>
        <ScheduleTable />
      </section>

      {/* ALAMAT PEMESANAN & PENGAMBILAN */}
      <section className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="bg-white/80 backdrop-blur rounded-2xl shadow p-6 border border-green-100"
        >
          <h2 className="font-semibold mb-2">Alamat Pemesanan (Marketplace → Surabaya)</h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">{orderAddress}</pre>
          <div className="mt-4">
            <div className="font-semibold mb-2">Format Nama Pengiriman</div>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              {orderFormats.map((f) => (
                <li key={f.route}>
                  <span className="font-medium">{f.route}:</span> {f.format}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="bg-white/80 backdrop-blur rounded-2xl shadow p-6 border border-green-100"
        >
          <h2 className="font-semibold mb-2">Alamat Pengambilan</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            {pickupAddresses.map((p) => (
              <li key={p.route}>
                <span className="font-medium">{p.route}:</span> {p.details}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CEO */}
      <section className="grid gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="text-lg font-semibold"
        >
          CEO & Kontak WA
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {staff.map((s) => (
            <AdminCard
              key={s.phone}
              name={s.name}
              role={s.role}
              phone={s.phone}
              photo={s.photo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
