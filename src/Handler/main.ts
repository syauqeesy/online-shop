import { Application, Request, Response } from "express";
import { newService, service } from "../Service/main";

const newHandler = (e: Application): void => {
  const s: service = newService();

  e.get("/api/v1/todo", (_: Request, response: Response): Response => {
    const result = s.todo.list();

    return response.status(200).json(result);
  });
};

export { newHandler };
