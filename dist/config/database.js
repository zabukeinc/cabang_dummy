"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const dbHost = "localhost";
const dbName = "eigen";
const dbUsername = "root";
const dbPassword = "";
exports.db = new sequelize_1.Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect: "mysql",
});
//# sourceMappingURL=database.js.map