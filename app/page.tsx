"use client";

import { motion } from "framer-motion";
import { staff } from "@/data/staff";
import { orderAddress, orderFormats, pickupAddresses } from "@/data/addresses";
import QuickActions from "@/components/QuickActions";
import PriceCalculator from "@/components/PriceCalculator";
import HowItWorks from "@/components/HowItWorks";
import RouteCard from "@/components/RouteCard";
import ScheduleTable from "@/components/ScheduleTable";
import AdminCard from "@/components/AdminCard";
import { shippingList } from "@/data/shipping";

export default function Home() {
  const waNumbers = staff.map((s) => s.phone);
  const mainWA = waNumbers[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      {/* HERO */}
      <section className="grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
            Jastip Marketplace & Gudang Surabaya → Flores
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Kirim & Titip Barang dari{" "}
            <span className="text-green-600">Surabaya ke Flores</span> lebih
            mudah & terjadwal.
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-xl">
            Kami bantu terima barang belanjaan marketplace di gudang Surabaya,
            simpan dengan aman, lalu kirim ikut jadwal kapal Darma Lautan Utama
            ke Flores dan sekitarnya.
          </p>

          <QuickActions waNumbers={waNumbers} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <PriceCalculator mainWA={mainWA} />
        </motion.div>
      </section>

      {/* CARA KERJA */}
      <HowItWorks />

      {/* RUTE & ONGKIR */}
      <section id="rute-ongkir" className="grid gap-4">
        <h2 className="text-xl font-semibold">Rute & Ongkir</h2>
        <p className="text-sm text-gray-600">
          Saat ini pengiriman tersedia dari Surabaya ke beberapa kota di Flores
          dan sekitarnya.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {shippingList.map((s) => (
            <RouteCard key={s.id} label={s.label} price={s.pricePerKg} />
          ))}
        </div>
      </section>

      {/* JADWAL KAPAL */}
      <section id="jadwal-kapal" className="grid gap-4">
        <h2 className="text-xl font-semibold">Jadwal Kapal & Cut-off Barang</h2>
        <p className="text-sm text-gray-600">
          Jadwal bisa berubah mengikuti info terbaru dari pihak pelayaran. Selalu
          konfirmasi ke admin sebelum kirim barang ke gudang.
        </p>
        <ScheduleTable />
      </section>

      {/* ALAMAT GUDANG & FORMAT NAMA */}
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur rounded-2xl border border-green-100 p-6">
          <h2 className="font-semibold mb-2">
            Alamat Gudang Surabaya (Penerima Marketplace)
          </h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {orderAddress}
          </pre>

          <div className="mt-4">
            <div className="font-semibold mb-2 text-sm">
              Format Nama Penerima di Marketplace
            </div>
            <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
              {orderFormats.map((f) => (
                <li key={f.route}>
                  <span className="font-medium">{f.route}:</span> {f.format}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-2xl border border-green-100 p-6">
          <h2 className="font-semibold mb-2">Alamat Pengambilan di Tujuan</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            {pickupAddresses.map((p) => (
              <li key={p.route}>
                <span className="font-medium">{p.route}:</span> {p.details}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIM ADMIN */}
      <section id="kontak" className="grid gap-4">
        <h2 className="text-xl font-semibold">Admin & Kontak Wilayah</h2>
        <p className="text-sm text-gray-600">
          Hubungi admin yang paling dekat dengan kota tujuan kamu.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
