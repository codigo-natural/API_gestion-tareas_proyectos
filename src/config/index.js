import dotenv from "dotenv"
dotenv.config()

export const config = {
  // config app
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  // config database postgresql
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
}