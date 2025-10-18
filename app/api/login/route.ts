import { expectedHash } from "@/lib/hash";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    if (!password) return new Response(JSON.stringify({ error: "Password kosong" }), { status: 400 });

    if (password !== process.env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: "Password salah" }), { status: 401 });
    }

    const res = new Response(JSON.stringify({ ok: true }), { status: 200 });
    // Cookie session berisi hash dari ADMIN_PASSWORD
    res.headers.append(
      "Set-Cookie",
      `session=${expectedHash()}; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=${60 * 60 * 24 * 7}`
    );
    return res;
  } catch (e) {
    return new Response(JSON.stringify({ error: "Bad Request" }), { status: 400 });
  }
}
