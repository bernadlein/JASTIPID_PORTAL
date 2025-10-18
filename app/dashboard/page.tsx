import { isAuthed } from "@/lib/auth";
import { redirect } from "next/navigation";
import NoteForm from "@/components/NoteForm";
import { staff } from "@/data/staff";
import { shippingList } from "@/data/shipping";
import StatCard from "@/components/StatCard";
import AdminCard from "@/components/AdminCard";
import RouteCard from "@/components/RouteCard";
import QuickActions from "@/components/QuickActions";
import { Boxes, Users, Truck } from "lucide-react";

export default function DashboardPage() {
  if (!isAuthed()) redirect("/login?next=/dashboard");

  const sharePhones = staff.map((s) => s.phone);

  return (
    <div className="grid gap-10">
      {/* Hero */}
      <section className="grid gap-3">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Dashboard <span className="text-green-700">Jastip ID</span>
        </h1>
        <p className="text-gray-600">
          Kelola nota, pantau rute, dan akses kontak admin dalam satu tempat.
        </p>
        <QuickActions waNumbers={sharePhones} />
      </section>

      {/* Stats */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard icon={<Truck size={18} />} label="Rute aktif" value={`${shippingList.length} rute`} />
        <StatCard icon={<Users size={18} />} label="CEO terdaftar" value={`${staff.length} orang`} />
        <StatCard icon={<Boxes size={18} />} label="Harga/kg rata-rata"
          value={`Rp ${Math.round(
            shippingList.reduce((a, c) => a + c.pricePerKg, 0) / shippingList.length
          ).toLocaleString("id-ID")}`} />
      </section>

      {/* Rute ongkir */}
      <section className="grid gap-4" id="rute-ongkir">
        <h2 className="text-lg font-semibold">Rute & Ongkir</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shippingList.map((s) => (
            <RouteCard key={s.id} label={s.label} price={s.pricePerKg} />
          ))}
        </div>
      </section>

      {/* CEO */}
      <section className="grid gap-4">
        <h2 className="text-lg font-semibold">CEO</h2>
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

      {/* Form Nota */}
      <section className="grid gap-4">
        <h2 className="text-lg font-semibold">Buat Nota</h2>
        <NoteForm shippingList={shippingList} sharePhones={sharePhones} />
      </section>
    </div>
  );
}
