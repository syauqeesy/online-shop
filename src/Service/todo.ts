import Service from "./service";
import TodoEntity from "../Database/Entity/todo";

interface TodoService {
  list(): Promise<TodoEntity[]>;
}

class Todo extends Service implements TodoService {
  public async list(): Promise<TodoEntity[]> {
    return this.repository.todo.find();
  }
}

export { TodoService, Todo };
