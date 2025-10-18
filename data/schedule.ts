export type ScheduleRow = {
  id: string;
  route: string;
  days: string; // contoh: "Senin, Rabu, Jumat"
  time: string; // contoh: "10:00"
};

export const dispatchSchedule: ScheduleRow[] = [
  { id: "ende", route: "Surabaya → Ende", days: "Senin, Rabu, Jumat", time: "10:00" },
  { id: "lembata", route: "Surabaya → Lembata", days: "Selasa, Kamis, Sabtu", time: "10:00" },
  { id: "adonara", route: "Surabaya → Adonara", days: "Selasa, Kamis, Sabtu", time: "10:00" },
  { id: "larantuka", route: "Surabaya → Larantuka", days: "Senin & Kamis", time: "11:00" },
  { id: "maumere", route: "Surabaya → Maumere", days: "Rabu & Sabtu", time: "11:00" },
];

export const cutoffSchedule: ScheduleRow[] = [
  { id: "ende", route: "Surabaya → Ende", days: "H-0 (hari keberangkatan)", time: "17:00" },
  { id: "lembata", route: "Surabaya → Lembata", days: "H-0", time: "17:00" },
  { id: "adonara", route: "Surabaya → Adonara", days: "H-0", time: "17:00" },
  { id: "larantuka", route: "Surabaya → Larantuka", days: "H-0", time: "16:00" },
  { id: "maumere", route: "Surabaya → Maumere", days: "H-0", time: "16:00" },
];
