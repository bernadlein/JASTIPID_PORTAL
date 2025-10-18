"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/dashboard";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.replace(next);
    } else {
      const j = await res.json().catch(() => ({}));
      setError(j?.error || "Login gagal");
    }
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow p-6">
      <h1 className="text-xl font-semibold mb-4">Login Admin</h1>
      <form onSubmit={onSubmit} className="grid gap-4">
        <input
          type="password"
          className="border rounded-lg px-3 py-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white">Masuk</button>
      </form>
    </div>
  );
}
