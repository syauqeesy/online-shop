import { DataSource } from "typeorm";
import config from "../Config/main";

class Database {
  private readonly dataSource: DataSource;

  constructor() {
    const option = {
      type: config.database.type,
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.name,
      entities: ["./dist/Database/Entity/*.js"],
      migrations: ["./dist/Database/Migration/*.js"],
      migrationsTableName: "migrations",
    };

    this.dataSource = new DataSource(option);
  }

  public connect(): void {
    this.dataSource
      .initialize()
      .then(() => {
        console.log("database connected");
      })
      .catch(() => {
        console.error("connect to database failed");
      });
  }

  public disconnect(): void {
    this.dataSource
      .destroy()
      .then(() => {
        console.log("database disconnected");
      })
      .catch(() => {
        console.error("failed to disconnect from database");
      });
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }
}

export default Database;
