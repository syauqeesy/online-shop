import { config as load } from "dotenv";

load();

type app = {
  port: number;
};

const config: app = {
  port: process.env.APPLICATION_PORT ? +process.env.APPLICATION_PORT : 5000,
};

export default config;
