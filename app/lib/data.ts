import { sql } from "@vercel/postgres";

export async function fetchTest() {
  try {
    const data = await sql`SELECT * FROM test;`;
    console.log("data-----", data);
    return data.rows;
  } catch (error: any) {
    console.error("Database Error", error);
    throw new Error(`Failed to fetch test data: ${error.message}`);
  }
}
