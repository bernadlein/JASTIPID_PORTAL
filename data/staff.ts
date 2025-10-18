export type Staff = {
  name: string;
  role: string;
  phone: string; // 62xxxx tanpa +
  photo?: string; // optional URL atau path di /public
};

export const staff: Staff[] = [
  {
    name: "Bernad",
    role: "CEO",
    phone: "6281111111111",
    photo: "https://i.pravatar.cc/600?u=bernad",
  },
  {
    name: "Mega Lamawuran",
    role: "CEO",
    phone: "6282222222222",
    photo: "https://i.pravatar.cc/600?u=mega-lamawuran",
  },
  {
    name: "Angelica Wulo",
    role: "CEO",
    phone: "6283333333333",
    photo: "https://i.pravatar.cc/600?u=angelica-wulo",
  },
  {
    name: "Dio Pratama",
    role: "CEO",
    phone: "6284444444444",
    photo: "https://i.pravatar.cc/600?u=dio-pratama",
  },
];
