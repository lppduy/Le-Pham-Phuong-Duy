import { DataSource } from "typeorm";
import { Resource } from "../models/resource.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "crude_server",
    synchronize: true,
    logging: true,
    entities: [Resource],
    subscribers: [],
    migrations: [],
});