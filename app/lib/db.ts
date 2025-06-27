import { sql } from '@vercel/postgres';

export const getTest = async () => {
  const result = await sql`SELECT NOW()`;
  return result.rows;
};
