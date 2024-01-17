import Service from "./Service";
import TodoEntity from "../Database/Entity/Todo";

interface TodoService {
  list(): Promise<TodoEntity[]>;
}

class Todo extends Service implements TodoService {
  public async list(): Promise<TodoEntity[]> {
    return this.repository.todo.find();
  }
}

export { TodoService, Todo };
