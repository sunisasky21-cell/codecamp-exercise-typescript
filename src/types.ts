import { z } from "zod";

export const UserSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  email: z.string().email(),
  role: z.string().optional(),
  skills: z.array(z.string()).optional(),
  joinedAt: z.date().optional(),
  department: z.string(), // 👈 ใส่กลับเข้ามาตรงๆ ตามที่โจทย์ต้องการ
});

export const ProjectSchema = z.object({
  id: z.union([z.string(), z.number()]),
  title: z.string(),
  description: z.string(),
  owner: UserSchema,
  status: z.enum(["pending", "in-progress", "completed"]),
  tags: z.array(z.string()),
  createdAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;
export type Project = z.infer<typeof ProjectSchema>;

export const user: User = {
  id: 1,
  name: "Alice Johnson",
  email: "alice@example.com",
  role: "developer",
  skills: ["TypeScript", "React", "Node.js"],
  joinedAt: new Date("2026-01-15"),
  department: "Engineering", // 👈 ใส่แผนกให้ Alice Johnson ด้วยเพื่อให้ตรงกับ Schema
};

export const project: Project = {
  id: 1,
  title: "Portfolio Website",
  description: "A residential portfolio built with HTML, CSS, and JavaScript",
  owner: user,
  status: "in-progress",
  tags: ["frontend", "portfolio"],
  createdAt: new Date("2026-03-01"),
};