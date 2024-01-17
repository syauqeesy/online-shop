import { Response } from "express";
import { HttpException } from "../Exception/main";
import { ValidationError } from "joi";

const writeSuccessResponse = (
  response: Response,
  code: number = 200,
  message: string = "success",
  data: unknown
): Response => {
  return response.status(code).json({
    status: true,
    message: message,
    data: data ? data : null,
  });
};

const writeFailResponse = (response: Response, error: unknown): Response => {
  let statusCode = 500;
  let message = "internal server error";
  let data: unknown = null;

  if (error instanceof HttpException) {
    statusCode = error.statusCode;
    message = error.message;
    data = error.data;

    if (data instanceof ValidationError) {
      const validationErrors: { path: (string | number)[]; message: string }[] =
        [];

      data.details.forEach((error) => {
        validationErrors.push({
          path: error.path,
          message: error.message,
        });
      });

      data = validationErrors;
    }
  }

  if (error instanceof Error && statusCode === 500) {
    console.log(error.message);
  }

  return response.status(statusCode).json({
    status: false,
    message: message,
    data: data,
  });
};

export { writeSuccessResponse, writeFailResponse };
