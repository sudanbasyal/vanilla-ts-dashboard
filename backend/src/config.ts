import dotenv from "dotenv";
import { IConfig } from "./interface/configuration";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

dotenv.config({ path: __dirname + "/../.env" });

const port = process.env.PORT;

const config: IConfig = {
  port: process.env.PORT,

  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpiration: 5000,
    refreshTokenExpiration: 8000,
  },

  database: {
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "Swift-Sewa",
    synchronize: false,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    namingStrategy: new SnakeNamingStrategy(),
  },
};

export default config;
