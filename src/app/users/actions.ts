// import { db } from "@/database/connection";
// import { users } from "@/database/models";

export async function createUser(formData: FormData) {
  return Object.fromEntries(formData);
  // const result = await db.insert(users).values({
  //   email: 'test@'
  // })
}
