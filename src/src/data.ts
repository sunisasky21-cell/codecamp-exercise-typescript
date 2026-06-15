import { User, UserSchema } from "./types";

// ใช้ ReadonlyArray ตามโจทย์เดิม
export const users: ReadonlyArray<User> = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Carol", email: "carol@example.com"},
  { id: 4, name: "David", email: "david@example.com"},
];

// 🚀 เพิ่มระบบ Zod Runtime Validation ตามที่โมดูลบังคับ
export function validateUserRuntime(data: unknown): User {
  // .parse จะทำการตรวจสอบข้อมูลจริงตอนรันระบบ ถ้าข้อมูลผิดพลาดจะโยน Error ออกมาทันที
  return UserSchema.parse(data);
}

// --- ฟังก์ชันจัดการข้อมูลเดิม (เก็บบทเรียนเดิมไว้ครบถ้วนและสะอาดขึ้น) ---
export function getUserNames(users: ReadonlyArray<User>): string[] {
  return users.map((u) => u.name);
}

export function getEngineers(users: ReadonlyArray<User>): User[] {
  // สังเกตจากรูปเดิม มีการเช็คฟิลด์ department ซึ่งเป็นฟิลด์พิเศษ 
  // ในที่นี้เราหลบ Type ด้วยการตรวจสอบค่าสตริงเพื่อป้องกันเออเรอร์
  return users.filter((u) => (u as any).department === "Engineering");
}

export function findUser(users: ReadonlyArray<User>, id: number): User | undefined {
  return users.find((u) => Number(u.id) === id);
}

export function countByDepartment(users: ReadonlyArray<User>): Record<string, number> {
  return users.reduce((acc: Record<string, number>, user: User) => {
    const dept = (user as any).department || "Unknown";
    acc[dept] = (acc[dept] || 0) + 1;
    return acc;
  }, {});
}