import { Response } from "express";
import { HttpException } from "../Exception/main";

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

const writeFailResponse = (
  response: Response,
  error: unknown,
  data: unknown
): Response => {
  let statusCode = 500;
  let message = "internal server error";

  if (error instanceof HttpException) {
    statusCode = error.statusCode;
    message = error.message;
  }

  if (error instanceof Error) {
    console.log(error.message);
  }

  return response.status(statusCode).json({
    status: false,
    message: message,
    data: data ? data : null,
  });
};

export { writeSuccessResponse, writeFailResponse };
