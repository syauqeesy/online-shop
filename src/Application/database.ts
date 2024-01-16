import { DataSource } from "typeorm";
import config from "../Config/main";

class Database implements Application {
  private readonly dataSource: DataSource;

  constructor() {
    const option = {
      type: config.database.type,
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      name: config.database.name,
    };

    this.dataSource = new DataSource(option);
  }

  public start(): void {
    this.dataSource
      .initialize()
      .then(() => {
        console.log("database connected");
      })
      .catch(() => {
        console.error("connect to database failed");
      });
  }

  public stop(): void {
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
