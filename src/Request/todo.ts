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

export type DeleteTodoRequest = {
  id: string;
};

export const deleteTodoRequestRules = Joi.object({
  id: Joi.string().required().uuid(),
});

export type EditTodoRequest = {
  id: string;
  title: string | null;
  body: string | null;
};

export const editTodoRequestRules = Joi.object({
  id: Joi.string().required().uuid(),
  title: Joi.string().optional().max(191),
  body: Joi.string().optional().max(382),
});
