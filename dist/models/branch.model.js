"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Branch extends sequelize_1.Model {
}
exports.Branch = Branch;
// Initialize table
Branch.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    branch_name: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field branch name cannot be empty.",
            },
            isAlphanumeric: {
                msg: "Branch name contains blocked character.",
            },
            isUnique(value) {
                return Branch.findOne({ where: { branch_name: value } }).then((branch_name) => {
                    if (branch_name) {
                        throw new Error("Branch name already exist");
                    }
                });
            },
        },
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    city: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    province: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    postal_code: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    country: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(20) || sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(30),
        validate: {
            validateEmail(value) {
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    throw new Error("Email input must be an email!");
                }
            },
        },
    },
    web_address: {
        type: sequelize_1.DataTypes.STRING(40),
        validate: {
            isUrl: {
                msg: "Insert web url correctly. (http://x.x)",
            },
        },
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: "branch",
    sequelize: database_1.db,
});
Branch.sync().then(() => console.log("Table successfully added."));
//# sourceMappingURL=branch.model.js.map