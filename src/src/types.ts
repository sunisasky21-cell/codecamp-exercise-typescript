import { z } from "zod";

// 1. กำหนด Zod Schema สำหรับตรวจสอบข้อมูลตอน Runtime
export const UserSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  email: z.string().email(),
  role: z.string().optional(),
  skills: z.array(z.string()).optional(),
  joinedAt: z.date().optional(),
});

export const ProjectSchema = z.object({
  id: z.union([z.string(), z.number()]),
  title: z.string(),
  description: z.string(),
  owner: UserSchema, // ใช้ UserSchema ตรวจสอบเจ้าของโปรเจกต์ (แก้ปัญหา Mismatch)
  status: z.enum(["pending", "in-progress", "completed"]),
  tags: z.array(z.string()),
  createdAt: z.date(),
});

// 2. สกัด Type ออกมาจาก Schema เพื่อใช้ในระบบ TypeScript (Compile time)
export type User = z.infer<typeof UserSchema>;
export type Project = z.infer<typeof ProjectSchema>;

// --- ข้อมูลดิบสำหรับส่งออก (เก็บบทเรียนเดิมไว้ครบถ้วน) ---
export const user: User = {
  id: 1,
  name: "Alice Johnson",
  email: "alice@example.com",
  role: "developer",
  skills: ["TypeScript", "React", "Node.js"],
  joinedAt: new Date("2026-01-15"),
};

export const project: Project = {
  id: 1,
  title: "Portfolio Website",
  description: "A residential portfolio built with HTML, CSS, and JavaScript",
  owner: user, // จิ้มไปที่ตัวแปร user ด้านบนตรงๆ ข้อมูล Type จะตรงกันเป๊ะ
  status: "in-progress",
  tags: ["frontend", "portfolio"],
  createdAt: new Date("2026-03-01"),
};