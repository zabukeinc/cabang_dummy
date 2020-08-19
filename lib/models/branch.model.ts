import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { db } from "../config/database";
import { ValidationErrorItem } from "sequelize";
import { ValidationError } from "sequelize";

export class Branch extends Model {
  public id!: number;
  public branch_name: string;
  public address: string;
  public city: string;
  public province: string;
  public postal_code: number;
  public country: string;
  public is_active: number;
  public phone: string;
  public web_address: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

export interface BranchInterface {
  branch_name: string;
  address: string;
  city: string;
  province: string;
  postal_code: number;
  country: string;
  is_active: number;
  phone: string;
  web_address: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

// Initialize table
Branch.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    branch_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Field branch name cannot be empty.",
        },
        isAlphanumeric: {
          msg: "Branch name contains blocked character.",
        },
        isUnique(value) {
          return Branch.findOne({ where: { branch_name: value } }).then(
            (branch_name) => {
              if (branch_name) {
                throw new Error("Branch name already exist");
              }
            }
          );
        },
      },
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(20) || DataTypes.NUMBER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(30),
      validate: {
        validateEmail(value: string) {
          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            throw new Error("Email input must be an email!");
          }
        },
      },
    },
    web_address: {
      type: DataTypes.STRING(40),
      validate: {
        isUrl: {
          msg: "Insert web url correctly. (http://x.x)",
        },
      },
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "branch", // table name
    sequelize: db, // this bit is important
  }
);

Branch.sync().then(() => console.log("Table successfully added."));
