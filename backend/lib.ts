import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const isDev = process.env.BUILD !== 'production'


const connectionPromise = mysql.createConnection({
  host: isDev ? "localhost": "TBD",
  user: "user",
  password: 'password',
  database: "db",
});
export const dbPromise = async ()=>{
  const connection = await connectionPromise
  return {
    db: drizzle(connection),
    connection
  }
}
