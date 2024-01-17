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
import { writeFailResponse } from "../Helper/response";
import { HttpException } from "../Exception/main";

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
    this.database.start();

    this.e.use(json());

    newHandler(this.e, this.service);

    this.e.all(
      "*",
      (_: Request, response: Response): Response =>
        writeFailResponse(
          response,
          new HttpException("path not found", 404, null)
        )
    );

    this.e.listen(config.app.port, () =>
      console.log(`server run on port ${config.app.port}`)
    );
  }
}

export default Http;
