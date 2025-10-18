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
    role: "CEO",
    phone: "6285338391953", // ganti ke nomor asli
    photo: "/bernad.JPG",
  },
  {
    name: "Mega Lamawuran",
    role: "CEO",
    phone: "6282146791727",
    photo: "/mega.jpg",
  },
  {
    name: "Angelica Wulo",
    role: "CEO",
    phone: "6281239885871",
    photo: "/angelica.jpg",
  },
  {
    name: "Dio Pratama",
    role: "CEO",
    phone: "6282236042237",
    photo: "/dio.jpg",
  },
];
