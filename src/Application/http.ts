import express, {
  Application as ExpressApplication,
  Request,
  Response,
} from "express";
import config from "../Config/main";

class Http implements Application {
  private readonly e: ExpressApplication;

  constructor() {
    this.e = express();
  }

  public run(): void {
    this.e.all(
      "*",
      (_: Request, response: Response): Response =>
        response.status(404).json({
          status: false,
          message: "path not found",
        })
    );

    this.e.listen(config.app.port, () =>
      console.log(`server run on port ${config.app.port}`)
    );
  }
}

export default Http;
