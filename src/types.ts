import { z } from "zod";

// Zod Schema for Runtime Validation
export const UserSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  email: z.string().email(),
  role: z.string().optional(),
  skills: z.array(z.string()).optional(),
  joinedAt: z.date().optional(),
  department: z.string(),
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

// Module Objective: Define explicit Interfaces matching the schema
export interface User extends z.infer<typeof UserSchema> {}
export interface Project extends z.infer<typeof ProjectSchema> {}

// Mock Data
export const user: User = {
  id: 1,
  name: "Alice Johnson",
  email: "alice@example.com",
  role: "developer",
  skills: ["TypeScript", "React", "Node.js"],
  joinedAt: new Date("2026-01-15"),
  department: "Engineering",
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