import { HttpException } from "./main";

export const ERROR_TODO_NOT_FOUND = new HttpException("todo not found", 404);
