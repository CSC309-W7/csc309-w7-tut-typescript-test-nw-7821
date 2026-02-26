import type { User } from "./types";

export const apiResponse: User[] = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: 24 }, 
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  // return apiResponse as User[]; // intentionally unsafe
  for (const user of apiResponse) {
    if (typeof(user.name) != "string") {
        user.name = String(user.name)
    }

    if (typeof user.age !== "number") {
        user.age = Number(user.age)
    }

  }

  return apiResponse as User[];
  
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}
