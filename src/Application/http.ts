import express, {
  Application as ExpressApplication,
  Request,
  Response,
  json,
} from "express";
import config from "../Config/main";
import Database from "./Database";
import { newHandler } from "../Handler/main";
import { newService, service } from "../Service/main";
import { newRepository, repository } from "../Database/Repository/main";

class Http implements Application {
  private readonly e: ExpressApplication;
  private readonly database: Database;
  private readonly repository: repository;
  private readonly service: service;

  constructor() {
    this.e = express();
    this.database = new Database();
    this.repository = newRepository(this.database.getDataSource());
    this.service = newService(this.repository);
  }

  public start(): void {
    this.e.use(json());

    newHandler(this.e, this.service);

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
