import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";



const connectionPromise = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.user || "user",
  password: process.env.password || 'password',
  database: process.env.database || "db",
});
export const dbPromise = async ()=>{
  const connection = await connectionPromise
  return {
    db: drizzle(connection),
    connection
  }
}
