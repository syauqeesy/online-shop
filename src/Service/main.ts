import { repository } from "../Database/Repository/main";
import { Todo, TodoService } from "./todo";

type service = {
  todo: TodoService;
};

const newService = (repository: repository): service => {
  const s: service = {
    todo: new Todo(repository),
  };

  return s;
};

export { service, newService };
