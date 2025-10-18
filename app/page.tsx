import { staff } from "@/data/staff";
import { shippingList } from "@/data/shipping";
import { orderAddress, orderFormats, pickupAddresses } from "@/data/addresses";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white rounded-2xl shadow p-6">{children}</div>;
}

export default function Home() {
  return (
    <div className="grid gap-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-2 text-green-700">Jastip ID</h1>
        <p className="text-gray-600">Harga ongkir per kg, kontak admin, alamat pemesanan & pengambilan</p>
      </section>

      <section className="grid gap-4">
        <h2 className="font-semibold text-lg">Harga Ongkir per Rute</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shippingList.map((s) => (
            <Card key={s.id}>
              <div className="text-sm text-gray-500">Rute</div>
              <div className="font-semibold">{s.label}</div>
              <div className="mt-2 text-2xl font-bold text-green-700">Rp {s.pricePerKg.toLocaleString("id-ID")}/kg</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
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
        </Card>
        <Card>
          <h2 className="font-semibold mb-2">Alamat Pengambilan</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            {pickupAddresses.map((p) => (
              <li key={p.route}>
                <span className="font-medium">{p.route}:</span> {p.details}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="grid gap-4">
        <h2 className="font-semibold text-lg">CEO & Kontak WA</h2>
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
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <a href="/login" className="inline-block px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white">
          Login Admin untuk Buat Nota
        </a>
      </section>
    </div>
  );
}
