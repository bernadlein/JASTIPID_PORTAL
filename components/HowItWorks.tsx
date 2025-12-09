import { Package, Truck, Ship, MapPin } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Belanja / Titip Barang",
    desc: "Belanja di marketplace atau titip barang ke alamat gudang Surabaya kami.",
  },
  {
    icon: Truck,
    title: "Masuk Gudang Surabaya",
    desc: "Barang dicek, ditimbang, dan disimpan aman sampai jadwal kapal.",
  },
  {
    icon: Ship,
    title: "Kirim Ikut Jadwal Kapal",
    desc: "Barang dikirim via truk dan kapal menuju kota tujuan di Flores & sekitarnya.",
  },
  {
    icon: MapPin,
    title: "Barang Tiba & Siap Diambil",
    desc: "Ambil di titik jemput / janjian dengan admin untuk pengantaran lokal.",
  },
];

export default function HowItWorks() {
  return (
    <section className="grid gap-4">
      <h2 className="text-xl font-semibold">Cara Kerja Jastip & Gudang</h2>
      <p className="text-sm text-gray-600">
        Proses sederhana dari belanja online sampai barang tiba di Flores.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-white/80 backdrop-blur rounded-2xl border border-slate-100 p-4 flex flex-col gap-2"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-50 mb-1">
              <step.icon className="w-5 h-5 text-green-600" />
            </div>
            <div className="font-medium text-sm">{step.title}</div>
            <div className="text-xs text-gray-600">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
