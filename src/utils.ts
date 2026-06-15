export function formatName(first: string, last: string): string {
  return `${first} ${last}`;
}

export function calculateAge(birthYear: number): number {
  return new Date().getFullYear() - birthYear;
}

export function getGreeting(
  name: string,
  timeOfDay: "morning" | "afternoon" | "evening"
): string {
  if (timeOfDay === "morning") return `Good morning, ${name}!`;
  if (timeOfDay === "afternoon") return `Good afternoon, ${name}!`;
  return `Good evening, ${name}!`;
}

export function formatValue(value: unknown): string {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed(2);
  return String(value);
}

interface Identifiable {
  id: string | number;
}

export function findById<T extends Identifiable>(
  items: T[],
  id: string | number
): T | null {
  return items.find((item) => item.id === id) || null;
}