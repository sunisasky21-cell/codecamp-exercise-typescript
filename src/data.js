// TODO: Rename this file to data.ts
// TODO: Type the arrays and array method callbacks
// TODO: Use readonly arrays where data should not be mutated

const users = [
  { id: 1, name: "Alice", email: "alice@example.com", department: "Engineering" },
  { id: 2, name: "Bob", email: "bob@example.com", department: "Design" },
  { id: 3, name: "Carol", email: "carol@example.com", department: "Engineering" },
  { id: 4, name: "David", email: "david@example.com", department: "Product" },
];

// TODO: Type the return value of these functions

function getUserNames(users) {
  return users.map((u) => u.name);
}

function getEngineers(users) {
  return users.filter((u) => u.department === "Engineering");
}

function findUser(users, id) {
  return users.find((u) => u.id === id);
}

function countByDepartment(users) {
  return users.reduce((acc, user) => {
    acc[user.department] = (acc[user.department] || 0) + 1;
    return acc;
  }, {});
}

export { users, getUserNames, getEngineers, findUser, countByDepartment };
