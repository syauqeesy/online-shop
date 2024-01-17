import { Repository } from "./Repository";
import TodoEntity from "../Entity/Todo";
import { ERROR_TODO_NOT_FOUND } from "../../Exception/Todo";

interface TodoRepository {
  find(): Promise<TodoEntity[]>;
  findById(id: string): Promise<TodoEntity>;
}

class Todo extends Repository implements TodoRepository {
  public async find(): Promise<TodoEntity[]> {
    return this.repository.todo.find();
  }

  public async findById(id: string): Promise<TodoEntity> {
    const todo = await this.repository.todo.findOne({ where: { id: id } });
    if (!todo) {
      throw ERROR_TODO_NOT_FOUND;
    }

    return todo;
  }
}

export { TodoRepository, Todo };
