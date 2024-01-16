import express, {
  Application as ExpressApplication,
  Request,
  Response,
} from "express";

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

    this.e.listen(5000, () => console.log(`server run on port ${5000}`));
  }
}

export default Http;
