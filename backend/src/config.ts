import dotenv from "dotenv";
import { IConfig } from "./interface/configuration";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { requireEnv } from "./utils/envDataHandler";

dotenv.config({ path: __dirname + "/../.env" });

const config: IConfig = {
  port: requireEnv("PORT"),
  jwt: {
    secret: requireEnv("JWT_SECRET"),
    accessExpiration: 5000,
    refreshTokenExpiration: 8000,
  },
  database: {
    name: requireEnv("DB_NAME"),
    type: "postgres",
    host: requireEnv("DB_HOST"),
    port: parseInt(requireEnv("DB_PORT")),
    username: requireEnv("DB_USERNAME"),
    password: requireEnv("DB_PASSWORD"),
    database: requireEnv("DB_DATABASE"),
    synchronize: false,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    namingStrategy: new SnakeNamingStrategy(),
  },
};

export default config;
