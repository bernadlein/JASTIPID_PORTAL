import { isAuthed } from "@/lib/auth";
import { redirect } from "next/navigation";
import NoteForm from "@/components/NoteForm";
import { staff } from "@/data/staff";
import { shippingList } from "@/data/shipping";

export default function DashboardPage() {
  if (!isAuthed()) redirect("/login?next=/dashboard");

  const sharePhones = staff.map((s) => s.phone);

  return (
    <div className="grid gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <form action="/api/logout" method="post">
          <button className="px-3 py-2 rounded-xl border border-green-600 text-green-700">Logout</button>
        </form>
      </div>

      {/* Kartu admin gaya movie */}
      <section className="grid gap-4">
        <h2 className="font-semibold text-lg">CEO</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {staff.map((s) => (
            <div key={s.phone} className="relative rounded-2xl shadow overflow-hidden group">
              <img
                src={s.photo || `https://i.pravatar.cc/600?u=${encodeURIComponent(s.name)}`}
                alt={s.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="font-semibold text-lg">{s.name}</div>
                <div className="text-sm text-white/80">{s.role}</div>
                <a
                  href={`https://wa.me/${s.phone}`}
                  className="inline-block mt-2 text-sm underline decoration-dotted"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NoteForm shippingList={shippingList} sharePhones={sharePhones} />
    </div>
  );
}
