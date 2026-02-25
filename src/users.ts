import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  // return apiResponse as User[]; // intentionally unsafe
  for user in apiResponse {
    if (typeof user.name !== string) {
        user.name = String(user.name)
    }

    if (typeof user.age !== number) {
        user.age = Number(user.age)
    }

  }

  return apiResponse as User[];
  
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}
