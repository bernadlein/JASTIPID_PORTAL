export async function POST() {
  const res = new Response("OK", { status: 200 });
  res.headers.append(
    "Set-Cookie",
    `session=; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=0`
  );
  return res;
}
