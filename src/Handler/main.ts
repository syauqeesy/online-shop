import { Application, Request, Response } from "express";
import { service } from "../Service/main";
import { writeFailResponse, writeSuccessResponse } from "../Helper/response";
import {
  CreateTodoRequest,
  DeleteTodoRequest,
  EditTodoRequest,
  ShowTodoRequest,
  createTodoRequestRules,
  deleteTodoRequestRules,
  editTodoRequestRules,
  showTodoRequestRules,
} from "../Request/todo";
import { HttpException } from "../Exception/main";

const newHandler = (e: Application, s: service): void => {
  e.get(
    "/api/v1/todo",
    async (_: Request, response: Response): Promise<void> => {
      try {
        const result = await s.todo.list();

        writeSuccessResponse(response, 200, "get list of todo success", result);
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
  e.get(
    "/api/v1/todo/:id",
    async (request: Request, response: Response): Promise<void> => {
      try {
        const body: ShowTodoRequest = {
          id: request.params.id as string,
        };
        const validationResult = showTodoRequestRules.validate(body);
        if (validationResult.error)
          throw new HttpException(
            "validation error",
            400,
            validationResult.error
          );

        const result = await s.todo.show(body);

        writeSuccessResponse(response, 200, "get todo success", result);
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
  e.post(
    "/api/v1/todo",
    async (request: Request, response: Response): Promise<void> => {
      try {
        const body: CreateTodoRequest = request.body;
        const validationResult = createTodoRequestRules.validate(body);
        if (validationResult.error)
          throw new HttpException(
            "validation error",
            400,
            validationResult.error
          );

        const result = await s.todo.create(body);

        writeSuccessResponse(response, 200, "create todo success", result);
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
  e.delete(
    "/api/v1/todo/:id",
    async (request: Request, response: Response): Promise<void> => {
      try {
        const body: DeleteTodoRequest = {
          id: request.params.id as string,
        };
        const validationResult = deleteTodoRequestRules.validate(body);
        if (validationResult.error)
          throw new HttpException(
            "validation error",
            400,
            validationResult.error
          );

        await s.todo.delete(body);

        writeSuccessResponse(response, 200, "delete todo success", null);
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
  e.put(
    "/api/v1/todo/:id",
    async (request: Request, response: Response): Promise<void> => {
      try {
        const body: EditTodoRequest = {
          id: request.params.id as string,
          title: request.body.title,
          body: request.body.body,
        };
        const validationResult = editTodoRequestRules.validate(body);
        if (validationResult.error)
          throw new HttpException(
            "validation error",
            400,
            validationResult.error
          );

        const result = await s.todo.edit(body);

        writeSuccessResponse(response, 200, "edit todo success", result);
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
};

export { newHandler };
