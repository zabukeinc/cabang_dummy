"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cabang = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Cabang extends sequelize_1.Model {
}
exports.Cabang = Cabang;
// Initialize table
Cabang.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    branch_name: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    province: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    postal_code: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("toko", "gudang"),
        allowNull: false,
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: "cabang",
    sequelize: database_1.db,
});
Cabang.sync().then(() => console.log("Tabel cabang berhasil dibuat"));
//# sourceMappingURL=cabang.model.js.map