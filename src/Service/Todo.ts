import Service from "./Service";
import { TodoInfo } from "../Resource/todo";
import TodoEntity from "../Database/Entity/Todo";
import {
  CreateTodoRequest,
  DeleteTodoRequest,
  ShowTodoRequest,
} from "../Request/todo";

interface TodoService {
  list(): Promise<TodoInfo[]>;
  show(request: ShowTodoRequest): Promise<TodoInfo>;
  create(request: CreateTodoRequest): Promise<TodoInfo>;
  delete(request: DeleteTodoRequest): Promise<void>;
}

class Todo extends Service implements TodoService {
  public async list(): Promise<TodoInfo[]> {
    const todos = await this.repository.todo.find();

    const todoInfos: TodoInfo[] = [];

    todos.forEach((todo) => todoInfos.push(todo.getPublicInfo()));

    return todoInfos;
  }

  public async show(request: ShowTodoRequest): Promise<TodoInfo> {
    const todo = await this.repository.todo.findById(request.id);

    return todo.getPublicInfo();
  }

  public async create(request: CreateTodoRequest): Promise<TodoInfo> {
    const todo = new TodoEntity();
    todo.title = request.title;
    todo.body = request.body;

    await this.repository.todo.insert(todo);

    return todo.getPublicInfo();
  }

  public async delete(request: DeleteTodoRequest): Promise<void> {
    const todo = await this.repository.todo.findById(request.id);

    await this.repository.todo.delete(todo);
  }
}

export { TodoService, Todo };
