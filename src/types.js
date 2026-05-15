// TODO: Rename this file to types.ts
// TODO: Add type annotations to all variables
// TODO: Define interface User and interface Project

const userName = "Alice";
const userAge = 25;
const isActive = true;

const user = {
  id: 1,
  name: "Alice Johnson",
  email: "alice@example.com",
  role: "developer",
  skills: ["TypeScript", "React", "Node.js"],
  joinedAt: new Date("2026-01-15"),
};

const project = {
  id: 1,
  title: "Portfolio Website",
  description: "A personal portfolio built with HTML, CSS, and JavaScript",
  owner: user,
  status: "in-progress",
  tags: ["frontend", "portfolio"],
  createdAt: new Date("2026-03-01"),
};

// TODO: Define interface User { id, name, email, role, skills, joinedAt }
// TODO: Define interface Project { id, title, description, owner, status, tags, createdAt }
// TODO: Define a Status type alias: "planning" | "in-progress" | "completed" | "archived"

export { userName, userAge, isActive, user, project };
