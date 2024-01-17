import Joi from "joi";

export type ShowTodoRequest = {
  id: string;
};

export const showTodoRequestRules = Joi.object({
  id: Joi.string().required().uuid(),
});

export type CreateTodoRequest = {
  title: string;
  body: string;
};

export const createTodoRequestRules = Joi.object({
  title: Joi.string().required().max(191),
  body: Joi.string().required().max(382),
});
