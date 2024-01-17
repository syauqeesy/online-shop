import { DataSource } from "typeorm";
import { Todo, TodoRepository } from "./todo";
import TodoEntity from "../Entity/todo";
import { typeOrmRepository } from "./repository";

type repository = {
  todo: TodoRepository;
};

const newRepository = (dataSource: DataSource): repository => {
  const typeOrmRepository: typeOrmRepository = {
    todo: dataSource.getRepository(TodoEntity),
  };

  const r: repository = {
    todo: new Todo(typeOrmRepository),
  };

  return r;
};

export { repository, newRepository };
