"use server";

import { sql } from "@vercel/postgres";

export async function createTestUser(formData: any) {
  console.log("data---", formData.get("first_name"));
  try {
    await sql`INSERT INTO test (first_name, last_name) VALUES (${formData.get("first_name")}, ${formData.get("last_name")});`;
  } catch (error: any) {
    console.error("Database Error", error);
    throw new Error(`Failed to create new user: ${error.message}`);
  }
}
