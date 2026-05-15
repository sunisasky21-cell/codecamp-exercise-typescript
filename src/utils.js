// TODO: Rename this file to utils.ts
// TODO: Add parameter types and return types to all functions
// TODO: Use union types where appropriate

function formatName(first, last) {
  return `${first} ${last}`;
}

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

function getGreeting(name, timeOfDay) {
  if (timeOfDay === "morning") return `Good morning, ${name}!`;
  if (timeOfDay === "afternoon") return `Good afternoon, ${name}!`;
  return `Good evening, ${name}!`;
}

// TODO: Add type narrowing to this function
function formatValue(value) {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed(2);
  return String(value);
}

function findById(items, id) {
  return items.find((item) => item.id === id) || null;
}

export { formatName, calculateAge, getGreeting, formatValue, findById };
