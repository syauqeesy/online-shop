import { Repository } from "./Repository";
import TodoEntity from "../Entity/Todo";
import { ERROR_TODO_NOT_FOUND } from "../../Exception/Todo";
import { DateTime } from "luxon";
import { IsNull } from "typeorm";

interface TodoRepository {
  find(): Promise<TodoEntity[]>;
  findById(id: string): Promise<TodoEntity>;
  insert(todo: TodoEntity): Promise<void>;
  delete(todo: TodoEntity): Promise<void>;
  update(todo: TodoEntity): Promise<void>;
}

class Todo extends Repository implements TodoRepository {
  public async find(): Promise<TodoEntity[]> {
    return this.repository.todo.find();
  }

  public async findById(id: string): Promise<TodoEntity> {
    const todo = await this.repository.todo.findOne({
      where: { id: id, deleted_at: IsNull() },
    });
    if (!todo) {
      throw ERROR_TODO_NOT_FOUND;
    }

    return todo;
  }

  public async insert(todo: TodoEntity): Promise<void> {
    this.repository.todo.insert(todo);
  }

  public async delete(todo: TodoEntity): Promise<void> {
    todo.deleted_at = DateTime.now().toMillis();

    this.repository.todo.save(todo);
  }

  public async update(todo: TodoEntity): Promise<void> {
    this.repository.todo.save(todo);
  }
}

export { TodoRepository, Todo };
