import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { db } from "../config/database";

export class Cabang extends Model {
  public id!: number;
  public branch_name: string;
  public address: string;
  public city: string;
  public province: string;
  public postal_code: number;
  public country: string;
  public type: any; //this should be enum.
  public is_active: number;
  public phone: string;
  public web_address: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;
}

export interface CabangInterface {
  branch_name: string;
  address: string;
  city: string;
  province: string;
  postal_code: number;
  country: string;
  type: any;
  is_active: number;
  phone: string;
  web_address: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

// Initialize table
Cabang.init(
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
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("toko", "gudang"),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "cabang", // table name
    sequelize: db, // this bit is important
  }
);

Cabang.sync().then(() => console.log("Tabel cabang berhasil dibuat"));
