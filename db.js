import dotenv from "dotenv";
import pkg from 'pg';  // used for postgres
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function usersDB() {  // used to create users table if it doesn't exists
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
        user_id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(255) NOT NULL,
        password_hash VARCHAR(255) NOT NULL
      );
    `);
    console.log("users table created or already exists.");
  } catch (err) {
    console.error("Error creating users table:", err);
  }
}

async function booksDB() {  // used to create the books table if it doesn't exists
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        summary TEXT,
        isbn TEXT,
        created_at DATE DEFAULT CURRENT_DATE,
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
     );
    `);
    console.log("books table created or already exists.");
  } catch (err) {
    console.error("Error creating books table:", err);
  }
}

await usersDB();
await booksDB();

export default pool; // used to export pool
