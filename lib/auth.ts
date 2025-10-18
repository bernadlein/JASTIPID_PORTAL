import { cookies } from "next/headers";
import { expectedHash } from "./hash";

export function isAuthed() {
  const token = cookies().get("session")?.value;
  return token === expectedHash();
}
