// TODO: Rename this file to data.ts
// TODO: Type the arrays and array method callbacks
// TODO: Use readonly arrays where data should not be mutated

interface User {
  id: number;
  name: string;
  email: string;
  department: string;
}

const users: ReadonlyArray<User> = [
  { id: 1, name: "Alice", email: "alice@example.com", department: "Engineering" },
  { id: 2, name: "Bob", email: "bob@example.com", department: "Design" },
  { id: 3, name: "Carol", email: "carol@example.com", department: "Engineering" },
  { id: 4, name: "David", email: "david@example.com", department: "Product" },
];

// TODO: Type the return value of these functions

function getUserNames(users: ReadonlyArray<User>): string[] {
  return users.map((u: User): string => u.name);
}

function getEngineers(users: ReadonlyArray<User>): User[] {
  return users.filter((u: User): boolean => u.department === "Engineering");
}

function findUser(users: ReadonlyArray<User>, id: number): User | undefined {
  return users.find((u: User): boolean => u.id === id);
}

function countByDepartment(users: ReadonlyArray<User>): Record<string, number> {
  return users.reduce((acc: Record<string, number>, user: User) => {
    acc[user.department] = (acc[user.department] || 0) + 1;
    return acc;
  }, {});
}

export { users, getUserNames, getEngineers, findUser, countByDepartment };