import express, {
  Application as ExpressApplication,
  Request,
  Response,
  json,
} from "express";
import config from "../Config/main";
import Database from "./database";
import { newHandler } from "../Handler/main";

class Http implements Application {
  private readonly e: ExpressApplication;
  private readonly database: Database;

  constructor() {
    this.e = express();
    this.database = new Database();
  }

  public start(): void {
    this.e.use(json());

    newHandler(this.e);

    this.e.all(
      "*",
      (_: Request, response: Response): Response =>
        response.status(404).json({
          status: false,
          message: "path not found",
        })
    );

    this.database.start();

    this.e.listen(config.app.port, () =>
      console.log(`server run on port ${config.app.port}`)
    );
  }
}

export default Http;
