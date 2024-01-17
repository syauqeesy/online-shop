import { Application, Request, Response } from "express";
import { service } from "../Service/main";

const newHandler = (e: Application, s: service): void => {
  e.get(
    "/api/v1/todo",
    async (_: Request, response: Response): Promise<Response> => {
      const result = await s.todo.list();

      return response.status(200).json({
        status: true,
        message: "get list of todo success",
        data: result,
      });
    }
  );
};

export { newHandler };
