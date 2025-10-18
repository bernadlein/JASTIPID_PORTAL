import crypto from "crypto";

export function expectedHash() {
  const pwd = process.env.ADMIN_PASSWORD || "";
  return crypto.createHash("sha256").update(pwd).digest("hex");
}
