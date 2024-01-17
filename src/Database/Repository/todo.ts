import { Repository } from "./Repository";
import TodoEntity from "../Entity/Todo";

interface TodoRepository {
  find(): Promise<TodoEntity[]>;
}

class Todo extends Repository implements TodoRepository {
  public async find(): Promise<TodoEntity[]> {
    return this.repository.todo.find();
  }
}

export { TodoRepository, Todo };
