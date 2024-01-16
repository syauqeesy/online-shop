import { config as load } from "dotenv";

load();

type database = {
  type: "mysql";
  host: string;
  port: number;
  username: string;
  password: string;
  name: string;
};

const config: database = {
  type: process.env.DATABASE_TYPE
    ? (process.env.DATABASE_TYPE as "mysql")
    : "mysql",
  host: process.env.DATABASE_HOST ? process.env.DATABASE_HOST : "127.0.0.1",
  port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 3306,
  username: process.env.DATABASE_USERNAME
    ? process.env.DATABASE_USERNAME
    : "root",
  password: process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : "",
  name: process.env.DATABASE_NAME ? process.env.DATABASE_NAME : "",
};

export default config;
