import { Sequelize } from "sequelize";
import { config } from "../config/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const sequelize = new Sequelize(URI, {
  host: "postgres",
  dialect: "postgres",
  logging: console.log,
});
