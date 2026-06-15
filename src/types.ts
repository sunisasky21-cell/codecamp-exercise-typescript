// TODO: Rename this file to types.ts
// TODO: Add type annotations to all variables
// TODO: Define interface User and interface Project

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  skills: string[];
  joinedAt: Date;
}

// TODO: Define a Status type alias: "planning" | "in-progress" | "completed" | "archived"
type Status = "planning" | "in-progress" | "completed" | "archived";

// TODO: Define interface Project { id, title, description, owner, status, tags, createdAt }
interface Project {
  id: number;
  title: string;
  description: string;
  owner: User;
  status: Status;
  tags: string[];
  createdAt: Date;
}

const userName: string = "Alice";
const userAge: number = 25;
const isActive: boolean = true;

const user: User = {
  id: 1,
  name: "Alice Johnson",
  email: "alice@example.com",
  role: "developer",
  skills: ["TypeScript", "React", "Node.js"],
  joinedAt: new Date("2026-01-15"),
};

const project: Project = {
  id: 1,
  title: "Portfolio Website",
  description: "A personal portfolio built with HTML, CSS, and JavaScript",
  owner: user,
  status: "in-progress",
  tags: ["frontend", "portfolio"],
  createdAt: new Date("2026-03-01"),
};

export { userName, userAge, isActive, user, project };