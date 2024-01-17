import { Todo, TodoService } from "./todo";

type service = {
  todo: TodoService;
};

const newService = (): service => {
  const s: service = {
    todo: new Todo(),
  };

  return s;
};

export { service, newService };
