import { DataSource } from "typeorm";
import { Todo, TodoRepository } from "./Todo";
import TodoEntity from "../Entity/Todo";
import { typeOrmRepository } from "./Repository";

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
