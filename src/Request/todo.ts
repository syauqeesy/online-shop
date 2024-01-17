import Joi from "joi";

export type ShowTodoRequest = {
  id: string;
};

export const showTodoRequestRules = Joi.object({
  id: Joi.string().required().uuid(),
});
