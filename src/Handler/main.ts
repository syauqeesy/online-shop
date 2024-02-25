import { Application, Request, Response } from "express";
import { service } from "../Service/main";
import { writeFailResponse, writeSuccessResponse } from "../Helper/response";
import {
  CreateProductRequest,
  DeleteProductRequest,
  EditProductRequest,
  ShowProductRequest,
  createProductRequestRules,
  deleteProductRequestRules,
  editProductRequestRules,
  showProductRequestRules,
} from "../Request/product";
import { HttpException } from "../Exception/main";

const newHandler = (e: Application, s: service): void => {
  e.get(
    "/api/v1/product",
    async (_: Request, response: Response): Promise<void> => {
      try {
        const result = await s.product.list();

        writeSuccessResponse(
          response,
          200,
          "get list of product success",
          result
        );
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
  e.get(
    "/api/v1/product/:id",
    async (request: Request, response: Response): Promise<void> => {
      try {
        const body: ShowProductRequest = {
          id: request.params.id as string,
        };
        const validationResult = showProductRequestRules.validate(body);
        if (validationResult.error)
          throw new HttpException(
            "validation error",
            400,
            validationResult.error
          );

        const result = await s.product.show(body);

        writeSuccessResponse(response, 200, "get product success", result);
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
  e.post(
    "/api/v1/product",
    async (request: Request, response: Response): Promise<void> => {
      try {
        const body: CreateProductRequest = request.body;
        const validationResult = createProductRequestRules.validate(body);
        if (validationResult.error)
          throw new HttpException(
            "validation error",
            400,
            validationResult.error
          );

        const result = await s.product.create(body);

        writeSuccessResponse(response, 200, "create product success", result);
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
  e.delete(
    "/api/v1/product/:id",
    async (request: Request, response: Response): Promise<void> => {
      try {
        const body: DeleteProductRequest = {
          id: request.params.id as string,
        };
        const validationResult = deleteProductRequestRules.validate(body);
        if (validationResult.error)
          throw new HttpException(
            "validation error",
            400,
            validationResult.error
          );

        await s.product.delete(body);

        writeSuccessResponse(response, 200, "delete product success", null);
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
  e.put(
    "/api/v1/product/:id",
    async (request: Request, response: Response): Promise<void> => {
      try {
        const body: EditProductRequest = {
          id: request.params.id as string,
          name: request.body.name,
          description: request.body.description,
        };
        const validationResult = editProductRequestRules.validate(body);
        if (validationResult.error)
          throw new HttpException(
            "validation error",
            400,
            validationResult.error
          );

        const result = await s.product.edit(body);

        writeSuccessResponse(response, 200, "edit product success", result);
      } catch (caught: unknown) {
        writeFailResponse(response, caught);
      }
    }
  );
};

export { newHandler };
