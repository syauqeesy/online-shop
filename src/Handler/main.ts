import { Application, Request, Response } from "express";
import { service } from "../Service/main";
import { writeFailResponse, writeSuccessResponse } from "../Helper/response";

const newHandler = (e: Application, s: service): void => {
  e.get(
    "/api/v1/todo",
    async (_: Request, response: Response): Promise<void> => {
      try {
        const result = await s.todo.list();

        writeSuccessResponse(response, 200, "get list of todo success", result);
      } catch (caught: unknown) {
        writeFailResponse(response, caught, null);
      }
    }
  );
};

export { newHandler };
