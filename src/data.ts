import { User, UserSchema } from "./types";

export const users: ReadonlyArray<User> = [
  { id: 1, name: "Alice", email: "alice@example.com", department: "Engineering" },
  { id: 2, name: "Bob", email: "bob@example.com", department: "Design" },
  { id: 3, name: "Carol", email: "carol@example.com", department: "Engineering" },
  { id: 4, name: "David", email: "david@example.com", department: "Product" },
];

export function validateUserRuntime(data: unknown): User {
  return UserSchema.parse(data);
}

export function getUserNames(users: ReadonlyArray<User>): string[] {
  return users.map((u) => u.name);
}

// Fixed: Return ReadonlyArray to match functional immutability expectations
export function getEngineers(users: ReadonlyArray<User>): ReadonlyArray<User> {
  return users.filter((u) => u.department === "Engineering");
}

export function findUser(users: ReadonlyArray<User>, id: number): User | undefined {
  return users.find((u) => Number(u.id) === id);
}

// Fixed: Resolved reduce initial value and typing issues strictly
export function countByDepartment(users: ReadonlyArray<User>): Record<string, number> {
  return users.reduce<Record<string, number>>((acc, currUser) => {
    const dept = currUser.department;
    acc[dept] = (acc[dept] || 0) + 1;
    return acc;
  }, {});
}