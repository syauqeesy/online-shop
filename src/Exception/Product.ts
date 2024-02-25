import { HttpException } from "./main";

export const ERROR_PRODUCT_NOT_FOUND = new HttpException(
  "product not found",
  404,
  null
);
