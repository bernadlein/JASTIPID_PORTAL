import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jastip ID",
  description: "Jastip ID: harga ongkir multi-rute, kontak WA admin, alamat, dan admin nota",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-bold text-xl text-green-700">Jastip ID</a>
            <nav className="space-x-4 text-sm">
              <a href="/" className="hover:underline">Beranda</a>
              <a href="/login" className="hover:underline">Admin</a>
            </nav>
          </div>
          <div className="h-1 bg-green-600" />
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Jastip ID. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
