import Service from "./Service";
import { TodoInfo } from "../Resource/todo";

interface TodoService {
  list(): Promise<TodoInfo[]>;
  show(id: string): Promise<TodoInfo>;
}

class Todo extends Service implements TodoService {
  public async list(): Promise<TodoInfo[]> {
    const todos = await this.repository.todo.find();

    const todoInfos: TodoInfo[] = [];

    todos.forEach((todo) => todoInfos.push(todo.getPublicInfo()));

    return todoInfos;
  }

  public async show(id: string): Promise<TodoInfo> {
    const todo = await this.repository.todo.findById(id);

    return todo.getPublicInfo();
  }
}

export { TodoService, Todo };
