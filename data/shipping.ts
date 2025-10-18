export type Shipping = {
  id: string;
  label: string; // e.g. "Surabaya → Ende"
  pricePerKg: number; // in IDR
};

export const shippingList: Shipping[] = [
  { id: "surabaya-ende", label: "Surabaya → Ende", pricePerKg: 8000 },
  { id: "surabaya-lembata", label: "Surabaya → Lembata", pricePerKg: 15000 },
  { id: "surabaya-adonara", label: "Surabaya → Adonara", pricePerKg: 15000 },
  { id: "surabaya-larantuka", label: "Surabaya → Larantuka", pricePerKg: 12500 },
  { id: "surabaya-maumere", label: "Surabaya → Maumere", pricePerKg: 10000 },
];
