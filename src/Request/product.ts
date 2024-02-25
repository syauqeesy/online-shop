import Joi from "joi";

export type ShowProductRequest = {
  id: string;
};

export const showProductRequestRules = Joi.object({
  id: Joi.string().required().uuid(),
});

export type CreateProductRequest = {
  name: string;
  description: string;
};

export const createProductRequestRules = Joi.object({
  name: Joi.string().required().max(191),
  description: Joi.string().required().max(382),
});

export type DeleteProductRequest = {
  id: string;
};

export const deleteProductRequestRules = Joi.object({
  id: Joi.string().required().uuid(),
});

export type EditProductRequest = {
  id: string;
  name: string | undefined;
  description: string | undefined;
};

export const editProductRequestRules = Joi.object({
  id: Joi.string().required().uuid(),
  name: Joi.string().optional().max(191),
  description: Joi.string().optional().max(382),
});
