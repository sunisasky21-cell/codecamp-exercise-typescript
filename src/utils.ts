// TODO: Rename this file to utils.ts
// TODO: Add parameter types and return types to all functions
// TODO: Use union types where appropriate

function formatName(first: string, last: string): string {
  return `${first} ${last}`;
}

function calculateAge(birthYear: number): number {
  return new Date().getFullYear() - birthYear;
}

function getGreeting(name: string, timeOfDay: "morning" | "afternoon" | "evening"): string {
  if (timeOfDay === "morning") return `Good morning, ${name}!`;
  if (timeOfDay === "afternoon") return `Good afternoon, ${name}!`;
  return `Good evening, ${name}!`;
}

// TODO: Add type narrowing to this function
function formatValue(value: unknown): string {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed(2);
  return String(value);
}

interface Identifiable {
  id: string | number;
}

function findById<T extends Identifiable>(items: T[], id: string | number): T | null {
  return items.find((item: T): boolean => item.id === id) || null;
}

export { formatName, calculateAge, getGreeting, formatValue, findById };

// === โค้ดสำหรับทดสอบรันดูผลลัพธ์ล่างสุด ===
const testAge = calculateAge(2000);
console.log("--- ผลลัพธ์จากการรัน TypeScript ---");
console.log("อายุปัจจุบันคือ:", testAge);
console.log("จัดฟอร์แมตตัวเลข:", formatValue(99.999));