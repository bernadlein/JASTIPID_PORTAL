// data/staff.ts
export type Staff = {
  name: string;
  role: string;
  phone: string; // 62xxxx tanpa +
  photo?: string; // path di /public
};

export const staff: Staff[] = [
  {
    name: "Bernad",
    role: "Founder & Head of Operations Surabaya",
    phone: "6285338391953", // ganti ke nomor asli
    photo: "/Bernad.jpg",
  },
  {
    name: "Mega Lamawuran",
    role: "Co-Founder & Head of Operations Flores",
    phone: "6282146791727",
    photo: "/mega.jpg",
  },
  {
    name: "Angelica Wulo",
    role: "Area Coordinator Lembata",
    phone: "6281239885871",
    photo: "/angelica.jpg",
  },
  {
    name: "Dio Pratama",
    role: "Area Coordinator Adonara",
    phone: "6282236042237",
    photo: "/dio.jpg",
  },
];
