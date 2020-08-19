import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { db } from "../config/database";

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
      type: DataTypes.STRING(20),
      allowNull: true,
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
