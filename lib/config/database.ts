import { Sequelize } from "sequelize";

const dbHost: string = "localhost";
const dbName: string = "eigen";
const dbUsername: string = "root";
const dbPassword: string = "";

export const db = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: "mysql",
});
