import Service from "./service";

interface TodoService {
  list(): { status: boolean; message: string };
}

class Todo extends Service implements TodoService {
  public list(): { status: boolean; message: string } {
    return { status: true, message: "get list todo success" };
  }
}

export { TodoService, Todo };
