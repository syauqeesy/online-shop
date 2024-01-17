import { Repository } from "./repository";
import TodoEntity from "../Entity/todo";

interface TodoRepository {
  find(): Promise<TodoEntity[]>;
}

class Todo extends Repository implements TodoRepository {
  public async find(): Promise<TodoEntity[]> {
    return this.repository.todo.find();
  }
}

export { TodoRepository, Todo };
