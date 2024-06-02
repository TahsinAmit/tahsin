import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: "./models/survey.schema.ts",
  out: "./migrations/",
  dbCredentials: {url: "mysql://user:password@localhost:3306/db"},
  verbose: true,
  strict: true,
  dialect: "mysql",
})
